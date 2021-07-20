import React,{Component} from 'react'
import Courses from './Courses'
import Navbar from './Navbar'
import 'aos/dist/aos.css'; 
import "./responsive.css"
import AOS from 'aos';

class Home extends Component{
   
    componentDidMount(){
        AOS.init({duration : 2000})
    }
    render(){
        return(
            <div style={{height:"100%"}}>
                <header>
                    <Navbar />
                </header>
                <section id="home" >
                
                <div id="home-cover" className="animate__animated animate__fadeIn "> 
                        <div id="home-content-box">
                                <div id="home-content-box-inner">
                                        <div id="home-heading" className="animate__animated animate__zoomIn "  style={{animationDelay:"0.8s"}} >
                                            <h5>"You can’t teach people everything 
                                            they need to know. The best you can do is
                                            position them where they can find what
                                            they need to know when they 
                                            need to know it"</h5>
                                        </div>
                                </div>
                        </div>
                    </div>
            
                </section>
                
                
                <section id="courses" >
                    <div class="content-box">
                        <div class="content-title" data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">
                            <h3 >Our Top Courses</h3>
                            <div class="content-title-underline"></div>
                        </div>
                        <div className="container m-auto" >
                            <div className="row" data-aos = "fade-down"  data-aos-duration="1000"  data-aos-delay="100">
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6 col-auto">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                            </div>
                            <div className="row" data-aos = "fade-down"  data-aos-duration="1000"  data-aos-delay="100" style={{marginTop:"30px"}}>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <Courses />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section id="about" >
        
                    <div class="about-bg-diagonal bg-parallax" ></div>
                    
                    <div class="container"  >
                        <div class="row   about-content-outer"   >
                            <div class="col-md-8">
                                <div class="about-content-box-inner" >
                                    <div class="content-title" data-aos = "fade-down"  data-aos-duration="1300">
                                        <h3>About Us</h3>
                                        <div class="content-title-underline"></div>
                                    </div>
                                    <div id="about-desc" data-aos = "fade-down"  data-aos-duration="1300">
                                        <p>Being a non-profit organisation, We aims 
                                        to provide a free and best education for anyone and 
                                        anywhere in the world.The site provides micro-lectures,
                                        instructional videos  to help you develop and sharpen your skills. We have partnered
                                        with other post-secondary schools and offers a
                                            well-organised interface. What more, almost 
                                            every course you find on this platform is for free</p>
                                    </div>
                            
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </section>
                
                
            </div>
        );
    }
}


export default Home;
