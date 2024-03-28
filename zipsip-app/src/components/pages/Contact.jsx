const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-red-50 to-transparent">
      <div>
        <p className="ml-20 mt-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-red-700">
            Home
          </a>{" "}
          >{" "}
          <a href="#" className="text-gray-600 hover:text-red-700">
            Contact Us
          </a>
        </p>
      </div>

      <div className="mx-24 h-screen w-10/12 mt-10">
        <form className="bg-white shadow rounded ">
        <span className="absolute font-normal text-l text-white bg-black w-10/12 h-12 pl-8 pt-3 rounded-t-md">Get In Touch With Us</span>
        <div className="flex">
        <div className="pt-6">
          <div className="px-8 pt-10 mb-4 mt-8">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Phone Number<br></br>
              <span className="text-gray-400">0012334566</span>
            </label>
            <input
              className="appearance-none border-b border-solid border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Phone Number"
              type="number"
            />
          </div>
          <div className="px-8 mb-4 mt-8">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address<br></br>
              <span className="text-gray-400">Johndoe@example.com</span>
            </label>
            <input
              className="appearance-none border-b border-solid border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
            />
          </div>
          <div className=" px-8 pt-6 mb-6 mt-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Location<br></br>
              <span className="text-gray-400">Lorem Ipsum</span>
            </label>
            <textarea
              className="resize-none appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Message"
              rows="6"
            ></textarea>
          </div>
          </div>
          <div className="pt-6">
          <div className="px-8 pt-10 mb-4 mt-8">
            <span className="font-semibold text-xl text-black-500">Send us a message</span>
            <p className="pt-2 w-9/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. </p>
          </div>
          <div className="flex ">
          <div className="">
          <div className="px-8 mb-4 mt-4">
            <input
              className=" appearance-none border rounded-full w-80 py-2 px-5 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 placeholder:font-medium"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="px-8 mb-4 mt-4">
            <input
              className="appearance-none border rounded-full w-80 py-2 px-5 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 placeholder:font-medium"
              id="Number"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          </div>
          <div>
          <div className="px-8 mb-4 mt-4">
            <input
              className="appearance-none border rounded-full w-80 py-2 px-5 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 placeholder:font-medium"
              id="email"
              type="email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="px-8 mb-4 mt-4">
            <input
              className="appearance-none border rounded-full w-80 py-2 px-5 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 placeholder:font-medium"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          </div>
          </div>
          <div className=" px-8 mb-6 mt-4">
            <textarea
              className="resize-none appearance-none border rounded-xl w-full py-2 px-5 text-gray-900 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 placeholder:font-medium"
              id="message"
              placeholder="Message"
              rows="6"
            ></textarea>
          </div>
          <div className="px-8 pb-8 mb-4 mt-4 flex items-center justify-center">
          <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
