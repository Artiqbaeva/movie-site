import logo from "../assets/main-logo.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-transparent text-black dark:bg-[#111111] container rounded-xl mx-auto px-4 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
       
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12 mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 cursor-pointer ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 mb-2 sm:mb-0"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-2 font-bold dark:text-gray-300">About us</p>
            <ul className="space-y-1 text-sm dark:text-gray-300">
              <li>Public offer</li>
              <li>Advertising</li>
              <li>FAQ</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-bold dark:text-gray-300">Categories</p>
            <ul className="space-y-1 text-sm dark:text-gray-300">
              <li>Movies</li>
              <li>Theater</li>
              <li>Concerts</li>
              <li>Sports</li>
            </ul>
          </div>
        </div>

       
        <div>
          <p className="mb-2 font-bold dark:text-gray-300">Contact us</p>
          <p className="text-red-500 mb-4 cursor-pointer">+998 (90) 897-33-38</p>
          <p className="mb-2 font-bold dark:text-gray-300">Social media</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="dark:text-gray-50 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="dark:text-gray-300 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="dark:text-gray-300 hover:text-gray-700">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;