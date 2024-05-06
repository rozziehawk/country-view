import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CountryInfo from './CountryInfo';
import './DisplayCountry.css';

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";


const DisplayCountry = ({country}) => 
{
    const navigate = useNavigate();

     
      //const [country, setCountry] = useState("Barbados");
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
       /* return(
            <h1>You have chosen {data[0]['name']['common']}</h1>
        )*/
        return (
            <div>
            <table>
                <tr>
                    <td colspan="3"><h1>{data[0]['name']['common']}</h1></td>
                    <td colspan="3" rowspan="3"><img src={data[0]['flags']['png']} /></td>
                </tr>
                <tr>
                    <td colspan="3"><h1>Official Name: {data[0]['name']['official']}</h1></td>
                </tr>
                <tr>
                    <td colspan="3"><h2>Continent: {data[0]['continents']}</h2></td>
                </tr>
                <tr>
                    <td><h4>Region: {data[0]['region']}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Sub-region: {data[0]['subregion']}</h4></td>
                </tr>
                <tr>
                    <td><h4>Capital: {data[0]['capital']}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Language(s) Spoken: English</h4></td>
                </tr>
                <tr>
                    <td><h4>Currency: (BBD) {data[0]['currencies']['BBD']['name']}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Symbol: {data[0]['currencies']['BBD']['symbol']}</h4></td>
                </tr>
                <tr>
                    <td><h4>Population: {data[0]['population']}</h4></td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
            </div>
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