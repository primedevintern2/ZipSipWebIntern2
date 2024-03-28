const Shipping = () => {
  return (
    <div>
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
        <div>
            <h3>Billing Details</h3>
            <form>
                <label>First Name*</label>
                <input id="Fname" type="text"></input>
                <label>Company Name</label>
                <input id="Fname" type="text"></input>
                <label>Street Address*</label>
                <input id="Fname" type="text"></input>
                <label>Street Address*</label>
                <input id="Fname" type="text"></input>

            </form>

        </div>
        <div>

        </div>
    </div>
    </div>
  );
};

export default Shipping