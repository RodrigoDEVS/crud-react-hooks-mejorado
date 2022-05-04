import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Register from '../pages/Register';
import Users from '../pages/Users';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter