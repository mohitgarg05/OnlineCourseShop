import React from 'react'
import  Courses from './Courses'
import Navbar from './Navbar'
const Showcourses = () => {
    return (
        <>
            
                 <div class="content-box">
                    <Navbar />
                    <div class="content-title" >
                        <h3 >ALL COURSES</h3>
                        <div class="content-title-underline"></div>
                    </div>
                    <div className="container m-auto" >
                        <div className="row">
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                        </div>
                        <div className="row"  style={{marginTop:"30px"}}>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                            <div className="col-md-3">
                                <Courses />
                            </div>
                        </div>
                    </div>
                </div>
         
            
        </>
    )
}

export default Showcourses;
