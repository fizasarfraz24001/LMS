import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import {toast} from "react-toastify";
import swal from 'sweetalert2';
import axios from "axios";  //allrequire library available
import Headeradmin from "./Headeradmin";


const Viewregisbn=()=>{
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
    const history=useNavigate();

   
const getCountry = async()=>{
    try{
        const response= await axios.get("http://localhost:5000/DisplayTeacher");
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"ID",
        selector:(row)=>row.Userid,
    },
{
    name:"UserName",
    selector:(row)=>row.name,
    sortable:true,
},
{
    name:"Email",
    selector:(row)=>row.email,
    sortable:true,
},
{
    name:"Password",
    selector:(row)=>row.password,
    sortable:true,
},
{
    name:"College Name",
    selector:(row)=>row.BName,
    sortable:true,
},
{
    name:"UserRole",
    selector:(row)=>row.UName,
    sortable:true,
},
{
    name:"Profile Image",
    selector:(row)=><img width={90} height={50} src={row.Image} alt="Missing Picture" />,
    sortable:true,
},

{
    name:"Update",
    cell:(row)=>(
        <Link 
        to={"Editteacher/"+row.Userid}
         >
            <button className="btn btn-outline-primary">Edit</button>
        </Link>

    )
   
},
{
    name:"Delete",
    cell:(row)=>(
        <button className="btn btn-outline-primary" onClick={()=>deleteCategory(row.Userid)}>Delete</button>

    )
   
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

const deleteCategory=(Userid)=>{
    if(window.confirm("Are you sure you want to delete this record")){
   
 
     axios.delete(`http://localhost:5000/DeleteAdmin/${Userid}`)
      .then(() =>{
           
     toast.success("SUCCESSFULLY Deleted Record");
     getCountry();
     setTimeout(()=>history("/Viewteacher",{replace:true}),1000);
}) 
.catch((err)=>toast.error(err.response.data));

}
    
 };

    return(
    
        <div>
        <Headeradmin/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">View RegisterBrench</p>
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
export default Viewregisbn;