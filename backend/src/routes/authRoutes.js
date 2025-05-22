import express from "express"
import User from "../models/User"

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const {email, username, password} = req.body
    if(!email || !username || !password) {
      res.status(400).json({message: "All fields are required"})
    } else {
      res.send("register")
    }

    if(password.length < 6) {
      res.status(400).json({message: "Password must be at least 6 characters"})
    }

    if(username.length < 3) {
      res.status(400).json({message: "Username must be at least 3 characters"})
    }

    const existingEmail = await User.findOne({email})
    if(existingEmail) return res.status(400).json({message: "Email already exists"})

    const existingUsername = await User.findOne({username})
    if(existingUsername) return res.status(400).json({message: "Username already exists"})

    //get random avatar of dicebear
    const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
    const user = new User({email, username, password, profileImage})
    await user.save()
    
  } catch (error) {
    
  }
})

router.post("/login", async (req, res) => {
  res.send("login")  
})

export default router