import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";





const Headeradmin=() =>{
 
    
    return(
      
   <div>
     <Sidebar/>
     <div className="main-content">
    <div className="content-fluid mt-0">
  
   {/*all conding in classes k under krni ha */}
 

   
   <div id="heads" >
  <div class="container ">
  <ul class="col-sm-12 p-3">
  <li><Link  to="/AddStudent">
  <i class="fa-solid ii fa-user-plus fa-beat"></i>Add Student</Link></li>
    <li><Link to="/Viewstudent">
    <i class="fa-solid fa-users-viewfinder ii fa-beat-fade"></i>View Student</Link></li>

</ul>    
  </div>
  </div>

 



  {/*all conding in classes k under krni ha */}
    </div>

   </div>

</div>

   
    )
    }
export default Headeradmin;