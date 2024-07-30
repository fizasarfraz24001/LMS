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
     <div className="sidebar">
  <Link className="a" to="/Home"><i class="fa-solid fa fa-house-chimney"></i>Home</Link>



  <Link className="a" to="/Addtitle"><i class="fa-solid fa-toilet-paper fa-beat"></i>Add AssQuiz</Link>
  <Link className="a" to="/Addassquiz"><i class="fa-solid fa-toilet-paper fa-beat"></i>Upload AssQuiz</Link>
  <Link className="a" to="/Addbook"><i class="fa-solid fa-book fa-beat"></i>Add Subject</Link>
  <Link className="a" to="/Addmarks"><i class="fa-solid fa-book fa-beat"></i>Add Marks</Link>
  <Link className="a" to="/Addattendance"><i class="fa-solid fa-book fa-beat"></i>Add Attendance</Link>
  <Link className="a" to="/Profile"><i class="fa-solid fa fa-id-badge fa-beat"></i>Manage Profile</Link>
  <Link className="a" to="/" onClick={handleLogout}><i class="fa-solid fa fa-right-from-bracket"></i>Logout</Link>

</div>

   </div>



   
    )
    }
export default Sidebar;
