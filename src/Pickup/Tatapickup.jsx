
import EVBanner from "../common/Sections/Banner";
import Driveforsucess from "../common/Sections/Driveforsucess";
import Pickupcarry from "./Pickupcarry";
import Pickupcontent from "./Pickupcontent";
import Pickupready from "./Pickupready";
import {successData } from "./Tatapickupdata";
import { bannerData } from "./Tatapickupdata";
import Enquiry from "../components/enquiry";
import Pickupcollage from "./pickupcollage";

export default function Tatapickup() {
  return (
    <>
     <div style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> Tata pickkup
    </div>
      <EVBanner bannerData={bannerData} />
      <Pickupcontent/>
      <Pickupready/>
      <Driveforsucess successData={successData}/>
      <Pickupcollage/>
      <Pickupcarry/>
      <Enquiry/>
      
    </>
  );
}
