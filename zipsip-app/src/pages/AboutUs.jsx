import rectangle from "../images/Rectangle 19271.png";
import { BsCircleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-t from-red-50 to-transparent">
      <div>
        <p className="ml-20 mt-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-red-700">
            Home
          </a>{" "}
          >{" "}
          <a href="#" className="text-gray-600 hover:text-red-700">
            Location
          </a>
        </p>
      </div>
      <h2 className="ml-20 mb-9 text-3xl font-semibold ">About Us</h2>
      <div className="ml-20 flex w-full">
        <div className="w-3/5 mr-20">
          <p className="leading-9 mb-5">
            ZipSip is a must have app for rapid delivery of the finest wines,
            beers and other iconic beverages along with gourmet groceries from
            around the world and home, right to your doorstep in Colombo,
            Negombo and Galle.
            <br />
            With nearly a 100 choices in beverages, and other gadgets aimed to
            enhance your liquid enjoyment at prices we guarantee to be lower
            than any retail store, ZipSip makes it super easy for anyone to
            select, buy and enjoy a tasty drink without ever leaving your home.
            <br />
            Why drive to get your favourite drinks? Ever run dry during a
            weekend afternoon with friends? Planning a last minute dinner and
            your fridge is empty? And, what about a date night or a urgent gift?
            ZIP SIP! is your answer.
            <br />
            With a huge selection of wines from seven regions, beer, iconic
            aerated waters, coffee and some cool hardware & gadgets to enhance
            your experience, ZIPSiP is the MUST HAVE app for every smartphone
            user!
            <br />
            Sit back & relax - and enjoy our “luxury liquids” experience. We
            know you will!
          </p>
          <p className="mb-5 font-medium">
            Once downloaded all you have to do is:
          </p>
          <div className="flex w-full font-medium">
            <div className="w-1/3 flex items-center">
              <BsCircleFill className="mr-4 w-6 h-6 text-gray-400" />A minute to
              register
            </div>
            <div className="w-1/3 flex items-center">
              <BsCircleFill className="mr-4 w-6 h-6 text-gray-400" />
              Choose your products
            </div>
            <div className="w-1/3 flex items-center">
              <BsCircleFill className="mr-4 w-6 h-6 text-gray-400" />
              Checkout
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img
            src={rectangle}
            alt="rectangle"
            className="w-[358px] h-[319px]"
          ></img>
        </div>
      </div>
      <div className="h-80 my-20 bg-black text-center content-center">
        <h1 className="text-white font-bold text-3xl">Sign up and save</h1>
        <p className="text-white my-5">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        <div className="flex justify-center mt-7">
        <input
            type="text"
            placeholder="Email"
            className="bg-gray rounded-full pl-5 w-60 h-12 mr-3"
          />
          <button className="px-5 py-3 bg-red-700 text-white rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
