import tataaceimg from '../assets/images/pickupbanner.jpg'

import driveimg from '../assets/images/pickup-car1.png';
import driveimg2 from '../assets/images/pickup-car2.png';
import driveimg3 from '../assets/images/pickup-car3.png';
import driveimg4 from '../assets/images/pickup-car4.png';




const bannerData = [
  { type: "image", src: tataaceimg },
];

const successData = [
  {
    image: driveimg,
    title: "Yodha CNG",
    gwv: "3490kg ",
    fuel: "2 cylinder 90 ...",
    engine: "2956cc",
    link: "#"
  },
  {
    image: driveimg2,
    title: "Tata intra V10",
    gwv: "2120 ",
    fuel: "35 L",
    engine: " 798cc",
    link: "#"
  },
  {
    image: driveimg3,
    title: "Tata Yodha 1700",
    gwv: "3490",
    fuel: "52 L Polymer Tank",
    engine: "74.8kW(100 HP) @ 3...",
    link: "#"
  },
  {
    image: driveimg4,
    title: "Tata Yodha 2.0",
    gwv: "3890",
    fuel: "52 L Polymer Tank",
    engine: "74.8kW(100 HP) @ 3...",
    link: "#"
  }


]


export {bannerData,successData}