import express from 'express'
import cloudinary from '../lib/cloudinary.js'
import Book from '../models/book.js'
import User from '../models/User.js'

const router = express.Router()

router.post("/", protectRoute, async(req, res) => {
    try {
        const { title, caption, rating, image, author } = req.body
        if(!title || !caption || !rating || !image || !author) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }

        const uploadResponse = await cloudinary.uploader.upload(image)
        const imageUrl = uploadResponse.secure_url

        const newBook = await Book.create({ 
            title, 
            caption, 
            rating, 
            image: imageUrl, 
            author,
            //user: req.user._id,
        })

        await newBook.save()
        res.status(201).json(newBook)
    }catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})


export default router