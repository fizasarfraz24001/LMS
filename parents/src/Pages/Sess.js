import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";



//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available
import Sidebar from "./Sidebar";


const Sess=()=>{
    
    const A=localStorage.getItem("Name");
   
  
      const [records, setRecords] = useState([]);
    
      useEffect(() => {
        axios.get(`http://localhost:5000/ViewParents/${A}`)
          .then(response => setRecords(response.data))
          .catch(error => console.log(error));
      }, [A]);




    return(
    
        <div>
            <Sidebar/>
     
       <div className="content-fluid">
       <div className="main-content">
   
      
   
     
     
      </div>
        </div>
        </div>
        
    )
}
export default Sess;