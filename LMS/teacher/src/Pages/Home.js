import React,{useState,useEffect} from "react";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";




const Home=() =>{
  const [name, setName] = useState("");

  
    useEffect(() => {
    const storedName = localStorage.getItem("Name");;
    setName(storedName);
  }, []);
    return(
      
   <div>
     <Sidebar/>
    <div class="content-fluid">
    <div className="main-content">
   {/*all conding in classes k under krni ha */}
 

   <div id="headbar">
<div class="container-fluid ">
        <div class="row">
        <h1 className="d-flex justify-content-center text-light">Well Come Dear {name} </h1>     
    
</div>
</div>
</div>

{/* */}
<div class="container-fluid mt-4 ">
    <div class="row  ">
        <div class="col-sm-12 X1">
        
        <div class="col-sm-3  DashB shadow  " id="">
            <i class="fa fa-home"></i><br/>
            <Link to="/Home">HOME</Link>
    </div>
   
    
    <div class="col-sm-3  DashB shadow  " id="">
            <i class="fa-light fa fa-file-pdf"></i><br/>
            <Link to="/Addtitle">Add AssignmentQuiz</Link>
    </div>
    <div class="col-sm-3  DashB shadow  " id="">
            <i class="fa-solid fa fa-book fa-beat"></i><br/>
            <Link to="/Addmarks">Add Marks</Link>
    </div>
    <div class="col-sm-3  DashB shadow  " id="">
            <i class="fa-solid fa-book fa-beat fa"></i><br/>
            <Link to="/Addbook">Add Subject</Link>
    </div>
    <div class="col-sm-3  DashB shadow  " id="">
            <i class="fa-solid fa-book fa-beat fa"></i><br/>
            <Link to="/Addattendance">Take Attendance</Link>
    </div>

    <div class="col-sm-3  DashB shadow  " id="">
            <i class="a-solid fa fa-id-badge fa-beat"></i><br/>
            <Link to="/Profile">Manage Profile</Link>
    </div>

    </div>
    </div>
    </div>

  {/*all conding in classes k under krni ha */}
    </div>

   </div>

</div>

   
    )
    }
export default Home;