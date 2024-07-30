import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headerparent from "./Headerparent";

//allrequire library available

const initialState={
name:"",
Fk:"",
password:"",

};


const Addparent=() =>{
 
    const [state,setState]=useState(initialState);
    const {name,Fk,password}=state;
 const history=useNavigate();




    const handleInputChange=(e)=>{
        const {name,value}=e.target;
    setState({...state,[name]:value});
    };
  

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !Fk || !password ){
    toast.error("Please fill all field");
        }
        else{
            axios
            .post("http://localhost:5000/AddParents",{
                name,
                password,
                Fk,
                
            }
            
            )
            .then(response => {
                swal.fire(response.data);
                setTimeout(()=>history("/Viewparent",{replace:true}),1000);
              })
            .catch(error => {
                swal.fire(error.response.data);
              });
           
           
    
        }
       };
   
    return(
      
   <div>
     <Headerparent/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Add Parents</p>
</div> 

<form  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">UserName</label>
        
      <input type="text" name='name'  onChange={handleInputChange}  className="form-control"  placeholder="Name"  required/>
    </div>
    <div className="col">
      <label for="Brench_Name"  className="p-2">Fk<span className="bg-light text-dark">(UNIQUE)</span></label>
        
      <input type="text" name='Fk'  onChange={handleInputChange}  className="form-control"  placeholder="Fk"  required/>
    </div>
  </div>

  <div className="row">
                    <div className="col">
      <label for="Brench_Name"  className="p-2">Password</label>
        
      <input type="text" name='password'  onChange={handleInputChange}  className="form-control" 
       placeholder="password"  required/>
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
export default Addparent;