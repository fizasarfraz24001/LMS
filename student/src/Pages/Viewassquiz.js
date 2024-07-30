import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import {toast} from "react-toastify";
//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available
import Sidebar from '../Pages/Sidebar';


const Viewassquiz=()=>{
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
    const history=useNavigate();

   
const getCountry = async()=>{
    try{
        const response= await axios.get("http://localhost:5000/DisplayAssignmnetQuiz");
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"ID",
        selector:(row)=>row.upid,
    },
{
    name:"ClassName",
    selector:(row)=>row.classname,
    sortable:true,
},
{
    name:"Topic",
    selector:(row)=>row.topic,
    sortable:true,
},
{
    name:"Subject",
    selector:(row)=>row.Book,
    sortable:true,
},
{
    name:"Quesyion",
    selector:(row)=>row.Question,
    sortable:true,
},
{
    name:"LastDate Submit",
    selector:(row)=>row.Date,
    sortable:true,
},


];
useEffect(()=>{
    getCountry();
},[]);

useEffect(()=>{
   const result=countries.filter((country)=>{
return country.Book.toLowerCase().match(search.toLowerCase());
//UName table search Name
   });
   setFilteredCountries(result);
},[search]);



    return(
    
        <div>
<Sidebar/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">View Question</p>
</div>        </div>
    
        
  
<DataTable columns={columns} data={filteredCountries} pagination
fixedHeader
//fixedHeader fellow same condition
fixedHeaderScrollHeight="400px"
//SEarching
subHeader
subHeaderComponent={<input type="text" placeholder="Search By Book Name......" className="w-50 form-control"
value={search} onChange={(e)=>setSearch(e.target.value)}
/>}
/>
        </div>
        </div></div>
        
    )
}
export default Viewassquiz;