import GetCountryForm from './GetCountryForm';

function Home({ country, setCountry }) {
  return (
    <div>
      <GetCountryForm  setCountry={setCountry} country={country} />
    </div>
  );
}
export default Home;