import React,{useState,useRef} from 'react'
import Navbar from './Navbar'
import userLogo from '../img/user-img.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
const Signup = () => {
    const [Input, setInput] = useState({name:"",states:"",username:"" , email:"",pass:"",confirmpass:"",number:"",country:"",city:""})
    const [handleImage, sethandleImage] = useState(userLogo)
    const handleInput=(e)=>{
            const {name,value} = e.target;
            setInput((preValue)=>{
                return{
                    ...preValue,
                    [name] : value
                };
            })
        
        }
    
        const Imagehandler = (e)=>{
            const reader = new FileReader();
            reader.onload = ()=>{
                if(reader.readyState === 2){
                    sethandleImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    return (
        <div style={{height:"100%"}}>
        <Navbar />
        <div className="login-cover">
               
            <div id="login-heading"  >
                <div className="row login-icon" >
                    <img src={handleImage}></img>
                    <input type="file" name="file" id="file" accept="image/*" onChange={Imagehandler}></input>
                    <div className="label">
                        <label for="file">
                            <AddAPhotoIcon  />
                        </label>
                    </div>
                
                </div>
                <div className="row">
             <form className="form-group">
                            <div className="row">
                                <input class="col-auto form-group" value={Input.name} onChange={handleInput} name="name" placeholder="Full Name"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" value={Input.username} onChange={handleInput} name="username" placeholder="Create Username"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" name="email" value={Input.email} onChange={handleInput} placeholder="Email"></input>
                            </div>
                            <div className="row password" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group"  type="password" value={Input.pass} onChange={handleInput} name="pass"  placeholder="Password"></input>
                                
                            </div>
                            <div className="row confirm" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" type = "password" value={Input.confirmpass} onChange={handleInput} name="confirmpass" placeholder="Confirm Password"></input>
                                
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" name="number" value={Input.number} onChange={handleInput} placeholder="Phone Number"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" name="city" value={Input.city} onChange={handleInput} placeholder="City"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" name="states" value={Input.states} onChange={handleInput} placeholder="State"></input>
                            </div>
                            <div className="row" style={{marginTop:"10px"}}>
                                <input class="col-auto form-group" name="country" value={Input.country} onChange={handleInput} placeholder="Country"></input>
                            </div>
                            
                            <div className="row login-btn">
                                <button className="col-auto btn-general2">Signup</button>
                            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
       
    )
}

export default Signup
