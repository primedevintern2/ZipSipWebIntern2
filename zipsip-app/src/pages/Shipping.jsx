import Bkash from "../images/Bkash.png";
import Visa from "../images/Visa.png";
import Master from "../images/Mastercard.png";
import Nagad from "../images/Nagad.png";

const Shipping = () => {
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
      <div className="flex">
        <div className="w-1/2 m-14 pl-5">
          <h2 className="text-3xl font-semibold ">Billing Details</h2>
          <form className="grid gap-2 mt-8">
            <label>First Name*</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Fname"
              type="text"
            ></input>
            <label>Company Name</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Cname"
              type="text"
            ></input>
            <label>Street Address*</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Sname"
              type="text"
            ></input>
            <label>Apartment, floor, etc. (optional)</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Aname"
              type="text"
            ></input>
            <label>Town/City*</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="city"
              type="text"
            ></input>
            <label>Phone Number*</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Pnumber"
              type="text"
            ></input>
            <label>Email Address*</label>
            <input
              className="bg-gray-100 h-10 border-2 border-gray-200 rounded mb-5"
              id="Email"
              type="text"
            ></input>
            <div>
              <input
                className="w-4 h-4 mr-4 accent-red-500"
                type="checkbox"
                id="tick"
                value="Save"
              ></input>
              <label>
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="w-1/2 m-14">
          <p className="my-4">Subtotal:</p>
          <hr></hr>
          <p className="my-4">Shipping:</p>
          <hr></hr>
          <p className="my-4">Total:</p>
          <div className="flex justify-between items-center ">
            <div className="flex space-x-2 my-4">
              <input type="checkbox"></input>
              <label>Bank</label>
            </div>
            <div className="flex space-x-2">
              <img src={Bkash} alt="Bkash" className="w-12 h-7 object-contain"></img>
              <img src={Visa} alt="visa" className="w-12 h-7 object-contain"></img>
              <img src={Master} alt="master" className="w-12 h-7 object-contain"></img>
              <img src={Nagad} alt="nagad" className="w-12 h-7 object-contain"></img>
            </div>
          </div>
          <div className="flex space-x-2 my-4">
            <input type="checkbox"></input>
            <label>Cash on delivery</label>
          </div>
          <div>
            <input
              type="number"
              placeholder="Coupon Code"
              className="border-2 rounded-full pl-5 w-2/3 h-12 mr-3"
            />
            <button className="mt-5 px-4 py-3 bg-red-700 text-white rounded-full">
              Apply Coupon
            </button>
          </div>
          <div className="flex justify-between">
            <button className=" w-full m-2 mt-5 px-4 py-3 bg-transparent border-2 border-red-700 text-black rounded-lg">
              Standard
            </button>
            <button className=" w-full m-2 mt-5 px-4 py-3 bg-transparent border-2 border-red-700 text-black rounded-lg">
              Schedule Delivery
            </button>
          </div>
          <button className="w-full mt-5 px-4 py-3 bg-red-700 text-white rounded-full">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
