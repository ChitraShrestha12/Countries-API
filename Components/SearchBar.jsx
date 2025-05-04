import React from "react";

const SearchBar = ({setSearchVal}) => {
  return (
    <section className="search-container">
      <i className="fa-solid fa-magnifying-glass" ></i>
      <input onChange={(e)=>setSearchVal(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..."/>
    </section>
  );
};

export default SearchBar;
