
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navber from './Pages/Shared/Navber';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
        <Navber></Navber>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        </Routes>  
         
    </div>
  );
}

export default App;
