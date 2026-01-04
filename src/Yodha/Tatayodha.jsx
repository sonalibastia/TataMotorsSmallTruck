import EVBanner from "../common/Sections/Banner";
import Content from "../common/Sections/content";
import Driveforsucess from "../common/Sections/Driveforsucess";
import Explore from "../components/explore";
import Keep from "../components/Keep";
import Models from "../components/models";
// import { Responsive } from "../TataAce/Responsive";

import { bannerData, contentData, successData, VehicleAccross } from "./TataYodhadata";

export default function Tatayodha() {
  return (
    <>
     <div style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> Tata Yodha
    </div>
      <EVBanner bannerData={bannerData} />
      <Content contentData={contentData} />
      {/* <Combineapplication vehsicles={vehicles} fuels={fuels} /> */}
      <img src={VehicleAccross.image} alt="Vehicle Accross" />
      <Driveforsucess successData={successData} />
      <Keep/>
      <Explore/>
      <Models/>
      {/* <Responsive /> */}
    </>
  );
}