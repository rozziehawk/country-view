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
          this.region = data[0]['region'];
          this.subRegion = data[0]['subregion'];
          this.capital = data[0]['capital'];
          
          //languages and currencies are returned as an object. Process accordingly
          this.languages = [];
          this.currencies = [];
          let objLanguages = data[0].languages;
          this.languages = Object.keys(objLanguages).map((key) => [objLanguages[key]]);
          //likewise with currencies
          let objCurrencies = data[0].currencies;
          let arrayCurrencies = Object.keys(objCurrencies).map((key) => [key, objCurrencies[key]]);
          this.currencyCode = arrayCurrencies[0][0];
          this.currencies = Object.keys(objCurrencies).map((key) => [objCurrencies[key]]);

          // convert population to string with commas for easier viewing...
          let sPop = data[0].population.toString();
          this.population = addCommas(sPop);
          //this.population = data[0].population;
      }
        
    } // end of constructor
       
  }
  
  export default CountryInfo;