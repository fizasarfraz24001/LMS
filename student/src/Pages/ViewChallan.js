import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";



//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available
import Sidebar from "./Sidebar";


const ViewChallan=()=>{
    const handlePrint = () => {
        window.print();
      };
    const A=localStorage.getItem("Name");
   
  
      const [records, setRecords] = useState([]);
    
      useEffect(() => {
        axios.get(`http://localhost:5000/StudentChallan/${A}`)
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
   
   <h1 className="d-flex justify-content-start  p-2 d-print-none" style={{background: "blueviolet"}}>Get Challan</h1>
   <button onClick={handlePrint} className=" d-print-none btn btn-primary" >Print </button>
     <h3 className="justify-content-start d-flex">Fees Month:{record.Date}</h3>
       <div className="col-sm-6">
        <label for="Brench_Name"  className="p-2">Student Name:{record.stdname}</label><br/>
        <label for="Brench_Name"  className="p-2">Fees:{record.Fees}</label>
       

        
       
        </div>{/*col-6 */}
      
      
        <div className="col-sm-6">
        <label for="Brench_Name"  className="p-2">Student RegNo:{record.RegNo}</label><br/>

        
        
        <label for="Brench_Name"  className="p-2">Signature_________________</label>
       
       
        </div>
       
        
        </div>
       
    </div>










            
        
        ))}
     
     
      </div>
        </div>
        </div>
        
    )
}
export default ViewChallan;