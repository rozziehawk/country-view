import DisplayCountry from './DisplayCountry';
import { useNavigate } from "react-router-dom";
import {getCode, getNames} from "country-list";

import React, { useState, useEffect } from "react";
import App from "./App";
import buildCountryDropDown from './BuildCountryDropdown'

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";
//import CountryInfo from './CountryInfo';

const GetCountryForm = ({ country, setCountry }) => {

  const [ddCountries, setDDCountries] = useState(null);
  useEffect(() => {
    const countriesList = getNames();
    setDDCountries(buildCountryDropDown(countriesList));
  }, []);
  

  const navigate = useNavigate();


    // build counries dropdown menu
    /*
    const countries = getNames();
    const ddCountries = buildCountryDropDown(countries);
    console.log(countries);
    */
    const handleChange = (e) => {
    setCountry(e.target.value);
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    //alert(`Country Name, ${country}`);
    
    setCountry(country);
  
    navigate('/Display', {country});
  }

 
  return (
    /*<div style={{z-index: 5}}>*/
    <div>
      <h1>Karl's cool app to learn basic info about countries of the world</h1>
      <h2>Choose a country to explore</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="country">Country</label>
      <select name="country" id="country" value={country} onChange={handleChange}>
       {ddCountries}
      </select>
 
      <button class="btn btn-primary btn-sm">Get Country</button>
    </form>
    </div>
  )
}

export default GetCountryForm;