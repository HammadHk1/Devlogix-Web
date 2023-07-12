import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Home';
import Menu from './Components/Menu/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jackets from './Components/Jackets/Jackets';
import Shoes from './Components/Shoes/Shoes';
import Tshirt from './Components/Tshirt/Tshirt';
import All from './Components/ShowAll/All';
import Belts from './Components/Belts/Belts';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Menu' element = {<Menu/>}/>
        <Route path='/jackets' element = {<Jackets/>}/>
        <Route path='/shoes' element = {<Shoes/>}/>
        <Route path='/Tshirts' element = {<Tshirt/>}/>
        <Route path='/Belts' element = {<Belts/>}/>  
        <Route path='/All' element = {<All/>}/>  
        {/* Add more routes for other components if needed */}
      </Routes>
    </Router>
  );
}

export default App;
