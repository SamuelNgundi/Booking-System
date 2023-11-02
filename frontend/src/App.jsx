import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';
import Navbar from './components/Navigation/NavBar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/auth" /> }/>
      <Route path="/auth" element={ <Auth /> }/>
      <Route path="/bookings" element={ <Bookings /> }/>
      <Route path="/events" element={ <Events /> }/>
      <Route path="/navbar" element={ <Navbar /> }/>
    </Routes>
  )
}

export default App
