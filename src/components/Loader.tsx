const Loader = () => {
  return (
    <div id="spinner-container" className="space-y-10">
      <div className="flex justify-center">
        <div
          className="w-8 h-8 border-4 border-whit border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
