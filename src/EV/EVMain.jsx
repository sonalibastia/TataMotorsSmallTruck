
import Driveforsucess from "../common/Sections/Driveforsucess";
import EVBanner from "../common/Sections/Banner";
import Evcontent from "../common/Sections/content";
import { bannerData, contentData, successData } from "./evData";
import Evfeatures from "./Evfeatures"
import KeyFeatures from "./Keyfeatures";
import Keep from "../components/Keep";
import Explore from "../components/explore";
import Models from "../components/models";




export default function EVMain() {
  return (
    <>
     <div style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> <a href="/tata-ace">Tata Ace &gt;</a> EV
    </div>
    <EVBanner bannerData={bannerData} />
    <Evcontent contentData={contentData} />
    <Evfeatures />
    <KeyFeatures/>
    <Driveforsucess successData={successData}/>
    <Keep/>
    <Explore />
    <Models />
    </>
  );
}