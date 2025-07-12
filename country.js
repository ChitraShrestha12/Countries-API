let params = new URLSearchParams(document.location.search);
let countryName = params.get("name");
const countryDetailImg = document.querySelector(".img-section-detail>img");
const countryDetailTitle = document.querySelector(".country-detail-title");
const nativeName = document.querySelector(".native-name>span");
const population = document.querySelector(".population>span");
const region = document.querySelector(".region>span");
const subRegion = document.querySelector(".sub-region>span");
const capitalCity = document.querySelector(".capital>span");
const topLevelDomain = document.querySelector(".top-level-domain>span");
const countryDetailCurrencies = document.querySelector(".currencies>span");

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((data) => {
    countryDetailImg.src = data[0]?.flags?.svg;
    countryDetailTitle.innerText = data[0]?.name?.common;
    nativeName.innerText = Object.values(data[0]?.name?.nativeName)[0].common;
    population.innerText = data[0]?.population.toLocaleString("en-IN");
    region.innerText = data[0]?.region;
    subRegion.innerText = data[0]?.subregion;
    capitalCity.innerText = data[0]?.capital;
    topLevelDomain.innerText = data[0]?.tld;
    countryDetailCurrencies.innerText = data
      .filter((country) => country.currencies)
      .flatMap((country) => Object.keys(country.currencies));
  });
