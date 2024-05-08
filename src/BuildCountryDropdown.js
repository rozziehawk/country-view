
function buildCountryDropDown(countries)
{
    let jsxCountries = [];
    let value;

    const arrItems = [<option value="Barbados">Barbados</option>, <option value="Brazil">Brazil</option>, 
  <option value="Canada">Canada</option>]

    for (let country of countries) 
    {   
         //jsxCountries += '<option value="' + country + '">' + country + '</option>';
         jsxCountries.push(<option value={country}>{country}</option>)
    }
    
    //return jsxCountries;
    return(
      <>
      {jsxCountries}
      </>
    )
}
export default buildCountryDropDown;