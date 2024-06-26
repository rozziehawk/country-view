import React, { useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import addCommas from './addCommas'

import axios from "axios";
import CountryInfo from './CountryInfo';
import './DisplayCountry.css';

const BASE_API_URL = "https://restcountries.com/v3.1/name";
const API_ARGS = "?fullText=true";
const CARD_WIDTH = 400;


const DisplayCountry = ({country}) => 
{
    const navigate = useNavigate();
   
      //const [country, setCountry] = useState("Barbados");
      const [countryInfo, setCountryInfo] = useState(null);
      const [notFound, setNotFound] = useState(false);
      const [axiosError, setAxiosError] = useState(false);
      const [errorMessage, setErrorMessage] = useState(null);

  
      useEffect(() => {
        async function getCountryInfo() {
          // get the lists of items from the memu api and set them as state variable
            // country = "Foobar"; // for testing nonexistent country response.
            try{
            await axios.get(`${BASE_API_URL}/${country}${API_ARGS}`).then(res =>{ 
                const countryInfo = new CountryInfo(res.data);
                setCountryInfo(countryInfo);
            });
            }
            catch(error)
            {
                setNotFound(true);
                setAxiosError(true);
                
                //setErrorMessage(error['response'].data.errorMessage);
                //if (error['response'].data.status === 404)
                if (error['code'] === "ERR_BAD_REQUEST")
                {
                    let errorStatusCode = error['response'].data.status;
                    if (errorStatusCode === 404)
                    {
                        setErrorMessage("Country not Found");
                    }
                    else
                    {
                        setErrorMessage(error['message']);
                    }
                    
                }
                else
                {
                    setErrorMessage(error['message']);
                }
                
                
              
                console.log('Error');
                
                return (
                    <h1>Country not found</h1>
                );
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
            /* Use Bootstrap responsive grid and card to display results */
            
                <div className="row">
                            
                <div className="col-12 col-md-6 col-lg-4"></div>
                <div className="col-12 col-md-6 col-lg-4">
                <div className="card"> 
                <img src={countryInfo.flag} className="card-img-top"/>
                <div class="card-body">
                    <h2 className="card-title">{countryInfo.nameCommon}</h2>
                    <h5 className="card-text">Official Name:</h5>
                    <h4 className="card-text">{countryInfo.nameOfficial}</h4>
                    <p className="card-text text-wrap">Continent(s): {countryInfo.continents.join(', ')}<br/>
                    Region: {countryInfo.region}, &nbsp;Subregion: {countryInfo.subregion}<br/>
                    Capital: {countryInfo.capital.join(', ')}</p>
                    <p className="card-text text-wrap">Language(s) Spoken: {countryInfo.languages.join(', ')}</p>
                    <p className="card-text text-wrap">Currency: ({countryInfo.currencyCode}) {countryInfo.currencies[0][0].name}&nbsp;
                    (<b>{countryInfo.currencies[0][0].symbol}</b>)</p>
                    <p className="card-text text-wrap">Population: {countryInfo.population}</p>
                    <hr/>
                    <a href="/" className="btn btn-primary">Search another country</a>
                </div>
                </div>
                <div className="col-4"></div>
                </div>
                <footer className="bg-body-tertiary text-center text-lg-start fixed-bottom">
 
                    <div className="my-footer text-center p-3">
                        © 2024 Copyright:
                        <a className="text-body" href="https://chezhawk.com/">Karl Haakonsen</a>
                    </div>

                </footer>
            </div>
    
        )
    }
    else if (!notFound /* && !axiosError */)
    {
        return (
            <h1>Loading....</h1>
        )
    }
    else
    {
        return(
            <>
            <h1>Error loading information for <i>{country}</i>:<b> {errorMessage}.</b></h1>
            <a href="/" class="btn btn-primary">Search again</a>
            </>
        )
    }
    

}

export default DisplayCountry;