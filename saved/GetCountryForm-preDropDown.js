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

  const navigate = useNavigate();

  /*function getCountryInfo(country) {

        // get the lists of items from the memu api and set them as state variable
    let countryData = CountryInfo.getCountryInfo();

    //setCountry(country);
   
    //setIsLoading(false);
    return countryData;
  }*/
    
    //const [country, setCountry] = useState("Barbados");
    //const [data, setData] = useState(null);
    // build counries dropdown menu
    const countries = getNames();
    const ddCountries = buildCountryDropDown(countries);
    console.log(countries);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="ddcountry">Country</label>
      <select name="ddcountry" value={country} onChange={handleChange}>
       {ddCountries}
      </select>
      <input
        id="country"
        type="text"
        name="country"
        placeholder="Country"
        value={country}
        onChange={handleChange}
      />

     
      <button>Get Country</button>
    </form>
  )
}

export default GetCountryForm;