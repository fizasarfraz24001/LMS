
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Sidebar from './Pages/Sidebar';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Viewassquiz from './Pages/Viewassquiz';
import Viewaddmarks from './Pages/Viewaddmarks';
import Viewatt from './Pages/Viewatt';
import Profile from './Pages/Profile';
import Editprofile from './Pages/Editprofile';
import ViewChallan from './Pages/ViewChallan';
function App() {
  return (
    <BrowserRouter>
<div className="App">
    <ToastContainer position='top-center' />
  
      
      
      <Routes>
      <Route exact path="/Sidebar" Component={Sidebar}/>
      <Route exact path="/Home" Component={Home}/>
<Route exact path="/Viewassquiz" Component={Viewassquiz}/>
<Route exact path="/Viewaddmarks" Component={Viewaddmarks}/>
<Route exact path="/Viewatt" Component={Viewatt}/>
<Route exact path="/Profile" Component={Profile}/>

<Route exact path="/ViewChallan" Component={ViewChallan}/>
<Route exact path="/Profile/Editprofile/:Userid" Component={Editprofile}/>
      <Route exact path="/" Component={Login}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

