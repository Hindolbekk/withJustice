import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route index element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
