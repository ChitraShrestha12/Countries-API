import { useContext } from "react";
import { ThemeContexts } from "../contexts/ThemeContext";


const Header = ({theme}) => {
  const [isDark,setIsDark] = useContext(ThemeContexts)
  return (
    <header className={`${isDark?'dark':''}`}>
      <h2>Where in the world?</h2>
      <p
        className="theme-changer"
        onClick={() => {
          
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode',!isDark)
        }}
      >
        <i className={`fa-regular fa-${isDark?'sun':'moon'}`} />
        &nbsp;&nbsp;{isDark?"Light Mode":"Dark Mode"}
      </p>
    </header>
  );
};

export default Header;
