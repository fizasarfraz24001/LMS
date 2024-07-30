import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";



//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available
import Sidebar from "./Sidebar";


const Profile=()=>{
    
    const A=localStorage.getItem("Name");
   
  
      const [records, setRecords] = useState([]);
    
      useEffect(() => {
        axios.get(`http://localhost:5000/Profile/${A}`)
          .then(response => setRecords(response.data))
          .catch(error => console.log(error));
      }, [A]);




    return(
    
        <div>
            <Sidebar/>
     
       <div className="content-fluid">
       <div className="main-content">
   
      
   
        {records.map(record => (
         

<div className="container">
    <div className="row">
      
   <h1 className="d-flex justify-content-center  p-2" style={{background: "blueviolet"}}>Profile Information</h1>
     
       <div className="col-sm-6">
        <label for="Brench_Name"  className="p-2">UserName</label>
        
        <input type="text" value={record.name}    className="form-control text-dark"   />
        <label for="Brench_Name"  className="p-2">User Email</label>
        
        <input type="text" value={record.email}    className="form-control text-dark"   />
        </div>{/*col-6 */}
      
      
        <div className="col-sm-6">
        <label for="Brench_Name"  className="p-2">User Password</label>
        
        <input type="text" value={record.password}    className="form-control text-dark"   />
        <label for="Brench_Name"  className="p-2">User Role</label>
        
        <input type="text" value={record.UName}    className="form-control text-dark"   />
        <Link 
        to={"Editprofile/"+record.Userid}
         >
            <button className="btn btn-outline-primary mt-3">Update Profile</button>
        </Link>
        </div>
        <div className="col-sm-6 d-flex mx-auto mt-3">
        <img src={record.Image} className="img-thumbnail" alt=" Image" />
        
            </div>
            <h5 className="d-flex justify-content-center K h3">Profile Pic</h5>
        </div>
       
    </div>










            
        
        ))}
     
     
      </div>
        </div>
        </div>
        
    )
}
export default Profile;