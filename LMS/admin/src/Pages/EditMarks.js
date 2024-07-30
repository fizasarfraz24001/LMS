import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 




import Headermarks from "./Headermarks";

const initialState={
    marks:"",
    name:"",

};
const EditMarks=() =>{
   const [state,setState]=useState(initialState);
   const {marks,name}=state;
const history=useNavigate();
//fetchData start
const {mid}=useParams();
useEffect(()=>{
axios.get(`http://localhost:5000/FetchMarks/${mid}`)
.then((resp)=>setState({...resp.data[0]}));
},[mid]);
//fetch data close

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!marks){
toast.error("Please fill all field");
    }
    else{
        axios
        .put(`http://localhost:5000/updateMarks/${mid}`,{
            marks,
            name,
        }
        
        )
        .then(response => {
            swal.fire(response.data);
            setTimeout(()=>history("/Viewaddmarks",{replace:true}),1000);
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
     <Headermarks/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Add Marks</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="mb-3 mt-3">

<label for="Brench_Name"  className="p-2">Student Name</label>
    <div className="input-group p-2 col-sm-6">
<span className="input-group-text"><i className="fas fa-vihara"></i></span>
<input type="text" name="name"  onChange={handleInputChange} value={name} className="form-control bg-secondary"  
placeholder="UserRole"  readOnly/>
</div>
</div>
                    <div className="mb-3 mt-3">

      <label for="Brench_Name"  className="p-2">Add Marks</label>
          <div className="input-group p-2 col-sm-6">
    <span className="input-group-text"><i className="fas fa-vihara"></i></span>
      <input type="text" name='marks'  onChange={handleInputChange} value={marks} className="form-control"  placeholder="UserRole"  required/>
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
export default EditMarks;