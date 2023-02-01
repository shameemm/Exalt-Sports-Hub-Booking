import './App.css';
import './index.css'
import {Routes,Route} from 'react-router-dom'
import PartnerLoginpage from './Pages/PartnerLoginPage';

import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/partner_login' element ={<PartnerLoginpage/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
