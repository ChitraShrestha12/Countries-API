import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { useOutletContext, useParams } from "react-router-dom";
import ShimmerCountryDetail from "./ShimmerCountryDetail";
import { ThemeContexts } from "../contexts/ThemeContext";

const CountryDetail = () => {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  const [isDark] = useContext(ThemeContexts
  )

  // console.log(countryName);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log([data]);
        setCountryData({
          name: data.name.common,
          image: data.flags.svg,
          nativeName: data.name.nativeName
            ? Object.values(data.name.nativeName)[0].common
            : data.name.common,

          population: data.population.toLocaleString("en-US"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital || "N/A",
          topLevelDomain: data.tld,
          currencies: Object.values(data.currencies)
            .map((curency) => curency.name)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
        });
      });
  }, [countryName]);

  return (
    <>
      {!countryData.name ? (
        <ShimmerCountryDetail />
      ) : (
        <main className={`${isDark ? "dark" : ""}`}>
          <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img
                src={countryData.image}
                alt={countryData.name + " " + "Flag"}
              />
              <div className="details-text-container">
                <h1 className="country-title">{countryData.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name:</b>
                    <span className="native-name">
                      {" "}
                      {countryData.nativeName}
                    </span>
                  </p>
                  <p>
                    <b>Population:</b> {countryData.population}
                  </p>
                  <p>
                    <b>Region: {countryData.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {countryData.subRegion}</b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {countryData.capital}</b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {countryData.topLevelDomain}</b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {countryData.currencies}</b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {countryData.languages}</b>
                    <span className="languages"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default CountryDetail;
