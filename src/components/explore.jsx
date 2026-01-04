import Search from "../assets/images/search.png";

export default function Explore() {
  return (
    <div className="bg-black py-15">
      {/* <div className="w-full text-white">
        <div className="h-16 grid grid-cols-12 items-center px-6 relative border border-gray">

          <div className="absolute left-0 top-0 bottom-0 w-6 bg-blue-600 clip-path-arrow z-10" />

          <div className="col-span-3 sm:col-span-2 font-semibold text-sm sm:text-base z-20">
            KEEP EXPLORING
          </div>

          <div className="gird col-span-9 sm:col-span-10 flex justify-start space-x-6 text-sm sm:text-base">
            <button className="hover:underline">All Vehicles</button>
            <button className="hover:underline">Profit Calculator</button>
            <button className="hover:underline">Contact</button>
          </div>
        </div>
      </div> */}

      <div className="py-12 text-center">
        <h2 className="text-white text-xl sm:text-4xl font-semibold mb-6">
          Are you looking for something particular?
        </h2>
        <div className="mx-auto w-11/12 max-w-4xl flex items-center border border-gray-900 bg-black px-6 py-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
          />
          <img src={Search} alt="Search" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
