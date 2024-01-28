import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Regis from './pages/Regis/Regis';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Users from './pages/Users/Users';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route  index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/registiration' element={<Regis/>}/>
      <Route path='/users' element={<Users/>}/>
     </Routes>
    </div>
  );
}

export default App;
