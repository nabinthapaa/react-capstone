import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import ConfirmedBooking from './Pages/ConfirmedBooking';
import Home from './Pages/Home';
import PageUnderConstruction from './Pages/PageUnderConstruction';
import ReserveTable from './Pages/ReserveTable';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservation' element={<ReserveTable />} />
        <Route path='/about' element={<PageUnderConstruction />} />
        <Route path='/menu' element={<PageUnderConstruction />} />
        <Route path='/order-online' element={<PageUnderConstruction />} />
        <Route path='/login' element={<PageUnderConstruction />} />
        <Route path='/confirm_booking' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
