const modelSections = [
  {
    title: "Mini Trucks",
    links: [
      "Tata Ace Gold Petrol",
      "Tata Ace Gold CNG",
      "Tata Ace Gold CNG Plus",
      "Ace CNG 2.0",
      "Tata Ace Gold Diesel",
      "Tata Ace EV 1000",
      "Tata Ace EV",
      "Tata Ace HT+",
      "Tata Ace Diesel",
    ],
  },
  {
    title: "Tata Pickups",
    links: [
      "Tata Intra V70",
      "Tata Intra V50 Gold",
      "Tata Intra V30 Gold",
      "Tata Intra V20 Gold",
      "Tata Intra V20",
      "Tata Intra V10",
      "Yodha 2.0",
      "Yodha 1700/1200",
      "Yodha Crew Cabin",
      "Yodha EX",
      "Winger Cargo",
    ],
  },
  {
    title: "Quick Links",
    links: [
      "Tata ACE",
      "Tata Intra",
      "Tata Yodha",
      "Tata Pickup",
      "Tata EV",
      "EV Charging stations",
      "StarGURU",
      "Resources",
      "Contact",
      "Profit Calculator",
    ],
  },
  {
    title: "Commercial Vehicles",
    links: [
      "CV",
      "Trucks",
      "Buses And Vans",
      "Fleet Edge",
      "TATA OK",
      "REWIRE",
    ],
  },
  {
    title: "Services",
    links: [
      "Fleetcare",
      "TATA Alert",
      "TATA Zippy",
      "TATA Kavach",
      "TATA Motors Genuine Oil",
      "Sampoorna Seva 2.0",
    ],
  },
  {
    title: "Spares",
    links: [
      "TATA Genuine Parts",
      "TATA E-Dukaan",
      "TATA Prolife",
      "TATA Durafit Parts",
    ],
  },
  {
    title: "Aggregates",
    links: [
      "TATA Industrial Engine",
      "TATA Motors Axle & Trailer Components",
      "Tata Motors Gensets",
    ],
  },
];

export default function Models() {
  return (
    <div className="bg-black text-white w-full text-sm">
      <div className="px-6 md:px-20 py-10 space-y-10">
        {modelSections.map((section, index) => (
          <div
            key={section.title}
            className={index !== 0 ? "border-t border-gray-700 pt-8" : ""}
          >
            <h3 className="font-semibold mb-4">{section.title}</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {section.links.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-500 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
