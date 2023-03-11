import './App.css';
import './index.css'
import {Routes,Route} from 'react-router-dom'
import PartnerLoginpage from './Pages/Partner/PartnerLoginPage';

import Login from './Pages/User/Login';
import Home from './Pages/User/Home';
import {UserContext, UserProvider} from './Context/UserContext'
import Registration from './Pages/User/Registration';
import PartnerRegPage from './Pages/Partner/PartnerRegPage';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import PartnerHome from './Pages/Partner/PartnerHome';
import { useContext } from 'react';
import AdminHome from './Pages/Admin/AdminHome';
import ChatPage from './Pages/User/ChatPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/admin' element={<AdminLoginPage/>}/>
        <Route path='/list' element={<h1>List</h1>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='/partner_login' element ={<PartnerLoginpage/>}></Route>
        <Route path='/partner-reg' element = {<PartnerRegPage/>}></Route>
        <Route path='/partner-home' element = {<PartnerHome/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/chat' element={<ChatPage/>}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
      </UserProvider>
      
      
    </div>
  );
}

export default App;
