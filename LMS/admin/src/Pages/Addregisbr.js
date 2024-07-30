import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headerbrench from "./Headerbrench";

//allrequire library available

const initialState={
    BN:"",
    email:"",
    Address:"",
 
    };


const Addregisbr=() =>{
 
    const [state,setState]=useState(initialState);
    const {BN,email,Address}=state;
 
    const [values,setValues]=useState([]);
 useEffect(()=>{
 fetch("http://localhost:5000/FetchBN").then((data)=>data.json())
 .then((val)=>setValues(val,"demoval"))
    
 
 },[]);
 const [Image,setImage]=useState("");
 const setImgFile=(e)=>{
     setImage(e.target.files[0]);
    }
 
 //console.log(values,"values") check values is working or not
 const history=useNavigate();
    const handleSubmit= async  (e)=>{
     e.preventDefault();
     if(!BN || !email || !Image ){
        toast.error("Please fill all field");
            }
     else{
        var formData= new FormData();
  
    formData.append("email",email);
    formData.append("Address",Address);
    formData.append("BN",BN);
    formData.append("Image",Image);
    const config={
     headers:{
         "Content-Type":"multipart/form-data"
     }
    }
    await axios.post("http://localhost:5000/uploadRegBn",formData,config)
    .then(() =>{
     
        swal.fire('SUCCESSFULLY Add RECORD');
 setState({BN:"",email:"",address:"",Image:""});
 setTimeout(()=>history("/Viewregisbn",{replace:true}),1000);
 })
 .catch((err)=>toast.error(err.response.data));

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
                        <p id="h11" className="d-flex justify-content-center">Register Brench</p>
</div> 

<form   id="inserted" encType="multipart/form-data"
    className="mx-auto dp-block">    
    <div className="row p-1">
    <div className="col">
        <label >Select BrenchName</label>
       <select name="BN" className="form-control" id='BN' onChange={handleInputChange}>
        <option className="disabled">Select BrenchName</option>
       {
    values &&   values.map((item)=>{
            return(
                <option name="BN" value={item.BID} key={item.BID}>{item.BName}</option>
            )
        })
       }
        </select>   </div>
        </div>  
                    <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">Brench Email</label>
        
      <input type="email" name='email'  onChange={handleInputChange}  className="form-control"  placeholder="email"  required/>
  </div>
  <div className="col">
      <label for="Brench_Name"  className="p-2">Brench Address</label>
        
      <input type="text" name='Address'  onChange={handleInputChange}  className="form-control"  placeholder="Address"  required/>
  </div>
  </div>
  <div className="row p-1">
        <div className="col">
        <label >Select Logo</label>
        <input type="file" name='Image' id='Image'  className='form-control' ccept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG,.jfif,.JFIF" onChange={setImgFile}/>
        </div>
    </div>

    <div className="clearfix ">
    <button type="submit" name="AddClass" id="submits" onClick={handleSubmit} className="btn btn-outline-primary float-end">
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
export default Addregisbr;