import Logo from '../img/bg2.jpg'
import Navbar from './Navbar'
const Profile = () => {
    return (
        <div style={{width:"202vh", height:"100vh"}} >
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-md-6 profile-pic">
                     {/* users image will come here */}
                    <img className="col-md-12" src={Logo}></img> 
                </div>
                <div className="col-md-6 profile-info">
                    <div className="row profile-heading">
                        <h1>MY PROFILE</h1>
                    </div>
                    <div class="content-title-underline" style={{marginTop:"10px", width:"50px"}} ></div>
                    <div className="row profile-details">
                        <p>Name : Mohit Garg</p>
                        <p>Email : mgarg6858@gmail.com</p>
                        <p>Username : mohitgarg05</p>
                        <p>Number : 8209737893</p>
                        <p>City : Bikaner</p>
                        <p>State : Rajasthan</p>
                        <p>Country : India</p>
                    </div>

                </div>
        </div>
        </div>
    )
}

export default Profile
