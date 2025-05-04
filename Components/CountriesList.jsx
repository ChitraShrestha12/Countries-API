import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ShimmerCountryCard from "./ShimmerCountryCard";

const CountriesContainer = ({ searchVal }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountriesData(data);
      })
      .catch((error) => console.error("Error fetching countries:", error)); // optional: good to catch fetch errors
  }, []);

  return (
    <div className="countries-container">
      {!countriesData.length ? (
        <ShimmerCountryCard />
      ) : (
        countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchVal.toLowerCase()) ||  country.region.toLowerCase().includes(searchVal.toLowerCase())
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              image={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital ? country.capital[0] : "N/A"}
            />
          ))
      )}
    </div>
  );
};

export default CountriesContainer;
