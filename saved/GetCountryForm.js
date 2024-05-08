import DisplayCountry from './DisplayCountry';
import { useNavigate } from "react-router-dom";
//const { getCode, getName } = require('country-list');

import React, { useState, useEffect } from "react";
import axios from "axios";

import buildCountryDropDown from './src/BuildCountryDropdown';

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";
//import CountryInfo from './CountryInfo';

const GetCountryForm = () => {

  const navigate = useNavigate();


    
    const [country, setCountry] = useState("Barbados");
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getCountryInfo() {
        // get the lists of items from the memu api and set them as state variable
        //let country = await CountryInfo.getCountryInfo();

        //country = await CountryInfo.getCountryInfo();

      
        await axios.get(`${BASE_API_URL}/Barbados${API_ARGS}`).then(res =>{ 
        setData(res.data)
      });
      
        navigate('/Display', {data});
      }
      getCountryInfo();
      
    }, [country]);

    const handleChange = (e) => {
    setCountry(e.target.value);
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    alert(`Country Name, ${country}`);
    //let countryData = getCountryInfo(country);
    setCountry(country);
    /*return (
      <div className="DisplayCountry">
        <DisplayCountry />
      </div>
      )
      */
    //setCountry("");
    //navigate('/Display', {data});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Country</label>
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