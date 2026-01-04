
import Banner from "../../components/banner"
import Trucks from "../../components/trucks"
import Driving from "../../components/Driving"
import Better from "../../components/Better"
import Updates from "../../components/updates"
import Enquiry from "../../components/enquiry"
import Keep from "../../components/Keep"
import Explore from "../../components/explore"
import Models from "../../components/models"
import SlidingCards from "../../components/SlidingCards"
import GallerySection from "../../components/GallerySection"
import Service from "../../components/Service"
import Fleetedgeimg from "../../components/Fleetedgeimg"
import Finddropdown from "../../components/Finddropdown"
import Watchour from "../../components/Watchour"


export default function App() {
  return (
    <div>
      <Banner />
      <Trucks />
      <Watchour />
      <GallerySection />
      <SlidingCards />
      <Service />
      <Fleetedgeimg />
      <Finddropdown />
      <Driving />
      <Better />
      <Updates />
      <Enquiry />
      <Keep />
      <Explore />
      <Models />

    </div>
  );
}
