import logo from "../../images/image 1473.png";
import fb from "../../images/facebook-f-brands (1).png";
import insta from "../../images/instagram-brands (1).png";
import twitter from "../../images/twitter-brands (1).png";

const Footer = () => {
  return (
    <footer className="h-24 bg-gradient-to-t from-transparent to-red-50 border-t-4 border-red-100" >
      <div className="flex justify-between pt-14">
        <div className="items-center ml-24">
          <img src={logo} className="w-20 h-30 object-contain" alt="Logo" />
          <p className="w-72 mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            sapiente tempora{" "}
          </p>
          <div className="flex items-center space-x-4 mt-9">
            <img src={fb} className="w-4 h-4 object-contain" alt="search" />
            <img src={insta} className="w-4 h-4 object-contain" alt="search" />
            <img
              src={twitter}
              className="w-4 h-4 object-contain"
              alt="search"
            />
          </div>
        </div>
        <div className="space-y-2 leading-9">
          <span className="font-normal text-xl text-red-500">About Us</span>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Service Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 leading-9">
          <span className="font-normal text-xl text-red-500">Company</span>
          <ul>
            <li>
              <a href="#">Partnership</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="mr-24">
          <span className="font-normal text-xl text-red-500">Get in touch</span>
          <p className="w-72 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            sapiente tempora{" "}
          </p>
          <input
            type="text"
            placeholder="Email"
            className="bg-custom-black rounded-full pl-5 w-50 h-12 mr-3"
          />
          <button className="mt-5 px-4 py-3 bg-red-700 text-white rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center mt-14 font-semibold">
        <p>Copyright © 2024 ZipSip</p>
      </div>
    </footer>
  );
};

export default Footer;
