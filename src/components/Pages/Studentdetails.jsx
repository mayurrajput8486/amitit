import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Studentdetails = () => {

    //update the records of students 
    const [stu, setStu] = useState([])

    //fetch data using axios.get
    const getData = async() =>{
        try{
            const response = await axios.get("http://localhost:8080/students")
            //console.log(response)
            const result = response.data
            //console.log(result)
            setStu(result)
        }catch(error){
            console.log('Error while fetching data', error.message)
        }
        
    }

    //handling the sideeffect
    useEffect(()=>{
        getData()
    } , [])

  return (
    <div style={{height : '650px'}}>
        <h2 className='mt-3 text-center'>Students Details</h2>
        <div className='mt-3'>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Course</th>
                        <th>Fees</th>
                        <th>DOB</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stu.map((s,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{s.first_name}</td>
                                    <td>{s.last_name}</td>
                                    <td>{s.address}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.state}</td>
                                    <td>{s.city}</td>
                                    <td>{s.course}</td>
                                    <td>{s.fees}</td>
                                    <td>{s.dob}</td>
                                    <td>{s.contact}</td>
                                    <td>{s.email}</td>
                                    <td>
                                        <NavLink to={`/update/${s.id}`}>
                                            <button className='btn btn-warning me-2'>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                        </NavLink>
                                        
                                        <button className='btn btn-danger'>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Studentdetails