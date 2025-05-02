import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Register from './components/Pages/Register.jsx'
import Admin from './components/Pages/Admin.jsx'
import Student from './components/Pages/Student.jsx'
import Contact from './components/Pages/Contact.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Update from './components/Pages/Update.jsx'
import Delete from './components/Pages/Delete.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Studentdetails from './components/Pages/Studentdetails.jsx'
import Studata from './components/Pages/Studata.jsx'
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
            <Route path='/stu_details' element={<Studentdetails/>}></Route>
            <Route path='/studata' element={<Studata/>}></Route>
            <Route path='/update/:studentID' element={<Update/>}></Route>
            <Route path='/delete/:studentID' element={<Delete/>}></Route>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
        
    </div>
  )
}

export default App