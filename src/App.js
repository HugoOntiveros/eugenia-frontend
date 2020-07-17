import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './Routes';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        {Routes}
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
