import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import {toast} from "react-toastify";
//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available

import Headertitle from "./Headertitle";


const Viewtitle=()=>{
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
    const history=useNavigate();

   
const getCountry = async()=>{
    try{
        const response= await axios.get("http://localhost:5000/DisplayTopics");
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"Sr",
        selector:(row)=>row.tid,
    },
{
    name:"Topic Name",
    selector:(row)=>row.topic,
    sortable:true,
},

{
    name:"Update",
    cell:(row)=>(
        <Link 
        to={"Edittitle/"+row.tid}
         >
            <button className="btn btn-outline-primary">Edit</button>
        </Link>

    )
   
},
{
    name:"Delete",
    cell:(row)=>(
        <button className="btn btn-outline-primary" onClick={()=>deleteCategory(row.tid)}>Delete</button>

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

const deleteCategory=(tid)=>{
    if(window.confirm("Are you sure you want to delete this record")){
   
 
     axios.delete(`http://localhost:5000/DeleteTopic/${tid}`)
      .then(() =>{
           
     toast.success("SUCCESSFULLY Deleted Record");
     getCountry();
     setTimeout(()=>history("/Viewtitle",{replace:true}),1000);
}) 
.catch((err)=>toast.error(err.response.data));

}
    
 };

    return(
    
        <div>
        <Headertitle/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">View Topic</p>
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
export default Viewtitle;