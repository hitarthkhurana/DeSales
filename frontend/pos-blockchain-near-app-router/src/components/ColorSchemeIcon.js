import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import MoonIcon from "!!react-svg-loader!../../public/darkmode.svg";
import SunIcon from "!!react-svg-loader!../../public/lightmode.svg";
import Button from "react-bootstrap/Button";

const ColorSchemeIcon = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  // Update the body class whenever the theme changes
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <Button variant="outline-primary" onClick={toggleTheme}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorSchemeIcon;
