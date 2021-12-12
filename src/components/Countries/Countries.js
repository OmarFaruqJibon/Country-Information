import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR364QTaa94UdeSomBuntDdTjVg4UQyrutulC-Iaz2uIPo9-atv0-FBoVE8')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[]);


    return (
        <div>
            <h1>Travel Around The World!</h1>
            <p>Country Found: {countries.length}</p>
            <div className="countries-container">
            {
                countries.map(country =><Country 
                    key={country.name}
                    country={country}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;