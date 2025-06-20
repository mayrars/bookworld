import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Layout from './Layout';

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
