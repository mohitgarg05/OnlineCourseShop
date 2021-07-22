import React from 'react'
import Logo from '../img/bg1.jpg'

const Courses = () => {
    return (
        <div>
            <div className="courses-content">
                <div className="courses-content-img">
                        <img src={Logo} alt="here" ></img>
                </div>
                <div>
                <a>
                    <button className="btn-general">Buy Course</button>
                </a>
                <a>
                    <button className="btn-general">View Course</button>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Courses
