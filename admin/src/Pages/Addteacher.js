import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headerteacher from "./Headerteacher";

//allrequire library available

const initialState={
    name:"",
    email:"",
    password:"",

};


const Addteacher=() =>{
 
    const [state,setState]=useState(initialState);
    const {name,email,password}=state;
 const history=useNavigate();




    const handleInputChange=(e)=>{
        const {name,value}=e.target;
    setState({...state,[name]:value});
    };

    const [Image,setImage]=useState("");
const setImgFile=(e)=>{
    setImage(e.target.files[0]);
   }
    //INSERT
    const handleSubmit=async  (e)=>{
        e.preventDefault();
        if(!name || !email || !password ){
    toast.error("Please fill all field");
        }
        else{
            var formData= new FormData();
   formData.append("name",name);
   formData.append("email",email);
   formData.append("password",password);
   
   formData.append("Image",Image);
   const config={
    headers:{
        "Content-Type":"multipart/form-data"
    }
   }
   await axios.post("http://localhost:5000/AddTeacher",formData,config)
   .then(response => {
    swal.fire(response.data);
    setTimeout(()=>history("/Viewteacher",{replace:true}),1000);
  })
.catch(error => {
    swal.fire(error.response.data);
  });

}

       };
   
    return(
      
   <div>
     <Headerteacher/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Add Teacher</p>
</div> 

<form  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">UserName</label>
        
      <input type="text" name='name'  onChange={handleInputChange}  className="form-control"  placeholder="Name"  required/>
    </div>
    <div className="col">
      <label for="Brench_Name"  className="p-2">Email</label>
        
      <input type="email" name='email'  onChange={handleInputChange}  className="form-control"  placeholder="EMAIL"  required/>
    </div>
  </div>

  <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">Password</label>
        
      <input type="text" name='password'  onChange={handleInputChange}  className="form-control"  placeholder="Name"  required/>
    </div>
    <div className="col">
      <label for="Brench_Name"  className="p-2">Image</label>
        
      <input type="file" name='Image' id='Image'  className='form-control' ccept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG,.jfif,.JFIF" onChange={setImgFile}/>
    </div>
  </div>


    <div className="clearfix ">
    <button type="submit" onClick={handleSubmit} id="submits" className="btn btn-outline-primary float-end">
        <i className="fa fa-sign-in" aria-hidden="true" ></i>Add </button>
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
export default Addteacher;