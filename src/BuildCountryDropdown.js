
function buildCountryDropDown(countries)
{
    let jsxCountries = [];
    let value;

    countries.sort();

    for (let country of countries) 
    {   let value;
         let iComma = country.indexOf(",");
         let length = country.length;
         //first handle special cases:
         if (country.substring(0, 12) == "Saint Martin")
         {
          value = "Saint Martin";
         }
         else if (country.substring(0,7) == "Bonaire")
         {
            value = country;
         }
         else if (country.substring(0,5) == "Congo")
         {
            value = "Democratic Republic of the Congo";
         }
         else if (country.substring(0, 16) == "Falkland Islands")
         {
          value = "Falkland Islands";
         }
         else if (country.substring(0, 6) == "Brunei")
         {
          value = "Brunei";
         } 
         else if (country.substring(0, 8) == "Holy See")
         {
            value = "Vatican City";
            country = "Holy See (Vatican City)";
         } 
         else if (country.substring(0, 12) == "Sint Maarten")
         {
            value = "Sint Maarten";
         } 
         else if (country.substring(0, 12) == "Saint Helena")
         {
            value = country; // leave the whole thing
         } 
         else if (country.substring(0, 10) == "Cabo Verde")
         {
            country = "Cape Verde"
            value = "Cape Verde"; 
         }  
         else if (country.substring(0, 13) == "Côte d'Ivoire")
         {
            country = "Ivory Coast"
            value = "Ivory Coast"; 
         } 
         else if (country.substring(0, 27) == "French Southern Territories")
         {
            value = "French Southern and Antarctic Lands"; 
         }
        else if (country.substring(0,5) == "Macao") 
        {
            value = "Macau"; //alternate spelling needed for API
        }
        else if (country.substring(0,20) == "Virgin Islands, U.S.") 
        {
            value = "United States Virgin Islands"; 
        }
        else if (iComma > 0) // catch-all for countries whose official name is bass-ackwards with comma... flip it around.
        {
            value = country.substring(iComma + 2, length) + " " + country.substring(0, iComma);
        }
        else if (country.substring(0,7) == "Türkiye") 
        {
            value = "Turkey"; // I think this is what this means.
        }
        else if (country.substring(0,8) == "Viet Nam") 
         {
             value = "Vietnam"; // How the API wants this. Google shows the country name as one word.
             country = "Vietnam";
         }
        else
        {
             value = country;
        }
        jsxCountries.push(<option value={value}>{country}</option>)
    }
    
    //return jsxCountries;
    return(
      <>
      {jsxCountries}
      </>
    )
}
export default buildCountryDropDown;