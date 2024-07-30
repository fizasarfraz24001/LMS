import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import {toast} from "react-toastify";
//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available
import Sidebar from "./Sidebar";
import Sess from "./Sess";




const Viewatt=()=>{
    
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
    

   // ViewAttstd
   const A=localStorage.getItem("Name");
const getCountry = async()=>{
    try{
        const response= await axios.get(`http://localhost:5000/ParentAtt/${A}`)
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"sr",
        selector:(row)=>row.aid,
    },
{
    name:"Student Name",
    selector:(row)=>row.name,
    sortable:true,
},
{
    name:"Date",
    selector:(row)=>row.Date,
    sortable:true,
},
{
    name:"Status",
    selector:(row)=>row.status,
    sortable:true,
},




];
useEffect(()=>{
    getCountry();
},[]);

useEffect(()=>{
   const result=countries.filter((country)=>{
return country.name.toLowerCase().match(search.toLowerCase());
//UName table search Name
   });
   setFilteredCountries(result);
},[search]);



    return(
    
        <div>
            <Sess/>
<Sidebar/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">View Attendance</p>
</div>        </div>
    
        
  
<DataTable columns={columns} data={filteredCountries} pagination
fixedHeader
//fixedHeader fellow same condition
fixedHeaderScrollHeight="400px"
//SEarching
subHeader
subHeaderComponent={<input type="text" placeholder="Search......" className="w-50 form-control"
value={search} onChange={(e)=>setSearch(e.target.value)}
/>}
/>
        </div>
        </div></div>
        
    )
}
export default Viewatt;