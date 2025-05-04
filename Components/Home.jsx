import React, { useContext } from 'react'
import SearchBar from "../Components/SearchBar";
import SelectMenu from "../Components/SelectMenu";
import CountriesContainer from "../Components/CountriesList";
import { useState } from "react";
import { Outlet, useOutletContext } from 'react-router-dom'
import { ThemeContexts } from '../contexts/ThemeContext';

const Home = () => {
    const [searchVal, setSearchVal] = useState("");
    const [isDark] = useContext(ThemeContexts)
  
  return (
    <>
    <Outlet/>
    <main className={`${isDark?'dark':''}`}>
        <div className="search-filter">
          <SearchBar setSearchVal={setSearchVal}/>
          <SelectMenu setSearchVal={setSearchVal}/>
        </div>
        <CountriesContainer searchVal={searchVal}/>
      </main>
    </>
  )
}

export default Home
