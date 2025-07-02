import { NavLink } from "react-router-dom"
import React from 'react'
import logo from "../assets/main-logo.svg"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  
  const handleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };
 
  return (
    <div className="container mx-auto " >
       <nav className="flex justify-between items-center px-6 py-4 bg-transparent dark:bg-black ">
       <div>
      <NavLink to="/">
        <img src={logo} className="cursor-pointer" alt="Logo" />
      </NavLink>
    </div>
      <div className="space-x-6 hidden md:flex ">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
        <NavLink to="#">Saved</NavLink>
        <NavLink to="#">Search</NavLink>
      </div>
      <div className="flex items-center space-x-4">
      <div className="flex justify-between  items-center px-2 py-4   rounded">
        <button
          onClick={handleTheme}
          className="text-gray-800 cursor-pointer dark:text-gray-200 flex items-center space-x-2"
        >
          {darkMode ? (
            <SunIcon className="h-7 w-7 cursor-pointer" />
          ) : (
            <MoonIcon className="h-7 w-7 cursor-pointer" />
          )}
          
        </button>
      </div>

      <div>
        <button className="bg-red-600 px-4 py-2 rounded text-white cursor-pointer">Login</button>
      </div>
    </div>
    </nav>
      
  
    </div>
  )
}

export default Header