

import EVBanner from "../common/Sections/Banner";
import Content from "../common/Sections/content";
import Combineapplication from "./Combineapplication";
import Driveforsucess from "../common/Sections/Driveforsucess";
import { bannerData, successData } from "./tataAceData";
import { contentData, vehicles, fuels, VehicleAccross } from "./tataAceData";
// import { Grid } from "@mui/material";
import Explore from "../components/explore";
import Keep from "../components/Keep";
import Models from "../components/models";
// import { Responsive } from "./Responsive";


export default function TataAce() {
  return (
    <>
    <div style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> Tata Ace
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