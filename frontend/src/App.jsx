import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';
// import authContext from './context/auth-context';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Navigate to="/auth" /> }/>
      <Route path="/auth" element={ <Auth /> }/>
      <Route path="/bookings" element={ <Bookings /> }/>
      <Route path="/events" element={ <Events /> }/>
    </Routes>
    </>
  )
}

export default App
