import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import addCommas from './addCommas'

import axios from "axios";
import CountryInfo from './CountryInfo';
import './DisplayCountry.css';

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";
const CARD_WIDTH = 400;


const DisplayCountry = ({country}) => 
{
    const navigate = useNavigate();
   
      //const [country, setCountry] = useState("Barbados");
      const [countryInfo, setCountryInfo] = useState(null);
      const [notFound, setNotFound] = useState(false);
  
      useEffect(() => {
        async function getCountryInfo() {
          // get the lists of items from the memu api and set them as state variable
            try{
            await axios.get(`${BASE_API_URL}/${country}${API_ARGS}`).then(res =>{ 
                const countryInfo = new CountryInfo(res.data);
                setCountryInfo(countryInfo);
            });
            }
            catch(error)
            {
                setNotFound(true);
                console.log('Error');
                return (
                    <h1>Country not found</h1>
                )
            }
        
    }   
        getCountryInfo();
        
        
      }, [country]);
  
     
    if (countryInfo)
    {
       /* return(
            <h1>You have chosen {data[0]['name']['common']}</h1>
        )*/
        return (
            <div className="card w-30" style={{width: CARD_WIDTH}}>
                <img src={countryInfo.flag} className="card-img-top"/>
                <div class="card-body">
                    <h2 className="card-title">{countryInfo.nameCommon}</h2>
                    <h5 className="card-text">Official Name:</h5>
                    <h4 className="card-text">{countryInfo.nameOfficial}</h4>
                    <p className="card-text text-wrap">Continent(s): {countryInfo.continents.join(', ')}<br/>
                    Region: {countryInfo.region}, &nbsp;Subregion: {countryInfo.subregion}</p>
                    <p className="card-text text-wrap">Capital: {countryInfo.capital.join(', ')}</p>
                    <p className="card-text text-wrap">Language(s) Spoken: {countryInfo.languages.join(', ')}</p>
                    <p className="card-text text-wrap">Currency: ({countryInfo.currencyCode}) {countryInfo.currencies[0][0].name}&nbsp;
                    (<b>{countryInfo.currencies[0][0].symbol}</b>)</p>
                    <p className="card-text text-wrap">Population: {countryInfo.population}</p>
                    <hr/>
                    <a href="/" className="btn btn-primary">Search another country</a>
                </div>
            </div>

/*
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
                    <td><h4>Sub-region: {countryInfo.subregion}</h4></td>
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
                <tr><td colspan="3" ><a href="/" class="btn btn-primary">Search another country</a></td></tr>
            </table>
        */
            
        )
    }
    else if (!notFound)
    {
        return (
            <h1>Loading....</h1>
        )
    }
    else
    {
        return(
            <>
            <h1>Country <i>{country}</i> not found.</h1>
            <a href="/" class="btn btn-primary">Search another country</a>
            </>
        )
    }
    

}

export default DisplayCountry;