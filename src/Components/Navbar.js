import React from 'react'

 const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/" style={{textTransform:"uppercase",letterSpacing:"4px" , fontFamily:"italic"}}>
                        Course shop
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
  </button>

                    
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{marginLeft:"auto"}}>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">LogIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/history">History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
      
                        </ul>
                    </div>
            </nav>
            
        </div>
    )
}


export default Navbar;