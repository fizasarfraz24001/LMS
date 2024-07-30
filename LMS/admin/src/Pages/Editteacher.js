import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headerbrench from "./Headerbrench";

//allrequire library available

const initialState={
    name:"",
    email:"",
    password:"",
    };


const Edituser=() =>{
 
    const [state,setState]=useState(initialState);
    const {name,email,password}=state;
 const history=useNavigate();
 

 //fetchData start
 const {Userid}=useParams();
 useEffect(()=>{
 axios.get(`http://localhost:5000/FetchAdmin/${Userid}`)
 .then((resp)=>setState({...resp.data[0]}));
 },[Userid]);
 //fetch data close
 
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!name || !email || !password){
 toast.error("Please fill all field");
     }
     else{
         axios
         .put(`http://localhost:5000/updateAdmin/${Userid}`,{
             name,
             email, 
             password,
        
             
         }
         
         )
         .then(response => {
            swal.fire(response.data);
            setTimeout(()=>history("/Viewteacher",{replace:true}),1000);
          })
        .catch(error => {
            swal.fire(error.response.data);
          });
        

 
     }
    };
    const handleInputChange=(e)=>{
     const {name,value}=e.target;
 setState({...state,[name]:value});
 };
   
    return(
      
   <div>
     <Headerbrench/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Update User</p>
</div> 

<form   id="inserted" encType="multipart/form-data"
    className="mx-auto dp-block">    
    
                    <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">Name</label>
        
      <input type="name" name='name'  onChange={handleInputChange} value={name || " "} className="form-control"  placeholder="email"  required/>
  </div>
  <div className="col">
      <label for="Brench_Name"  className="p-2">Email</label>
        
      <input type="email" name='email'  onChange={handleInputChange} value={email}  className="form-control"  placeholder="Address"  required/>
  </div>
  </div>
 
  <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">Password</label>
        
      <input type="name" name='password'  onChange={handleInputChange} value={password} className="form-control"  placeholder="email"  required/>
  </div>
  </div>
    <div className="clearfix ">
    <button type="submit" name="AddClass" id="submits" onClick={handleSubmit} className="btn btn-outline-primary float-end">
        <i className="fa fa-sign-in" aria-hidden="true" ></i>Update </button>
  </div>
                </form>

</div>{/* col heig */}
</div>{/* row */}
</div>{/* constainer */}
</div>{/* Cols */}
</div> {/* insertedphp */}





  {/*all conding in classes k under krni ha */}
    </div>

   </div>

</div>

   
    );
    }
export default Edituser;