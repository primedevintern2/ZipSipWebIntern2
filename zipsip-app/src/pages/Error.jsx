function Error() {
  return (
    <div className="h-scree text-center content-center bg-gradient-to-t from-red-50 to-transparent">
      <h1 className="text-black font-medium text-5xl mb-10 mt-40">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button className="px-5 py-3 mt-10 mb-60 bg-red-700 text-white rounded-full">
      Go to Homepage
          </button>
    </div>
  );
}

export default Error;
