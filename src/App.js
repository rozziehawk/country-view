import React, { useState, useEffect } from 'react';
import GetCountryForm from './GetCountryForm'
import Home from './Home';
import CountryInfo from './CountryInfo'
import DisplayCountry from './DisplayCountry';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap';
import Footer from './Footer';
import Header from './Header';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState("Afghanistan");
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home setCountry={setCountry} country={country} />}/>
          <Route exact path='/Display' element={<DisplayCountry country={country} />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
