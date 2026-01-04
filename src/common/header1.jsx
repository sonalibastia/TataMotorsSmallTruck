import Call from "../assets/images/top-nav-call.png";
import Blog from "../assets/images/top-nav-blog.png";

export default function Header1() {
  return (
    <div className="flex items-center justify-end px-32 py-1 bg-black text-white text-xs space-x-9 h-8">
      <a href="/ev-charging-stations" className="cursor-pointer">
        <span className="flex items-center space-x-1">
          <img src={Blog} alt="EV Charging station" width={12} height={12} />
          <span>EV Charging station</span>
        </span>
      </a>
      <a href="/starguru" className="cursor-pointer">
        <span className="flex items-center space-x-1">
          <img src={Blog} alt="StarGURU" width={12} height={12} />
          <span>StarGURU</span>
        </span>
      </a>
      <a href="callto:07941050759" className="cursor-pointer">
        <span className="flex items-center space-x-1">
          <img src={Call} alt="Call" width={12} height={12} />
          <span>07941050759</span>
        </span>
      </a>
      <a
        href="https://buytrucknbus.tatamotors.com/"
        className="cursor-pointer flex items-center px-4 bg-white text-black text-xs"
        style={{ height: "100%" }}
      >
        <span>Book Now</span>
      </a>
    </div>
  );
}
