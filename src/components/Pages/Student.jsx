import axios from 'axios'
import React, { useState } from 'react'
import Studata from './Studata'

const Student = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState([])

  const handleLogin = async() =>{
    const response = await axios.get('http://localhost:8080/students')
    const result = response.data

    const stuLogin = result.filter((stu)=> stu.email === email && stu.password === password)

    if(stuLogin.length > 0){
      setLoggedIn(stuLogin)
      alert('Student Login Successful')
    }else{
      alert('Wrong Username or Password')
      setEmail('')
      setPassword('')
    }
  }

  const handleLogout = () =>{
    setLoggedIn([])
    setEmail('')
    setPassword('')
  }

  if(loggedIn.length > 0 ){
    return <Studata student={loggedIn} onLogout={handleLogout}/>
  }
  return (
    <div>
        <h2 className='text-center mt-3'>Student Login</h2>
        <div className='w-50 p-4 mx-auto mt-5 mb-5 bg-dark rounded-2'>
            <div className='mb-3'>
                <input 
                  type='email'
                  className='form-control'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
              <input 
                type='password'
                className='form-control'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className='text-center'>
              <button className='btn btn-outline-success' onClick={handleLogin}>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Student