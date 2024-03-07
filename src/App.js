
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        
          {/* ... other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
