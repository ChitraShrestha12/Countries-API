const countryCountainer = document.querySelector(".card-section");
const searchInput = document.querySelector("#search-input");
const regionSelect = document.querySelector(".region-select");
const toggleTheme = document.querySelector(".toggle-theme");

let allCountries = [];
toggleTheme.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  toggleTheme.innerHTML = !isDark
    ? '<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode'
    : '<i class="fa-regular fa-sun"></i>&nbsp; Light Mode';
});

fetch(
  "https://restcountries.com/v3.1/independent?status=true&fields=region,capital,flags,population,name"
)
  .then((res) => res.json())
  .then((countryData) => {
    console.log(countryData);
    
    allCountries = countryData;
    displayCountries(countryData);
  });

function displayCountries(countries) {
  countryCountainer.innerHTML = "";
  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
    countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} Flag" />
        <div class="country-detail">
          <h1 class="title">${country.name.common}</h1>
          <p class="country-population"><span>Population:</span> ${country.population.toLocaleString(
            "en-IN"
          )}</p>
          <p class="country-region"><span>Region:</span> ${country.region}</p>
          <p class="country-capital"><span>Capital:</span> ${
            country.capital
          }</p>
        </div>`;
    countryCountainer.appendChild(countryCard);
  });
}

regionSelect.addEventListener("input", (e) => {
  searchItem = e.target.value;
  filterCountries = allCountries.filter((country) => {
    return country.region.toLowerCase().includes(searchItem);
  });
  displayCountries(filterCountries);
});

searchInput.addEventListener("input", (e) => {
  searchItem = e.target.value;
  filterCountries = allCountries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchItem.toLowerCase());
  });
  displayCountries(filterCountries);
});
