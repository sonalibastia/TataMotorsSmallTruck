import SupportBanner from '../components/contact/SupportBanner';
import Explore from '../components/explore';
import Keep from '../components/Keep';
import Models from '../components/models';
import Tataservicebanner from './Tataservicebanner';
import Tataservicecontent from './Tataservicecontent'


export default function Tataservice() {
  return (
    <>
    <div style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> Service
    </div>
      <Tataservicebanner/>
      <Tataservicecontent/>
      <SupportBanner/>
      <Keep/>
      <Explore/>
      <Models/>
      
    </>
  );
}