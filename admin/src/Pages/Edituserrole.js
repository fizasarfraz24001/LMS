import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert';
import axios from "axios"; 


import Headeradduser from "./Headeradduser";

const initialState={
UName:"",

};
const EditUserRole=() =>{
   const [state,setState]=useState(initialState);
   const {UName}=state;
const history=useNavigate();
//fetchData start
const {UID}=useParams();
useEffect(()=>{
axios.get(`http://localhost:5000/Fetch1/${UID}`)
.then((resp)=>setState({...resp.data[0]}));
},[UID]);
//fetch data close

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!UName){
toast.error("Please fill all field");
    }
    else{
        axios
        .put(`http://localhost:5000/update1/${UID}`,{
            UName,
            
        }
        
        )
        .then(() =>{
           
                        swal("SUCCESSFULLY Update RECORD");
                        setTimeout(()=>history("/Viewuserrole",{replace:true}),1000);
           setState({UName:""});
        })
        .catch((err)=>toast.error(err.response.data));
        swal("CAN'T SUCCESSFULLY Update RECORD");


    }
   };
   const handleInputChange=(e)=>{
    const {name,value}=e.target;
setState({...state,[name]:value});
};
    
    return(
        <div>
     <Headeradduser/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Update UserRole</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="mb-3 mt-3">

      <label for="Brench_Name"  className="p-2">Add UserRole</label>
          <div className="input-group p-2 col-sm-6">
    <span className="input-group-text"><i className="fas fa-vihara"></i></span>
      <input type="text" name='UName' id='UName' onChange={handleInputChange} value={UName} className="form-control"  placeholder="UserRole"  required/>
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
export default EditUserRole;