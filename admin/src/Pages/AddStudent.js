import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 


import HeaderStudent from "./HeaderStudent";

//allrequire library available

const initialState={
name:"",
stdname:"",
password:"",
RegNo:"",
contact:"",
Fees:"",
cn:"",
pfk:"",
};


const AddStudent=() =>{
 
    const [state,setState]=useState(initialState);
    const {name,stdname,password,RegNo,contact,Fees,cn,pfk}=state;
 const history=useNavigate();




    const handleInputChange=(e)=>{
        const {name,value}=e.target;
    setState({...state,[name]:value});
    };
    //FETCH 
    const [values,setValues]=useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/DisplayClassName").then((data)=>data.json())
    .then((val)=>setValues(val,"demoval"))
       
    
    },[]);
    //PARENTS
    const [values1,setValues1]=useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/Displayparents").then((data)=>data.json())
    .then((val)=>setValues1(val,"demoval"))
       
    
    },[]);

    //INSERT

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !RegNo || !stdname || !password || !contact || !Fees || !cn || !pfk){
    toast.error("Please fill all field");
        }
        else{
            axios
            .post("http://localhost:5000/AddStudent",{
                name,
                RegNo,
                stdname,
                password,
                contact,
                Fees,
                cn,
                pfk,
                
            }
            
            )
            .then(response => {
                swal.fire(response.data);
                setTimeout(()=>history("/ViewStudent",{replace:true}),1000);
              })
            .catch(error => {
                swal.fire(error.response.data);
              });
           
           
    
        }
       };
   
    return(
      
   <div>
     <HeaderStudent/>
    <div className="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="insertedphp" className=" mb-3  border-secondary mt-3">
	<div className="colos">
<div className="container">
      <div className="row">

<div className="col" id="heig">                        
                        <div className="clearfix col card-header mt-3" > {/* Set Position*/}
                        <p id="h11" className="d-flex justify-content-center">Add Student</p>
</div> 

<form onSubmit={handleSubmit}  id="inserted" 
    className="mx-auto dp-block">       
                    <div className="row">
<div className="col">
<label for="Brench_Name"  className="p-2">UserName</label>
       
      <input type="text" name='name'  onChange={handleInputChange}  
      className="form-control"  placeholder="Name"  required/>
</div>
<div className="col">
<label for="Brench_Name"  className="p-2">Student_Name</label>
       
      <input type="text" name='stdname'  onChange={handleInputChange}  
      className="form-control"  placeholder="Name"  required/>
</div>      
 
  </div>

  <div className="row">
<div className="col">
<label for="Brench_Name"  className="p-2">Password</label>
       
      <input type="text" name='password'  onChange={handleInputChange}  
      className="form-control"  placeholder="password"  required/>
</div>
<div className="col">
<label for="Brench_Name"  className="p-2">Reg No</label>
       
      <input type="text" name='RegNo'  onChange={handleInputChange}  
      className="form-control"  placeholder="regno"  required/>
</div>      
 
  </div>

  <div className="row">
<div className="col">
<label for="Brench_Name"  className="p-2">contact</label>
       
      <input type="text" name='contact'  onChange={handleInputChange}  
      className="form-control"  placeholder="Contact"  required/>
</div>
<div className="col">
<label for="Brench_Name"  className="p-2">Fees</label>
       
      <input type="text" name='Fees'  onChange={handleInputChange}  
      className="form-control"  placeholder="Fees"  required/>
</div>
</div>
<div className="row p-1">
        <div className="col">
        <label >className</label>
       <select name="cn" className="form-control" id='cn' onChange={handleInputChange}>
        <option className="disabled">Select className</option>
       {
    values &&   values.map((item)=>{
            return(
                <option name="cn" value={item.cid} key={item.cid}>{item.classname}</option>
            )
        })
       }
        </select>   </div>
        <div className="col">
        <label >Parents ID</label>
       <select name="pfk" className="form-control" id='pfk' onChange={handleInputChange}>
        <option className="disabled">Select Parents</option>
       {
    values1 &&   values1.map((item)=>{
            return(
                <option name="pfk" value={item.pid} key={item.pid}>{item.Fk}</option>
            )
        })
       }
        </select>   </div>
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
export default AddStudent;