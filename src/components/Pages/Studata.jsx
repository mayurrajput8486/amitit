import React from 'react'

const Studata = ({onLogout, student}) => {
  return (
    <div>
        <div className='text-center'>
            <h2>Student Details - {student.first_name}</h2>
        </div>
        <div>
            <table className='table'>
                <thead>
                    <tr>
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
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((stu,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{stu.first_name}</td>
                                    <td>{stu.last_name}</td>
                                    <td>{stu.address}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.state}</td>
                                    <td>{stu.city}</td>
                                    <td>{stu.course}</td>
                                    <td>{stu.fees}</td>
                                    <td>{stu.dob}</td>
                                    <td>{stu.contact}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.password}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className='text-center'>
            <button className='btn btn-warning w-50 mb-3 mt-3' onClick={onLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Studata