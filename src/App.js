import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './Pages/Home';
import ReserveTable from './Pages/ReserveTable';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserve_table' element={<ReserveTable />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
