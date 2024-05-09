import addCommas from './addCommas';

class CountryInfo {

    constructor(data)
    {
        if (data)
        {

          this.nameCommon = data[0]['name']['common'];
          this.flag = data[0]['flags']['png'];
          this.nameOfficial = data[0]['name']['official'];
          // continents is returned as an array. Push it into our array
          this.continents = [];
          for (let cont of data[0]['continents'])
          {
            this.continents.push(cont);
          }
          if (data[0].region)
          {
            this.region = data[0]['region'];
          }
          else
          { this.region = "N/A"}
          if(data[0].subregion)
          {
            this.subregion = data[0].subregion;
          }
          else
          {
            this.subregion = "N/A";
          }
          if (data[0].capital)
          {
            this.capital = data[0]['capital'];
          }
          else
          {
            this.capital = ["N/A"];
          }
          
          //languages and currencies are returned as an object. Process accordingly
          if (data[0].languages)
          {
            this.languages = [];
            let objLanguages = data[0].languages;
            this.languages = Object.keys(objLanguages).map((key) => [objLanguages[key]]);
          }
          else
          {
            this.languages = ["N/A"];
          }
          //likewise with currencies, if there are any....
          this.currencies = [];
          if (data[0].currencies)
          {
            let objCurrencies = data[0].currencies;
            let arrayCurrencies = Object.keys(objCurrencies).map((key) => [key, objCurrencies[key]]);
            this.currencyCode = arrayCurrencies[0][0];
            this.currencies = Object.keys(objCurrencies).map((key) => [objCurrencies[key]]);
          }
          else
          {
            this.currencyCode = "N/A";
            this.currencies.push(["N/A"]) ;
          }

          // convert population to string with commas for easier viewing...
          if (data[0].population && data[0].population > 999)
          {
            let sPop = data[0].population.toString();
            this.population = addCommas(sPop);
          }
          else
          {
            this.population = data[0].population;
          }
          //this.population = data[0].population;
      }
        
    } // end of constructor
       
  }
  
  export default CountryInfo;