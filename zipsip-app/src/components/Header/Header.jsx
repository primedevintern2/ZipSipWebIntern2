import logo from "../../images/image 1473.png";
import search from "../../images/Vector.png";
import cart from "../../images/bag.png";



const Header = () => {
  return (
  <header className=" flex justify-between items-center h-40 bg-gradient-to-l from-red-100 ...">
    <div className="flex items-center space-x-4">
      <img
        src={logo}
        className="w-25 h-30 pt-4 ml-24 object-contain"
        alt="Logo"
      />
      </div>
      <div className="flex items-center space-x-4">
      <nav className="">
        <ul className="flex space-x-9">
          <li>
            <a href="#" className="text-rgba(25, 25, 25, 1)">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-rgba(25, 25, 25, 1)">
            Location
            </a>
          </li>
          <li>
            <a href="#" className="text-rgba(25, 25, 25, 1)">
            About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-rgba(25, 25, 25, 1)">
            Contact Us 
            </a>
          </li>
        </ul>
      </nav>
      </div>
      <div className="flex items-center space-x-4 mr-24">
      <img
        src={search}
        className="w-4 h-4 object-contain"
        alt="search"
      />
      <img
        src={cart}
        className="w-4 h-4 object-contain"
        alt="cart"
      />
      <button className="px-4 py-1 bg-red-700 text-white rounded-full">Login</button>
      </div>
      
    
  </header>
  );
};

export default Header;
