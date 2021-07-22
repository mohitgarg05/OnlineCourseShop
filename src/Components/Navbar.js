import React from 'react'
import Logo from '../img/logo3.jpeg'

 const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor : "rgb(19,35,62)"}}>
                    <a className="navbar-brand" href="/" style={{textTransform:"uppercase",letterSpacing:"4px" , fontFamily:"italic"}}>
                        <img src={Logo} ></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
  </button>

                    
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{marginLeft:"auto",fontSize:"25px"}}>
                            <li className="nav-item active">
                                <a className="nav-link" href="/" style={{marginRight:"20px"}}>Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login" style={{marginRight:"20px"}}>LogIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup" style={{marginRight:"20px"}}>SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses" style={{marginRight:"20px"}}>Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile" style={{marginRight:"20px"}}>Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/history" style={{marginRight:"20px"}}>History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout" style={{marginRight:"20px"}}>Logout</a>
                            </li>
      
                        </ul>
                    </div>
            </nav>
            
        </div>
    )
}


export default Navbar;