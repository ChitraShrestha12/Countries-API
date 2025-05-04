import "./App.css";
import Header from "../Components/Header";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContexts } from "../contexts/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <ThemeContexts.Provider value={[isDark,setIsDark]}>
      <Header theme={[isDark,setIsDark]}/>
      <Outlet context={[isDark]}/>
    </ThemeContexts.Provider>
  );
};

export default App;
