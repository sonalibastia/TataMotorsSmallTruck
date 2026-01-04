import Search from "../assets/images/search.png";
import ArrowRight from "../assets/images/arrow-right-white.png";
import ArrowRightBlue from "../assets/images/arrow-right-blue.png";

export default function Navbar() {
  return (
    <div className="bg-gray-900 text-white px-32 py-1 flex flex-wrap justify-between items-center sticky top-13 z-50">
      {/* Nav Links */}
      <div className="flex space-x-4 overflow-x-auto">
        {[
          
          {label: 'Tata ACE', link: '/tata-ace'},
        {label: 'Tata Intra', link: '/tata-intra'},
        {label: 'Tata Yodha', link: '/tata-yodha'},
        {label: 'Tata Pickup', link: '/tata-pickup'},
        {label: 'Tata Ev', link: '/ev'},
         {label: ' Service', link: '/tata-service'},

         {label: 'Contact', link: '/ContactUs'},

          // "Tata Intra",
          // "Tata Yodha",
          // "Tata Pickup",
          // "EV",
          // "Services",
          // "Contact",
        ].map((nav, index) => (
          <a
            key={index}
            href={nav.link}
            className="hover:text-blue-400 whitespace-nowrap text-base"
          >
            {nav.label}
          </a>
        ))}
      </div>

      {/* Search + CTAs */}
      <div className="flex items-center h-8 text-white text-xs">
        <div className="flex items-center px-4 h-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white outline-none text-base"
          />
          <img src={Search} alt="Search" width={18} height={18} />
        </div>
        <div className="flex items-center px-5 h-full space-x-2 bg-blue-600">
          {/* <span className="cursor-pointer text-base">Better Always</span> */}
         <button> <a href="/better-always">Better Always</a></button>
          <img src={ArrowRight} alt="Search" width={7} height={7} />
        </div>
        <div className="flex items-center px-5 h-full space-x-2 bg-white">
          <span className="cursor-pointer text-base text-blue-600">
            <button> <a href="/autoexpo">Auto Expo 2025</a></button>
          </span>
          <img src={ArrowRightBlue} alt="Search" width={7} height={7} />
        </div>
      </div>
    </div>
  );

  
}
