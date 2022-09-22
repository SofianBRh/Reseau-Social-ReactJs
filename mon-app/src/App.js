import {Routes, Route} from 'react-router-dom';
import  React from 'react';
import './App.css';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Register from './pages/Register';


function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profil' element={<Profil />}/>
        <Route path='/Inscription' element={<Register />}/>
      </Routes>
      </>

  )
}

export default App;
