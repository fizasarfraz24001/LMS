import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 
import '../logincss.css';


const initialState={
    name:"",
    
    password:"",
    };

const Login=() =>{
    const [state,setState]=useState(initialState);
    const {name,password}=state;
 const history=useNavigate();
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!name || !password){
 toast.error("Please fill all field");
     }
     else{
         axios
         .post("http://localhost:5000/loginStudent",{
             name,
           
             password,
             
         }
         
         )
         .then(() =>{
            localStorage.setItem("Name",name);
         
            setState({name:"",email:"",password:""});
        
            swal.fire({
                position: 'center',
  icon: 'success',
 
                text: 'You Are Sucessfully Login In Lms With Parents Views!',
               
              })           
            

            setTimeout(()=>history("/Home",{replace:true}),1000);
            
         })
         .catch((err)=>toast.error(err.response.data));
         swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong user Name And Password Combination For Student Panel!',
           
          })
       //  swal("");
 
 
     }
    };
    const handleInputChange=(e)=>{
     const {name,value}=e.target;
 setState({...state,[name]:value});
 };
    
    return(
      
   <div id="log">
    <div className="pic">
<div className="container" >  
<div className="container-fluid ">
  <div className="container">
    <div className="login pt-5 ">
    <div className="row">
      <div id="borderRad" className="col-12 mx-auto  shadow shadow-lg mt-5 col-md-4">

      <form onSubmit={handleSubmit}  className="col-md-12" >
      <h1 >Login_Form</h1>
<p className="fact">LMS WITH PARENT VIEWS</p>
<div className="col-12 mb-3 mt-3 ">
    <label for="username" className="form-label h5 text-dark">UserName</label><br/>
    <div className="input-group">
    <span className="input-group-text"><i className="fa-solid fa-user-graduate"></i></span>
    <input type="text" name='name' id='name' onChange={handleInputChange} className="form-control " 
     placeholder="Enter UserName"  autofocus  required/>
   </div>
  </div>

  <div className="col-12 mb-3 col-6">
  <label for="username" className="form-label h5 text-dark">Password</label><br/>
    
    <div className="input-group">
     <span className="input-group-text"><i className="fa-solid fa-shield-halved"></i></span>
    <input type="password" name='password' id='password' onChange={handleInputChange} className="form-control" placeholder="Enter password"  required/>
</div>
</div>
<div className="clearfix">
  <button type="submit" className="btn btn-outline-primary  loginbtn float-end" name="submit"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</button>
  </div>
  <br/>

    </form >

</div>
</div>   
</div>
</div></div></div></div>

   </div>



   
    )
    }
export default Login;