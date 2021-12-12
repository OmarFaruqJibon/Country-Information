import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, region, flag, capital} = props.country;

    // console.log(props);

    return (
        <div className="country">
            <h1>{name}</h1>
            {/* <img src={flag} alt="" /> */}
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;