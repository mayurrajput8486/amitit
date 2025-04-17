import React from 'react'
import DS from '../../../assets/carousel/datasceince.png'
import java from '../../../assets/carousel/java.png'
import python from '../../../assets/carousel/python.png'
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={DS} className="d-block w-100" alt="ds"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={java} className="d-block w-100" alt="java"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={python} className="d-block w-100" alt="python"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider