import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CountryInfo from './CountryInfo';
import './DisplayCountry.css';

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";


const DisplayCountry = () => 
{
    const navigate = useNavigate();

     
      const [country, setCountry] = useState("Barbados");
      const [data, setData] = useState(null);
  
      useEffect(() => {
        async function getCountryInfo() {
          // get the lists of items from the memu api and set them as state variable
          //let country = await CountryInfo.getCountryInfo();
  
          //country = await CountryInfo.getCountryInfo();
  
        
          await axios.get(`${BASE_API_URL}/${country}${API_ARGS}`).then(res =>{ 
          setData(res.data)
        });
        
          
        }
        getCountryInfo();
        
      }, [country]);
  
     
    if (data)
    {
        return(
            <h1>You have chosen {data[0]['name']['common']}</h1>
        )
    }
    else
    {
        return (
            <h1>Loading....</h1>
        )
    }
    

}

export default DisplayCountry;