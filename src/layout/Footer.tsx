import logo from "../assets/main-logo.svg";
import { useNavigate } from "react-router-dom";
import playmarket from '@/assets/playmarket.svg'
import apple from '@/assets/apple.svg'
import first from '@/assets/first.svg'
import second from '@/assets/second.svg'
import third from '@/assets/third.svg'
import fourth from  '@/assets/fourth.svg'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-transparent text-black dark:bg-[#111111] container  rounded-xl mx-auto px-4 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
       
      <div>
  <img
    src={logo}
    alt="Logo"
    className="h-12 mb-4 cursor-pointer"
    onClick={() => navigate("/")}
  />
  <div className="flex gap-2 lg:flex-col sm:flex-row sm:justify-start sm:space-x-6 mt-4 cursor-pointer">
    <img
      src={playmarket}
      alt="Google Play"
      className="w-40 sm:w-36" 
    />
    <img
      src={apple}
      alt="App Store"
      className="w-40 sm:w-36  " 
    />
  </div>
</div>


        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="mb-2 font-bold dark:text-gray-300">About us</p>
            <ul className="space-y-1 text-sm dark:text-gray-300">
             <div className="flex gap-1">
             <img src={first} alt="" />
             <li>Public offer</li> 
             </div>
              <div className="flex gap-1">
                <img src={second} alt="" />
                <li>Advertising</li>
              </div>
              <div className="flex gap-1">
                <img src={third} alt="" />
                <li>FAQ</li>
              </div>
              <div className="flex gap-1">
                <img src={fourth} alt="" />
                <li>Contacts</li>
              </div>
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