import './App.css';
import './index.css'
import {Routes,Route} from 'react-router-dom'
import PartnerLoginpage from './Pages/PartnerLoginPage';

import Login from './Pages/Login';
import Home from './Pages/Home';
import {UserProvider} from './Context/UserContext'
import Registration from './Pages/User/Registration';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/partner_login' element ={<PartnerLoginpage/>}></Route>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      </UserProvider>
      
      
    </div>
  );
}

export default App;
