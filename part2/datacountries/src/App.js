import { useState, useEffect } from "react";
import axios from 'axios';
import InfoCountry from "./components/InfoCountry";

function App() {

  const [dataCountries, setDataCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [filterListCountries, setFilterListCountries] = useState([]);

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res)=> setDataCountries(res.data))
  }, [setDataCountries])


  const showNewList = (e) => {
    setSearchCountry(e.target.value)
    setFilterListCountries(dataCountries.filter(dataCountry=>{
      const countryNames = dataCountry.name.common.toLowerCase()
      return countryNames.includes(e.target.value.toLowerCase())
    }))
  }

  return (
    <div className="App">
      find countries: 
      <input onChange={showNewList} value={searchCountry} /><br/>
      <InfoCountry filterListCountries={filterListCountries} setFilterListCountries={setFilterListCountries} setSearchCountry={setSearchCountry}/>
    </div>
  );
}

export default App;
