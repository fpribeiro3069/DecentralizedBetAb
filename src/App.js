import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

const App = () => {
  return(
    <div className='appDiv'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
};

export default App;
