import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const Logout = () => {
    return (
        <div style={{height:"100%"}}>
        <Navbar />
        <div className="login-cover">
               
            <div id="login-heading" style={{width:"380px",height:"320px",marginTop:"200px",marginRight:"160px"}}>
            <div className="row login-icon" >
                      <p>  <FontAwesomeIcon icon={faSignOutAlt} size="4x" /></p>
                    </div>
                <div className="row login-heading-box" style={{marginTop:"10px"}} >
                    <h3 style={{textAlign:"center"}}>You have successfully<br></br> Logged out</h3>
                </div>
                <div className="row" >
                     <a href="/login" style={{textAlign:"center",marginTop:"20px",fontSize:"22px",color:"black"}}>Login Again</a>
                </div>
                   
            </div>
               
        </div>
    </div>
    )
}

export default Logout
