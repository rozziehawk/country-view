import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import addCommas from './addCommas'

import axios from "axios";
import CountryInfo from './CountryInfo';
import './DisplayCountry.css';

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";


const DisplayCountry = ({country}) => 
{
    const navigate = useNavigate();

     
      //const [country, setCountry] = useState("Barbados");
      const [countryInfo, setCountryInfo] = useState(null);
  
      useEffect(() => {
        async function getCountryInfo() {
          // get the lists of items from the memu api and set them as state variable
          //let country = await CountryInfo.getCountryInfo();
  
          //country = await CountryInfo.getCountryInfo();
            await axios.get(`${BASE_API_URL}/${country}${API_ARGS}`).then(res =>{ 
            const countryInfo = new CountryInfo(res.data);
            setCountryInfo(countryInfo);

            }
        
        );
        
    }   
        getCountryInfo();
        
        
      }, [country]);
  
     
    if (countryInfo)
    {
       /* return(
            <h1>You have chosen {data[0]['name']['common']}</h1>
        )*/
        return (
            <div>
            <table>
                <tr>
                    <td colspan="3"><h1>{countryInfo.nameCommon}</h1></td>
                    <td colspan="3" rowspan="3"><img src={countryInfo.flag} /></td>
                </tr>
                <tr>
                    <td colspan="3"><h1>Official Name: {countryInfo.nameOfficial}</h1></td>
                </tr>
                <tr>
                    <td colspan="3"><h2>Continent(s): {countryInfo.continents.join(', ')}</h2></td>
                </tr>
                <tr>
                    <td><h4>Region: {countryInfo.region}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Sub-region: {countryInfo.subRegion}</h4></td>
                </tr>
                <tr>
                    <td><h4>Capital: {countryInfo.capital.join(', ')}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Language(s) Spoken: {countryInfo.languages.join(', ')}</h4></td>
                </tr>
                <tr>
                    <td><h4>Currency: ({countryInfo.currencyCode}) {countryInfo.currencies[0][0].name}</h4></td>
                    <td>&nbsp;</td>
                    <td><h4>Symbol: {countryInfo.currencies[0][0].symbol}</h4></td>
                </tr>
                <tr>
                    <td><h4>Population: {countryInfo.population}</h4></td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr><td colspan="3"><a href="/">Search another country</a></td></tr>
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