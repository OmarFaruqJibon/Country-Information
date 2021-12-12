import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}



































/* 


function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR364QTaa94UdeSomBuntDdTjVg4UQyrutulC-Iaz2uIPo9-atv0-FBoVE8')
    .then(res=>res.json())
    .then(data=>setCountries(data));
  },[]);

  return(
    <div>
      <h1>Travel around the world!</h1>
      <h5>Countries available: {countries.length}</h5>
      {
        countries.map(country => <Country name={country.name} capital={country.capital} region={country.region}></Country>)
      }
    </div>
  )
}

function Country(props){

  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Capital: {props.capital}</p>
      <p>Region: {props.region}</p>
    </div>
  )
}

*/



export default App;
