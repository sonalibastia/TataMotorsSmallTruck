import T1 from "../assets/images/Tata_Ace_home_1.png";
import T2 from "../assets/images/yodha.png";
import T3 from "../assets/images/T3.jpeg";
import ArrowRight from "../assets/images/arrow-right-white.png";

const trucks = [
  {
    name: "Tata ace",
    description:
      "Tata Ace has emerged as India’s No.1 Mini Truck brand entering the BS6 era with a wide portfolio featuring the biggest number of variants",
    image: T1,
    engine: "694 CC–702 CC",
    fuel: "Petrol, Diesel, EV, CNG, Bi-Fuel (CNG+Petrol)",
    gvw: "1615 -2120",
    payload: "600Kg - 1100Kg",
    link: "/tata-ace"
  },
  {
    name: "Tata Intra",
    description:
      "Tata Intra range of pickup trucks combines enhanced levels of visual richness and sophistication with robustness and reliability",
    image: T2,
    engine: "798 CC–1497 CC",
    fuel: "Bi-Fuel (CNG+Petrol), Diesel, CNG, Electric",
    gvw: "2120 -3210",
    payload: "1000Kg - 1700Kg",
    link: "/"
  },
  {
    name: "Tata Yodha",
    description:
      "Powered by the most powerful and fuel-efficient engine in the category and the biggest cargo loading area.",
    image: T3,
    engine: "2179 CC–2956 CC",
    fuel: "Diesel, CNG",
    gvw: "2950 -3840",
    payload: "1200Kg - 2000Kg",
    link: "/"
  },
];

export default function Truck() {
  return (
    <div className="py-24 bg-black px-6 md:px-32">
      <div className="flex justify-center">
        <span className="text-white text-4xl md:text-5xl font-extrabold text-center">
          Our Trucks
        </span>
      </div>

      <div className="py-15">
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {trucks.map((truck, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-2 uppercase">
                {truck.name}
              </h2>
              <p className="text-base mb-6">{truck.description}</p>
              <div className="w-full h-64 relative mb-3">
                <div className="relative w-full h-full">
                  {/* Image */}
                  <img
                    src={truck.image}
                    alt={truck.name}
                    fill
                    className="object-cover z-10"
                  />

                  {/* Top bar: white background */}
                  <div className="absolute top-0 left-0 z-20">
                    <div className="w-18 h-8 bg-white" />
                  </div>

                  {/* Top border bar with translucency */}
                  <div className="absolute top-0 left-18 z-40">
                    <div className="w-69.5 h-8 bg-white/0 border-b border-white" />
                  </div>

                  {/* Left white box */}
                  <div className="absolute top-0 left-0 z-20">
                    <div className="w-12 h-28 bg-white" />
                  </div>

                  {/* Vertical bar */}
                  <div className="absolute top-8 left-12 z-40">
                    <div className="w-6 h-20 bg-white/0 border border-white " />
                  </div>

                  {/* Left border overlay */}
                  <div className="absolute top-0 left-0 z-40">
                    <div className="w-12 h-64 bg-white/0 border-r border-white " />
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2">
                  <p className="text-base">
                    <span className="font-semibold">ENGINE</span>
                  </p>
                  <p className="text-base">{truck.engine}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-base mt-">
                    <span className="font-semibold">FUEL TYPES</span>
                  </p>
                  <p className="text-base mt-1">{truck.fuel}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-base">
                    <span className="font-semibold">GVW</span>
                  </p>
                  <p className="text-base">{truck.gvw}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-base mt-">
                    <span className="font-semibold">PAYLOAD(KG)</span>
                  </p>
                  <p className="text-base mt-1">{truck.payload}</p>
                </div>
                <div className="flex items-center px-5 h-full space-x-2 bg-blue-600 mt-3 py-3 w-52">
                  <a href={truck.link} className="flex items-center space-x-2">
                    <span className="cursor-pointer text-base text-white capitalize">
                      Explore {truck.name}
                    </span>
                    <img src={ArrowRight} alt="Right" width={7} height={7} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
