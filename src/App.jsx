import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Register from './components/Pages/Register.jsx'
import Admin from './components/Pages/Admin.jsx'
import Student from './components/Pages/Student.jsx'
import Contact from './components/Pages/Contact.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App