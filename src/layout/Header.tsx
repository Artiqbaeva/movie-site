import { NavLink } from "react-router-dom"
import React from 'react'
import logo from "../assets/main-logo.svg"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { GoHome  } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { IoSearch} from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
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
    <div className="space-x-6 hidden md:flex items-center">
     <NavLink className="flex flex-col items-center space-x-1 hover:text-red-500" to={"/"}>
    <GoHome  />
    <span>Home</span>
  </NavLink>
  <NavLink className="flex flex-col  items-center space-x-1 hover:text-red-500" to={"/movies"}>
    <RiMovieLine />
    <span>Movies</span>
  </NavLink>
  <NavLink className="flex flex-col items-center space-x-1 hover:text-red-500" to={"/saved"}>
    <FaRegBookmark />
    <span>Saved</span>
  </NavLink>
  <NavLink className="flex flex-col  items-center space-x-1 hover:text-red-500" to="#">
    <IoSearch />
    <span>Search</span>
  </NavLink>
</div>
      <div className="flex items-center space-x-4">
      <div className="flex justify-between  items-center px-2 py-4   rounded">
        <button
          onClick={handleTheme}
          className="text-gray-800 cursor-pointer dark:text-gray-200 flex items-center space-x-2"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 cursor-pointer" />
          ) : (
            <MoonIcon className="h-6 w-6 cursor-pointer" />
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