import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";





const Headeradduser=() =>{
 
    
    return(
      
   <div>
     <Sidebar/>
     <div className="main-content">
    <div className="content-fluid mt-0">
  
   {/*all conding in classes k under krni ha */}
 

   
   <div id="heads" >
  <div class="container ">
  <ul class="col-sm-12 p-3">
  <li><Link  to="/Adduserrole">
  <i class="fa-solid ii fa-user-plus fa-beat"></i>Add UserRole</Link></li>
    <li><Link to="/Viewuserrole">
    <i class="fa-solid fa-users-viewfinder ii fa-beat-fade"></i>View UserRole</Link></li>
 <li><Link to="/Addclassname">
 <i class="fa-solid ii fa-store fa-beat"></i>Add class</Link></li>
  
    <li><Link to="/Viewclassname">
    <i class="fa-solid ii fa-store fa-beat"></i>View class</Link></li>
</ul>    
  </div>
  </div>

 



  {/*all conding in classes k under krni ha */}
    </div>

   </div>

</div>

   
    )
    }
export default Headeradduser;