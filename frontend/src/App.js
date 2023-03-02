import './App.css';
import './index.css'
import {Routes,Route} from 'react-router-dom'
import PartnerLoginpage from './Pages/Partner/PartnerLoginPage';

import Login from './Pages/User/Login';
import Home from './Pages/User/Home';
import {UserProvider} from './Context/UserContext'
import Registration from './Pages/User/Registration';
import PartnerRegPage from './Pages/Partner/PartnerRegPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/partner_login' element ={<PartnerLoginpage/>}></Route>
        <Route path='/partner-reg' element = {<PartnerRegPage/>}></Route>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      </UserProvider>
      
      
    </div>
  );
}

export default App;
