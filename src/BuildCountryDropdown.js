
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
         else if (iComma > 0)
         {
            value = country.substring(iComma + 2, length) + " " + country.substring(0, iComma);
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