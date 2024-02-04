import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
  <Router>
    <div className="App">


 		<div className="content">
 		<Routes>
			<Route path="/" element={<Home/>} />
		  
      <Route parth="/create" element={<Create/>} />
                  
 		 </Routes>

    


 		 </div>
 		
    </div>
    </Router>
  );
}

export default App;
 
