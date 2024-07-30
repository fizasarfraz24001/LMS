
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Sidebar from './Pages/Sidebar';

import Login from './Pages/Login';
import Home from './Pages/Home';



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

