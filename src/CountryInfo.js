import axios from "axios"

const BASE_API_URL = "https://restcountries.com/v3.1/name/";
const API_ARGS = "?fullText=true";

class CountryInfo {

    static async getCountryInfo() {
      const {data} =  await axios.get(`${BASE_API_URL}/Barbados${API_ARGS}`);
      return data;
    }
    
   
  
  }
  
  export default CountryInfo;