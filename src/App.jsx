import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
function App() {
  return (
    <div className="App">
     <Reg
      
     <Routes>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
