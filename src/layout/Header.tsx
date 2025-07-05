import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/main-logo.svg";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { Button } from "antd";

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
    setDarkMode((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <>
      <div className="w-full dark:bg-black fixed top-0 left-0 right-0 z-50">
        <nav className="flex container mx-auto justify-between bg-white items-center px-6 py-4  dark:bg-black">
          <NavLink to="/">
            <img src={logo} className="cursor-pointer h-10" alt="Logo" />
          </NavLink>

          <div className="flex items-center space-x-6">
           
            <div className="hidden md:flex items-center space-x-6 text-white">
            <NavLink
          to="/"
          className="flex flex-col items-center text-black  dark:text-white hover:text-red-500"
        >
          <GoHome className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/movies"
          className="flex flex-col items-center text-black  dark:text-white hover:text-red-500"
        >
          <RiMovieLine className="w-6 h-6" />
          <span className="text-xs">Movies</span>
        </NavLink>
        <NavLink
          to="/saved"
          className="flex flex-col items-center text-black  dark:text-white hover:text-red-500"
        >
          <FaRegBookmark className="w-6 h-5" />
          <span className="text-xs">Saved</span>
        </NavLink>
        <NavLink
          to="/search"
          className="flex flex-col items-center text-black  dark:text-white hover:text-red-500"
        >
          <IoSearch className="w-6 h-5" />
          <span className="text-xs">Search</span>
        </NavLink>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <button
              onClick={handleTheme}
              className="text-gray-800 cursor-pointer dark:text-gray-200"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 cursor-pointer" />
              ) : (
                <MoonIcon className="h-6 w-6 cursor-pointer" />
              )}
            </button>
                <Button
                   type="primary"
                   danger
                   block
                   className="outline-none border-none text-white rounded"
                   >
                 Login
               </Button>
            </div>
         
        </nav>
      </div>

      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white dark:bg-black  dark:border-[#111] flex justify-around items-center py-2 z-50">
        <NavLink
          to="/"
          className="flex flex-col items-center dark:text-white hover:text-red-500"
        >
          <GoHome className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/movies"
          className="flex flex-col items-center dark:text-white hover:text-red-500"
        >
          <RiMovieLine className="w-6 h-5" />
          <span className="text-xs">Movies</span>
        </NavLink>
        <NavLink
          to="/saved"
          className="flex flex-col items-center dark:text-white hover:text-red-500"
        >
          <FaRegBookmark className="w-6 h-5" />
          <span className="text-xs">Saved</span>
        </NavLink>
        <NavLink
          to="/search"
          className="flex flex-col items-center dark:text-white hover:text-red-500"
        >
          <IoSearch className="w-6 h-5" />
          <span className="text-xs">Search</span>
        </NavLink>
      </div>
    </>
  );
};

export default Header;