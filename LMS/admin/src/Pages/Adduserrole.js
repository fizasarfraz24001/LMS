import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import Headeradduser from "./Headeradduser";

//allrequire library available

const initialState={
UName:"",

};


const Adduserrole=() =>{
 
    const [state,setState]=useState(initialState);
    const {UName}=state;
 const history=useNavigate();




    const handleInputChange=(e)=>{
        const {name,value}=e.target;
    setState({...state,[name]:value});
    };
    //INSERT
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!UName){
    toast.error("Please fill all field");
        }
        else{
            axios
            .post("http://localhost:5000/InsertUserRole",{
                UName,
                
            }
            
            )
            .then(() =>{
                swal.fire('SUCCESSFULLY Add RECORD');
                            
               setState({UName:""});
              setTimeout(()=>history("/Viewuserrole",{replace:true}),1000);
            })
            .catch((err)=>toast.error(err.response.data));
           
            swal.fire("CAN'T Add RECORD");
    
        }
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
                        <p id="h11" className="d-flex justify-content-center">Add UserRole</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="mb-3 mt-3">

      <label for="Brench_Name"  className="p-2">Add UserRole</label>
          <div className="input-group p-2 col-sm-6">
    <span className="input-group-text"><i className="fas fa-vihara"></i></span>
      <input type="text" name='UName'  onChange={handleInputChange}  className="form-control"  placeholder="UserRole"  required/>
    </div>
  </div>


    <div className="clearfix ">
    <button type="submit" name="AddClass" id="submits" className="btn btn-outline-primary float-end">
        <i className="fa fa-sign-in" aria-hidden="true" ></i>Add UserRole</button>
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
export default Adduserrole;