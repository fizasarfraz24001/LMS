import React,{useState,useEffect} from "react";


import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available

import Headermarks from "./Headermarks";


const Viewaddmarks=()=>{
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
  
   
   
const getCountry = async()=>{
    try{
        const response= await axios.get("http://localhost:5000/Displayaddmarkmonth");
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"Sr",
        selector:(row)=>row.mid,
    },
{
    name:"ClassName",
    selector:(row)=>row.classname,
    sortable:true,
},
{
    name:"Date",
    selector:(row)=>row.Date,
    sortable:true,
},
{
    name:"Subject",
    selector:(row)=>row.topic,
    sortable:true,
},
{
    name:"StudentName",
    selector:(row)=>row.name,
    sortable:true,
},
{
    name:"Marks",
    selector:(row)=>row.marks,
    sortable:true,
},
{
    name:"Add Marks",
    cell:(row)=>(
        <Link 
        to={"EditMarks/"+row.mid}
         >
            <button className="btn btn-outline-primary">Add</button>
        </Link>

    )
   
},


];
useEffect(()=>{
    getCountry();
},[]);

useEffect(()=>{
   const result=countries.filter((country)=>{
return country.topic.toLowerCase().match(search.toLowerCase());
//UName table search Name
   });
   setFilteredCountries(result);
},[search]);



    return(
    
        <div>
        <Headermarks/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">Add Marks</p>
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
export default Viewaddmarks;