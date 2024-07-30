
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Sidebar from './Pages/Sidebar';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Adduserrole from './Pages/Adduserrole';
import Headeradduser from './Pages/Headeradduser';
import Viewuserrole from './Pages/Viewuserrole';
import Edituserole from './Pages/Edituserrole';
import Addclassname from './Pages/Addclassname';
import Viewclassname from './Pages/Viewclassname';
import Editclassname from './Pages/Editclassname';
import Headerbrench from './Pages/Headerbrench';
import Addbrenchname from './Pages/Addbrenchname';
import Viewbrenchname from './Pages/Viewbrenchname';
import Editbrenchname from './Pages/Editbrenchname';
import Addregisbr from './Pages/Addregisbr';
import Viewregisbn from './Pages/Viewregisbn';
import Editregbn from './Pages/Editregbn';
import Headeradmin from './Pages/Headeradmin';
import Addadmin from './Pages/Addadmin';
import ViewAdmin from './Pages/ViewAdmin';
import Edituser from './Pages/Edituser';
import HeaderStudent from './Pages/HeaderStudent';
import AddStudent from './Pages/AddStudent';
import Viewstudent from './Pages/Viewstudent';
import Editstudent from './Pages/Editstudent';
import Addteacher from './Pages/Addteacher';
import Headerteacher from './Pages/Headerteacher';
import Viewteacher from './Pages/Viewteacher';
import Editteacher from './Pages/Editteacher';
import Headerparent from './Pages/Headerparent';
import Addparent from './Pages/Addparent';
import Viewparent from './Pages/Viewparent';
import Feeschallan from './Pages/Feeschallan';
import Headerfess from './Pages/Headerfess';
import Viewfessmonth from './Pages/Viewfessmonth';
import Addbook from './Pages/Addbook';
import Headerbook from './Pages/Headerbook';
import Viewbook from './Pages/Viewbook';
import Editbook from './Pages/Editbook';
import Headertitle from './Pages/Headertitle';
import Addtitle from './Pages/Addtitle';
import Viewtitle from './Pages/Viewtitle';
import Edittitle from './Pages/Edittitle';
import Headerassquiz from './Pages/Headerassquiz';
import Addassquiz from './Pages/Addassquiz';
import Viewassquiz from './Pages/Viewassquiz';
import Editbassquiz from './Pages/Editbassquiz';
import Addmarks from './Pages/Addmarks';
import Headermarks from './Pages/Headermarks';
import Viewaddmarks from './Pages/Viewaddmarks';
import EditMarks from './Pages/EditMarks';
import Addattendance from './Pages/Addattendance';
import Headeratt from './Pages/Headeratt';
import Viewatt from './Pages/Viewatt';
import Editatt from './Pages/Editatt';
import Profile from './Pages/Profile';
import Editprofile from './Pages/Editprofile';
function App() {
  return (
    <BrowserRouter>
<div className="App">
    <ToastContainer position='top-center' />
  
      
      
      <Routes>
      <Route exact path="/Sidebar" Component={Sidebar}/>
      <Route exact path="/Home" Component={Home}/>
      <Route exact path="/Adduserrole" Component={Adduserrole}/>
      <Route exact path="/Headeradduser" Component={Headeradduser}/>
      <Route exact path="/Viewuserrole" Component={Viewuserrole}/>
      <Route exact path="/Viewuserrole/Edituserole/:UID" Component={Edituserole}/>
      <Route exact path="/Addclassname" Component={Addclassname}/>
      <Route exact path="/Viewclassname" Component={Viewclassname}/>
      <Route exact path="/Viewclassname/Edituserole/:cid" Component={Editclassname}/> 
      <Route exact path="/Headerbrench" Component={Headerbrench}/>
      <Route exact path="/Addbrenchname" Component={Addbrenchname}/>
      <Route exact path="/Viewbrenchname" Component={Viewbrenchname}/>
      <Route exact path="/Viewbrenchname/Editbrenchname/:BID" Component={Editbrenchname}/> 
      <Route exact path="/Addregisbr" Component={Addregisbr}/>
      <Route exact path="/Viewregisbn" Component={Viewregisbn}/>
      <Route exact path="/Viewregisbn/Editregbn/:brenid" Component={Editregbn}/> 
      <Route exact path="/Headeradmin" Component={Headeradmin}/>
      <Route exact path="/Addadmin" Component={Addadmin}/>
      <Route exact path="/ViewAdmin" Component={ViewAdmin}/>
      <Route exact path="/ViewAdmin/Edituser/:Userid" Component={Edituser}/>
      <Route exact path="/HeaderStudent" Component={HeaderStudent}/>
      <Route exact path="/Viewstudent" Component={Viewstudent}/>
      <Route exact path="/AddStudent" Component={AddStudent}/>
      <Route exact path="/Viewstudent/Editstudent/:Stid" Component={Editstudent}/>
      <Route exact path="/Addteacher" Component={Addteacher}/>
      <Route exact path="/Headerteacher" Component={Headerteacher}/>
      <Route exact path="/Viewteacher" Component={Viewteacher}/>
      <Route exact path="/Viewteacher/Editteacher/:Userid" Component={Editteacher}/>
      <Route exact path="/Headerparent" Component={Headerparent}/>
      <Route exact path="/Addparent" Component={Addparent}/>
      <Route exact path="/Viewparent" Component={Viewparent}/>
      <Route exact path="/Feeschallan" Component={Feeschallan}/>
      <Route exact path="/Headerfess" Component={Headerfess}/>
      <Route exact path="/Viewfessmonth" Component={Viewfessmonth}/>
      <Route exact path="/Addbook" Component={Addbook}/>
      <Route exact path="/Headerbook" Component={Headerbook}/>
      <Route exact path="/Viewbook" Component={Viewbook}/>
      <Route exact path="/Viewbook/Editbook/:BookID" Component={Editbook}/>
      <Route exact path="/Headertitle" Component={Headertitle}/>
      <Route exact path="/Addtitle" Component={Addtitle}/>
      <Route exact path="/Viewtitle" Component={Viewtitle}/>
      <Route exact path="/Viewtitle/Edittitle/:tid" Component={Edittitle}/>
<Route exact path="/Headerassquiz" Component={Headerassquiz}/>
<Route exact path="/Addassquiz" Component={Addassquiz}/>
<Route exact path="/Viewassquiz" Component={Viewassquiz}/>
<Route exact path="/Viewassquiz/Editbassquiz/:upid" Component={Editbassquiz}/>
<Route exact path="/Addmarks" Component={Addmarks}/>
<Route exact path="/Headermarks" Component={Headermarks}/>
<Route exact path="/Viewaddmarks" Component={Viewaddmarks}/>
<Route exact path="/Viewaddmarks/EditMarks/:mid" Component={EditMarks}/>
<Route exact path="/Addattendance" Component={Addattendance}/>
<Route exact path="/Headeratt" Component={Headeratt}/>
<Route exact path="/Viewatt" Component={Viewatt}/>
<Route exact path="/Viewatt/Editatt/:aid" Component={Editatt}/>
<Route exact path="/Profile" Component={Profile}/>

<Route exact path="/Profile/Editprofile/:Userid" Component={Editprofile}/>
      <Route exact path="/" Component={Login}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

