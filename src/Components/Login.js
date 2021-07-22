import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div style={{height:"100%"}}>
            <Navbar />
            <div className="login-cover" >
                   
                <div id="login-heading" style={{height:"360px",marginTop:"170px"}} >
                    <div className="row login-icon" >
                      <p>  <FontAwesomeIcon icon={faUsers} size="4x" /></p>
                    </div>
                    <div className="row">
                         
                        <form className="form-group">
                            <div className="row">
                            
                                <input class="col-auto form-group" placeholder="Username"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                            
                                <input class="col-auto form-group" placeholder="Password"></input>
                            </div>
                           
                            <div className="row login-btn">
                                <button className="col-auto btn-general2">Login</button>
                            </div>
                        </form>
                    </div>
                       
                </div>
                   
            </div>
        </div>
    )
}

export default Login
