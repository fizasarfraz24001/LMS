import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 



import Sidebar from "./Sidebar";

const initialState={
    password:"",


};
const Editprofile=() =>{
  
    const [state,setState]=useState(initialState);
    const {password}=state;
 const history=useNavigate();

 //fetchData start
 const {Userid}=useParams();
 useEffect(()=>{
 axios.get(`http://localhost:5000/FetchAdmin/${Userid}`)
 .then((resp)=>setState({...resp.data[0]}));
 },[Userid]);
 
    const handleInputChange=(e)=>{
     const {name,value}=e.target;
 setState({...state,[name]:value});
 };
     
 const [Image,setImage]=useState("");
 const setImgFile=(e)=>{
     setImage(e.target.files[0]);
    }
 const handleSubmit= async  (e)=>{
     e.preventDefault();
    
     var formData= new FormData();
  
    formData.append("password",password);

    formData.append("Image",Image);
    const config={
     headers:{
         "Content-Type":"multipart/form-data"
     }
    }
    await axios.put(`http://localhost:5000/UpdateProfile/${Userid}`,formData,config)
    .then(response => {
        swal.fire(response.data);
        setTimeout(()=>history("/Profile",{replace:true}),1000);
      })
    .catch(error => {
        swal.fire(error.response.data);
      });
 
 
 
     
    };
    
    return(
        <div>
     <Sidebar/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Update Profile</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="mb-3 mt-3">

      <label for="Brench_Name"  className="p-2">Password</label>
        
      <input type="text" name='password' id='UName' onChange={handleInputChange} value={password} className="form-control"  placeholder="UserRole"  required/>
   
  </div>
  <div className="row">

<div className="col">
      <label for="Brench_Name"  className="p-2">Image</label>
    
      <input type="file" name='Image' id='Image'  className='form-control' accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG,.jfif,.JFIF" onChange={setImgFile} require/>
    </div>
</div>

    <div className="clearfix ">
    <button type="submit" name="AddClass" id="submits" className="btn btn-outline-primary float-end">
        <i className="fa fa-sign-in" aria-hidden="true" ></i>Update</button>
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
    )
    }
export default Editprofile;