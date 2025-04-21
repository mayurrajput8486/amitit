import React from 'react'
import aws from '../../../assets/cards/aws.png'
import azure from '../../../assets/cards/AZURE.jpg'
import cpp from '../../../assets/cards/CPP.jpg'
import da from '../../../assets/cards/da.jpeg'
import dsa from '../../../assets/cards/dsa.jpg'
import java from '../../../assets/cards/java.jpg'
import python from '../../../assets/cards/python.jpg'
import react from '../../../assets/cards/react.png'
import st from '../../../assets/cards/st.jpeg'
import { NavLink } from 'react-router-dom'
const Cards = () => {
    return (
        <div className='bg-secondary pt-5 pb-5'>
            <div className='d-flex justify-content-evenly mb-3'>
                <div className="card" style={{width : '18rem'}}>
                    <img src={react} className="card-img-top" alt="react" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">REACT</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={aws} className="card-img-top" alt="aws" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">AWS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={azure} className="card-img-top" alt="azure" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">AZURE</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>
            </div>


            <div className='d-flex justify-content-evenly mb-3'>
                <div className="card" style={{width : '18rem'}}>
                    <img src={da} className="card-img-top" alt="da" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">Data Analytics</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={dsa} className="card-img-top" alt="dsa" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">DSA</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={java} className="card-img-top" alt="java" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">JAVA</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>
            </div>


            <div className='d-flex justify-content-evenly'>
                <div className="card" style={{width : '18rem'}}>
                    <img src={python} className="card-img-top" alt="python" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={st} className="card-img-top" alt="st" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">Soft Testing</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>

                <div className="card" style={{width : '18rem'}}>
                    <img src={cpp} className="card-img-top" alt="cpp" height={175}/>
                        <div className="card-body">
                            <h5 className="card-title">C++</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/register" className="btn btn-primary">Enroll Here</NavLink>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cards