import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/main-logo.svg";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { useStore } from "@/zustand/useStore";
import ProfileMenu from "@/pages/login/ProfileMenu";

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const auth = useStore((state) => state.auth);
  const setAuth = useStore((state) => state.setAuth);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    if (!auth && typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setAuth(JSON.parse(storedUser));
      }
    }
  }, [auth, setAuth]);

  const handleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <div className="w-full dark:bg-black fixed top-0 left-0 right-0 z-50">
      <nav className="flex container mx-auto justify-between bg-white items-center px-6 py-4 dark:bg-black">
        <NavLink to="/">
          <img src={logo} className="cursor-pointer h-10" alt="Logo" />
        </NavLink>

        <div className="hidden md:flex items-center space-x-6 text-white">
          {[{ to: "/", icon: <GoHome className="w-6 h-6" />, label: "Home" },
            { to: "/movies", icon: <RiMovieLine className="w-6 h-6" />, label: "Movies" },
            { to: "/saved", icon: <FaRegBookmark className="w-6 h-5" />, label: "Saved" },
            { to: "/search", icon: <IoSearch className="w-6 h-5" />, label: "Search" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-red-500" : "text-black dark:text-white"
                }`
              }
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handleTheme} className="text-gray-800 cursor-pointer dark:text-gray-200">
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
          <ProfileMenu />
        </div>

        <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white dark:bg-black dark:border-[#111] flex justify-around items-center py-2 z-50">
          {[{ to: "/", icon: <GoHome className="w-6 h-6" />, label: "Home" },
            { to: "/movies", icon: <RiMovieLine className="w-6 h-5" />, label: "Movies" },
            { to: "/saved", icon: <FaRegBookmark className="w-6 h-5" />, label: "Saved" },
            { to: "/search", icon: <IoSearch className="w-6 h-5" />, label: "Search" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-red-500" : "text-black dark:text-white"
                }`
              }
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
