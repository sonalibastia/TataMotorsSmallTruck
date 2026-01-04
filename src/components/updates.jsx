import T1 from "../assets/images/news1_0.png";
import T2 from "../assets/images/news_2.jpeg";
import T3 from "../assets/images/news_3.jpeg";

const news = [
  {
    description:
      "Magenta Mobility Deepens Collaboration with Tata Motors Deploys over 100 units of Tata Ace EV – India’s most advanced, zero-emission small commercial vehicle",
    image: T1,
    date: "11 June, 2024",
  },
  {
    description:
      "Tata Motors enhances its electric last-mile mobility offering; launches the all-new Tata Ace EV 1000",
    image: T2,
    date: "9 May, 2024",
  },
  {
    description:
      "Tata Motors launches all-new Intra V70 pickup, Intra V20 Gold pickup and Ace HT+",
    image: T3,
    date: "5 December, 2023",
  },
];

export default function Updates() {
  return (
    <div className="bg-black py-40">
      <div className="relative w-full">
        {/* Top bar: white background */}
        <div className="absolute top-0 left-0 z-20">
          <div className="w-18 h-8 bg-white" />
        </div>

        {/* Left white box */}
        <div className="absolute top-0 left-0 z-20">
          <div className="w-12 h-28 bg-white" />
        </div>

        {/* Vertical bar */}
        <div className="absolute top-8 left-12 z-40">
          <div className="w-6 h-20 bg-white/0 border border-white" />
        </div>
      </div>

      <div className="relative z-0 ml-12 top-8 border border-white">
        <div className="bg-black text-white py-10 px-4 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Get all the Latest Updates Here
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-white">
            {news.map((truck, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold mb-2 uppercase">
                  {truck.name}
                </h2>

                <div className="w-full h-64 relative mb-3">
                  <div className="relative w-full h-full">
                    {/* Image */}
                    <img
                      src={truck.image}
                      alt={truck.name}
                      fill
                      className="object-cover z-10"
                    />
                  </div>
                </div>
                <p className="text-base mb-6">{truck.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
