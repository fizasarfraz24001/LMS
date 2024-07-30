import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";





const Headerbrench=() =>{
 
    
    return(
      
   <div>
     <Sidebar/>
     <div className="main-content">
    <div className="content-fluid mt-0">
  
   {/*all conding in classes k under krni ha */}
 

   
   <div id="heads" >
  <div class="container ">
  <ul class="col-sm-12 p-3">
  <li><Link  to="/Addbrenchname">
  <i class="fa-solid ii fa-mountain-city fa-beat"></i>Add CollegeName</Link></li>
    <li><Link to="/Viewbrenchname">
    <i class="fa-solid ii fa-mountain-city fa-beat"></i>View CollegeName</Link></li>

 <li><Link to="/Addregisbr">
 <i class="fa-solid ii fa-mountain-city fa-beat"></i>Register College</Link></li>
  
    <li><Link to="/Viewregisbn">
    <i class="fa-solid ii fa-mountain-city fa-beat"></i>View College</Link></li>
</ul>    
  </div>
  </div>

 



  {/*all conding in classes k under krni ha */}
    </div>

   </div>

</div>

   
    )
    }
export default Headerbrench;