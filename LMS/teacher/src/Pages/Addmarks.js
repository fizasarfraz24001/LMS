import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

import swal from 'sweetalert2';
import axios from "axios"; 



import Headermarks from "./Headermarks";

//allrequire library available

const initialState={
    ts:"",
    CN:"",
    Sub:"",
 
    Date:"",
    };


const Addmarks=() =>{
 
    const [state,setState]=useState(initialState);
    const {ts,CN,Sub,Date}=state;
 
    const [values,setValues]=useState([]);
 useEffect(()=>{
 fetch("http://localhost:5000/DisplayTopics").then((data)=>data.json())
 .then((val)=>setValues(val,"demoval"))
    
 
 },[]);

 //select class
 const [values1,setValues1]=useState([]);
 useEffect(()=>{
 fetch("http://localhost:5000/DisplayClassName").then((data)=>data.json())
 .then((val)=>setValues1(val,"demoval"))
    
 
 },[]);
//SUBJECT 
const [values3,setValues3]=useState([]);
 useEffect(()=>{
 fetch("http://localhost:5000/DisplayBook").then((data)=>data.json())
 .then((val)=>setValues3(val,"demoval"))
    
 
 },[]);

 
 //console.log(values,"values") check values is working or not
 const history=useNavigate();
    const handleSubmit= async  (e)=>{
     e.preventDefault();
     if(!ts || !CN || !Sub  || !Date ){
        toast.error("Please fill all field");
            }
            else{
                axios
                .post("http://localhost:5000/ADDMarksMonth",{
                    ts,
                    CN,
                    Sub,
                   
                    Date,
                    
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
                        <p id="h11" className="d-flex justify-content-center">Add MARKS</p>
</div> 

<form   id="inserted" encType="multipart/form-data"
    className="mx-auto dp-block">    
    <div className="row p-1">
    <div className="col">
        <label className="p-2"> Select Topic</label>
       <select name="ts" className="form-control" id='Topic' onChange={handleInputChange}>
        <option className="disabled">Select </option>
       {
    values &&   values.map((item)=>{
            return(
                <option name="ts" value={item.tid} key={item.tid}>{item.topic}</option>
            )
        })
       }
        </select>   </div>


        <div className="col">
        <label className="p-2"> className</label>
       <select name="CN" className="form-control" id='CN' onChange={handleInputChange}>
        <option className="disabled">Select Class</option>
       {
    values1 &&   values1.map((item)=>{
            return(
                <option name="CN" value={item.cid} key={item.cid}>{item.classname}</option>
            )
        })
       }
        </select>   </div>    



        </div> 
        <div className="row">
        <div className="col">
        <label className="p-2"> Subject</label>
       <select name="Sub" className="form-control" id='ClassN' onChange={handleInputChange}>
        <option className="disabled">Select Subject</option>
       {
    values3 &&   values3.map((item)=>{
            return(
                <option name="Sub" value={item.BookID} key={item.BookID}>{item.Book}</option>
            )
        })
       }
        </select>   </div>    



        </div> 

                    <div className="row">
                
  <div className="col">
      <label for="Brench_Name"  className="p-2">Last Date</label>
        
      <input type="date" name='Date'  onChange={handleInputChange}  className="form-control"  placeholder="Date"  required/>
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
export default Addmarks;