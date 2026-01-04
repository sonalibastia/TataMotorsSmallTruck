export default function Enquiry() {
  return (
    <div className="bg-black">
      <div className="relative w-full">
        {/* Top bar: white background */}
        <div className="absolute top-0 left-0 z-20">
          <div className="w-18 h-8 bg-blue-400" />
        </div>

        {/* Left white box */}
        <div className="absolute top-0 left-0 z-20">
          <div className="w-12 h-28 bg-blue-400" />
        </div>

        {/* Vertical bar */}
        <div className="absolute top-8 left-12 z-40">
          <div className="w-6 h-20 bg-white/0 border border-blue-400" />
        </div>
      </div>

      <div className="relative z-0 ml-12 top-8 border border-blue-400">
        <div className="bg-black text-white py-10 px-4 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Enquire Now
          </h2>
          <p className="text-center mb-8 text-gray-300 text-sm sm:text-base">
            Tata Motors offers a range of services keeping in mind the comfort
            and convenience.
          </p>

          <form className="max-w-5xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-black border border-white text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 bg-black border border-white text-white placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full p-3 bg-black border border-white text-white">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
              <input
                type="text"
                placeholder="Enter Pincode"
                className="w-full p-3 bg-black border border-white text-white placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full p-3 bg-black border border-white text-white">
                <option>Select Product</option>
                <option>Tata Ace Gold</option>
                <option>Tata Yodha</option>
              </select>

              {/* Captcha or placeholder box */}
              <div className="flex items-center justify-center h-[58px] bg-white text-black">
                <span className="text-sm">[Captcha Placeholder]</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 px-8 py-2 text-white font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>

            <div className="text-xs text-gray-400 mt-2 flex items-start gap-2">
              <span className="text-blue-500">●</span>I agree that by clicking
              on 'Submit', I am explicitly soliciting a call from Tata Motors or
              its associates on my mobile number to assist me in purchasing Tata
              Vehicles.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
