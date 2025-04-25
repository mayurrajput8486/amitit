import React, { useState } from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const {register, handleSubmit, reset, formState : {errors}, setValue} = useForm()
  const navigate = useNavigate()
  
  const addStudent = (data) =>{
    axios.post('http://localhost:8080/students',data)
    alert('Data Added !!!')
    reset()
    navigate('/stu_details')
  }

  const [course, setCourse] = useState('')

  const courseFees = {
    React : '15000',
    Java : '35000',
    Python : "30000",
    "C++" : '5000',
    "Data Analytics" : '45000',
    Azure : "25000",
    DSA : "5000",
    AWS : "30000",
    "Software Testing" : "30000"
  }

  const courseHandler = (event) => {
    const selectCourse = event.target.value
    setCourse(selectCourse)
    const selectFees = courseFees[selectCourse]
    setValue("fees",selectFees)
    

  }

  return (
    <div>
      <section className="h-100 bg-secondary">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" className="img-fluid formstyle"
                     />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
                      <form onSubmit={handleSubmit(addStudent)}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" 
                            {...register('first_name',{
                              required : "First Name is Required",
                              pattern : {
                                value : /^[A-Za-z]+$/,
                                message : "Only Alphbates are allowed"
                              }
                            })}/>
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                            {
                              errors.first_name && <div className='text-danger'>{errors.first_name.message}</div>
                            }
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                            {...register('last_name',{
                              required : "Last Name is required",
                              pattern : {
                                value : /^[A-Za-z]+$/,
                                message : "Only Alphabates are allowed"
                              }
                            })}/>
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                            {
                              errors.last_name && <div className='text-danger'>{errors.last_name.message}</div>
                            }
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" 
                        {...register('address',{
                          required : "Address is required",
                          pattern : {
                            value : /^[A-Za-z\d\s,.-]+$/,
                            message : "Address is Invalid"
                          }
                        })}/>
                        <label className="form-label" htmlFor="form3Example8">Address</label>
                        {
                          errors.address && <div className='text-danger'>{errors.address.message}</div>
                        }
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="female" 
                          {...register('gender',{
                            required : "Please Select ine Option"
                          })}/>
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="male" 
                          {...register('gender',{
                            required : "Please Select ine Option"
                          })}/>
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="other" 
                          {...register('gender',{
                            required : "Please Select ine Option"
                          })}/>
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select data-mdb-select-init className='form-control' 
                          {...register('state',{
                            required : "Select Any State"
                          })}>
                            <option value="">State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gujrat">Gujrat</option>
                          </select>
                          {
                            errors.state && <div className='text-danger'>{errors.state.message}</div>
                          }

                        </div>
                        <div className="col-md-6 mb-4">

                          <select data-mdb-select-init className='form-control' {...register('city',{
                            required : "Salect Any City"
                          })}>
                            <option value="">City</option>
                            <option value="Pune">Pune</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ahemdabad">Ahemdabad</option>
                          </select>
                          {
                            errors.city && <div className='text-danger'>{errors.city.message}</div>
                          }
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <select data-mdb-select-init className='form-control' 
                          {...register('course',{
                            required : "Select Any Course"
                          })} onChange={courseHandler} value={course}>
                            <option value=''>Select Course</option>
                            {
                              Object.keys(courseFees).map((course)=>{
                                return(
                                  <option key={course}>
                                    {course}
                                  </option>
                                )
                              })
                            }
                          </select>
                          {
                            errors.course && <div className='text-danger'>{errors.course.message}</div>
                          }
                        </div>
                        <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder='Seelct Course for fees'
                              {...register('fees')}
                            />
                        </div>
                      </div>


                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="date" id="form3Example9" className="form-control form-control-lg" {...register('dob',{
                          required : "Select Date of Birth"
                        })}/>
                        <label className="form-label" htmlFor="form3Example9">DOB</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="tel" id="form3Example90" className="form-control form-control-lg" {...register('contact',{
                          required : "Enter Valid Contact",
                          pattern : {
                            value : /^[6789]{1}[0-9]{9}$/,
                            message : "Contact must be 10 digit"
                          }
                        })}/>
                        <label className="form-label" htmlFor="form3Example90">Contact</label>
                        {
                          errors.contact && <div className='text-danger'>{errors.contact.message}</div>
                        }
                      </div>


                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form3Example97" className="form-control form-control-lg" {...register('email',{
                          required : "Enter valid email"
                        })}/>
                        <label className="form-label" htmlFor="form3Example97">Email ID</label>
                        {
                          errors.email && <div className='text-danger'>{errors.email.message}</div>
                        }
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register