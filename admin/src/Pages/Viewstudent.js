import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import HeaderStudent from "./HeaderStudent";
import {toast} from "react-toastify";
//import swal from 'sweetalert';
import axios from "axios";  //allrequire library available


const Viewstudent=()=>{
    const [search,setSearch]=useState("");
    const [countries,setCountries]=useState([]); //Create Array for Fetch Data
    const [filteredCountries,setFilteredCountries]=useState([]);
    const history=useNavigate();

   
const getCountry = async()=>{
    try{
        const response= await axios.get("http://localhost:5000/DisplayStudent");
        setCountries(response.data);
        setFilteredCountries(response.data);
    } catch(error){
        console.log(error);
    }

};
const columns=[
    {
      
        name:"StudentID",
        selector:(row)=>row.Stid,
    },
    {
        name:"Name",
        selector:(row)=>row.stdname,
        sortable:true,
    },
{
    name:"Class",
    selector:(row)=>row.classname,
    sortable:true,
},
{
    name:"RegNO",
    selector:(row)=>row.RegNo,
    sortable:true,
},
{
    name:"Contact",
    selector:(row)=>row.contact,
    sortable:true,
},
{
    name:"Fees",
    selector:(row)=>row.Fees,
    sortable:true,
},
{
    name:"ParentsID",
    selector:(row)=>row.Fk,
    sortable:true,
},
{
    name:"UserRole",
    selector:(row)=>row.UName,
    sortable:true,
},
{
    name:"Update",
    cell:(row)=>(
        <Link 
        to={"Editstudent/"+row.Stid}
         >
            <button className="btn btn-outline-primary">Edit</button>
        </Link>

    )
   
},
{
    name:"Delete",
    cell:(row)=>(
        <button className="btn btn-outline-primary" onClick={()=>deleteCategory(row.Stid)}>Delete</button>

    )
   
},

];
useEffect(()=>{
    getCountry();
},[]);

useEffect(()=>{
   const result=countries.filter((country)=>{
return country.stdname.toLowerCase().match(search.toLowerCase());
//UName table search Name
   });
   setFilteredCountries(result);
},[search]);

const deleteCategory=(Stid)=>{
    if(window.confirm("Are you sure you want to delete this record")){
   
 
     axios.delete(`http://localhost:5000/DeletesTUDEBT/${Stid}`)
      .then(() =>{
           
     toast.success("SUCCESSFULLY Deleted Record");
     getCountry();
     setTimeout(()=>history("/Viewstudent",{replace:true}),1000);
}) 
.catch((err)=>toast.error(err.response.data));

}
    
 };

    return(
    
        <div>
        <HeaderStudent/>
       <div className="content-fluid">
       <div className="main-content">
     
       <div class="cols" >                        
<div class="clearfix col card-header mt-3" > 
<p id="h11" class="d-flex justify-content-center">View STUDENT</p>
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
export default Viewstudent;