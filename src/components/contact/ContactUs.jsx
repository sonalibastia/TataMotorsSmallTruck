import React from 'react'
import contactUs from "../../assets/images/contactUs.png"
import './ContactUs.css';
import SupportBanner from './SupportBanner';

import Keep from '../Keep';
import Models from '../models';
import Explore from '../explore';




function ContactUs() {
  return (
    <>
        <div  style={{
          backgroundColor:"black",height:"60px",width:"100%",fontSize:"13px"
        }}>
       <a href="/" style={{paddingLeft:"130px",}}>Home &gt;</a> Contact
    </div>

      <div id="contact_banner" style={{ backgroundImage: `url(${contactUs})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "60vh", width: "95%",marginLeft:"50px" }}>
        <h2>Contact Us</h2>
      </div>
     
      <SupportBanner/>
    
      
      <Explore />
      <Keep />
      <Models />
      
     
    </>
  )
}

export default ContactUs
