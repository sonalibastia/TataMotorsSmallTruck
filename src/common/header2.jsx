import Logo from "../assets/images/tata-motors-logo.png";
import Logo2 from "../assets/images/tata-logo.png";

export default function Header2() {
  return (
    <div className="flex items-center  justify-between px-32 py-2.5 bg-black text-white text-xs space-x-7 h-full sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" width={"38%"} height={"18%"} />
        <span className="text-base ml-6 hidden md:inline">
          SMALL COMMERCIAL VEHICLES
        </span>
      </div>
      <img src={Logo2} alt="Logo" width={"8%"} height={"10%"} />
    </div>
  );
}
