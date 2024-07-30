import React from "react";
import { Link } from "react-router-dom";




const Sidebar=() =>{
  //const A=localStorage.getItem("Name");
  const handleLogout = () => {
   
    localStorage.clear();
    // Other logout logic, such as redirecting the user to the login page
  };
    
    return(
      
   <div className="m-0 p-0">
     <div className="sidebar d-print-none">
  <Link className="a" to="/Home"><i class="fa-solid fa fa-house-chimney"></i>Home</Link>



  <Link className="a" to="/Viewassquiz"><i class="fa-solid fa-toilet-paper fa-beat"></i>AssignmnetQuiz</Link>
  
  <Link className="a" to="/Viewaddmarks"><i class="fa-solid fa-toilet-paper fa-beat"></i>View Marks</Link>
  <Link className="a" to="/Viewatt"><i class="fa-solid fa-book fa-beat"></i>View attendance</Link>
  <Link className="a" to="/ViewChallan"><i class="fa-solid fa-book fa-beat"></i>View FeesChallan</Link>
  <Link className="a" to="/Profile"><i class="fa-solid fa fa-id-badge fa-beat"></i>Manage Profile</Link>
  <Link className="a" to="/" onClick={handleLogout}><i class="fa-solid fa fa-right-from-bracket"></i>Logout</Link>

</div>

   </div>



   
    )
    }
export default Sidebar;
