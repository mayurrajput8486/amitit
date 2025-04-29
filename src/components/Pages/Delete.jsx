import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'


const Delete = () => {

    const {studentID} = useParams()
    const [stu,setStu] = useState('')
    const navigate = useNavigate()

    //fetch data using axios
    const getData = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/students/${studentID}`)
            //console.log(response)
            const result = response.data
            //console.log(result)
            setStu(result)
        }catch(error){
            console.log(`Error while fetching data ${error.message} `)
        }
       
    }
    useEffect(()=>{
        getData ()
    }, [])

    //use http DELETE method
    const deleteData = () =>{
        axios.delete(`http://localhost:8080/students/${studentID}`)
        alert('Data Deleted !!!')
        navigate('/stu_details')
    }

  return (
    <div style={{height : '600px'}}>
        <div className='bg-dark text-light w-50 mx-auto mt-3 mb-3 text-center p-3 rounded-2 mt-5'>
            <h2>Delete Record For - </h2>
            <div className='fs-4'>Student ID - {stu.id}</div>
            <div className='fs-4'>Full Name - {stu.first_name} {stu.last_name}</div>
            <div className='fs-4'>Contact - {stu.contact}</div>
            <div>
                <button className='btn btn-danger me-3' onClick={deleteData}>YES</button>
                <NavLink to='/stu_details'>
                    <button className='btn btn-warning'>NO</button>
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default Delete