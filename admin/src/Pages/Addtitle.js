import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headertitle from "./Headertitle";




//allrequire library available

const initialState={
topic:"",

};


const Addtitle=() =>{
 
    const [state,setState]=useState(initialState);
    const {topic}=state;
 const history=useNavigate();




    const handleInputChange=(e)=>{
        const {name,value}=e.target;
    setState({...state,[name]:value});
    };
    //INSERT
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!topic){
    toast.error("Please fill all field");
        }
        else{
            axios
            .post("http://localhost:5000/InsertTopic",{
                topic,
                
            }
            
            )
            .then(response => {
                swal.fire(response.data);
                setTimeout(()=>history("/Viewtitle",{replace:true}),1000);
              })
            .catch(error => {
                swal.fire(error.response.data);
              });
    
        }
       };
   
    return(
      
   <div>
  <Headertitle/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Add Topic</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="mb-3 mt-3">

      <label for="Brench_Name"  className="p-2"> Topic</label>
          <div className="input-group p-2 col-sm-6">
    <span className="input-group-text"><i className="fas fa-vihara"></i></span>
      <input type="text" name='topic'  onChange={handleInputChange} placeholder="Add Topic" className="form-control"   required/>
    </div>
  </div>


    <div className="clearfix ">
    <button type="submit" name="AddClass" id="submits" className="btn btn-outline-primary float-end">
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
export default Addtitle;