import Header1 from "./common/header1"
import Header2 from "./common/header2"
import Navbar from "./common/navbar"
import Footer from "./common/footer"
import Banner from "./components/banner"
import Trucks from "./components/trucks"
import Driving from "./components/Driving"
import Better from "./components/Better"
import Updates from "./components/updates"
// import Enquiry from "./components/enquiry"
import Keep from "./components/Keep"
import Explore from "./components/explore"
import Models from "./components/models"
import SlidingCards from "./components/SlidingCards"
import GallerySection from "./components/GallerySection"

import Fleetedgeimg from "./components/Fleetedgeimg"
import Finddropdown from "./components/Finddropdown"
import EV from "./EV/EVMain"
import Watchour from "./components/Watchour"



export default function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Navbar />
      {/* <Banner />
      <Trucks />
      <Watchour/>
      <GallerySection/>
      <SlidingCards/>
      <Service/>
      <Fleetedgeimg/>
      <Finddropdown/>
      <Driving/>
      <Better/>
      <Updates />
      <Enquiry />
      <Keep/>
      <Explore />
      <Models /> */}
      <EV />
      <Footer />
    
    </div>
  );
}
