import tataaceimg from '../assets/images/yodhabanner.jpg'
import imgd from '../assets/images/yodhaslide1.png'
import blue from '../assets/images/yodhaslide2.jpg'
import man from '../assets/images/yodhaslide3.png'
import test from '../assets/images/yodhaslide4.png'
// import remote from '../assets/images/yodhaslide5.png'
// import car from '../assets/images/yodhaslide6.png'

import driveimg from '../assets/images/yodhadrive1.png';
import driveimg2 from '../assets/images/yodhadrive2.png';
import driveimg3 from '../assets/images/yodhadrive3.png';
import driveimg4 from '../assets/images/yodhadrive4.png';



import Fruit from "../assets/images/vegies.png"
import Rice from "../assets/images/rice.png"
import Screw from "../assets/images/screw.png"
import Logistic from "../assets/images/logistic.png"
import Potry from "../assets/images/potry.png"
import Fish from "../assets/images/fish.png"
import Fmcg from "../assets/images/fmcg.png"
import Milk from "../assets/images/milk.png"
import Frezz from "../assets/images/frezz.png"

import Petrol from "../assets/images/petrol.png"
// import Diesel from "../assets/images/diesel.png"
// import Cng from "../assets/images/cng1.png"
import Bifuel from "../assets/images/bifuel.png"
// import EV from "../assets/images/ev.png"

import VehicleAcross from "../assets/images/6.jpg"





const bannerData = [
  { type: "image", src: tataaceimg },
];




const contentData = {
  tittle: "Tata Yodha" ,
  content: 'The Tata Yodha pickup is built for those who stop for nothing on the path to success and fulfil their ambitions. Tata Yodha offers heavy duty performance and enhanced earning power through its unique features and highly fuel efficient engine. Tata Yodha pickup offers spacious cargo loading area and superior suspension for smooth rides that reduce fatigue for the driver and ensure longer, more trips. Tata Yodha is available in single cab and crew cabin variants with 4x2 and 4x4 drive options to suit every transport and business requirement. The Tata Yodha pickup delivers the promise of lower TCO (Total Cost of Ownership) and maximum profits in every trip. The Tata Yodha Pickup range is built to deliver superior safety for the occupants and goods it carries with a collapsible steering wheel that ensures maximum safety in case of a frontal collision. Anti-roll bars fitted in the front and a wider rear axle track adds to the stability, making it one of the sturdiest and most stylish pickups on the roads. ',
  content2: ' Yodha 2.0 : First in the category with the capability of carrying 2 Ton Payload, built to cater to heavy- bulky cargo from the farm to Mandis with off-roading capability.',
  
  slides: [
    {
      image: imgd,
      text: 'Superior safety'
    },
    {
      image: blue,
      text: 'Heavy duty payload'
    },
    {
      image: man,
      text: 'Low total cost of ownership'
    },
    {
      image: test,
      text: 'highly fuel efficient engine'
    }
    // {
    //   image:remote,
    //   text:'Low NVH Level'
    // },
    // {
    //   image:car ,
    //   text:'Faster turnaround Time'
    // }

  ]
}


const successData = [
  {
    image: driveimg,
    title: "Yodha CNG",
    gwv: "3490 kg ",
    fuel: "2 cylinders,90 ...",
    engine: "2956 cc",
    link: "#"
  },
  {
    image: driveimg2,
    title: "Tata Yodha 1700",
    gwv: "3490 ",
    fuel: "52 L polymer Tank",
    engine: "74.8 kW (100 HP) @3",
    link: "#"
  },
  {
    image: driveimg3,
    title: "Tata Yodha 2.0",
    gwv: "3890",
    fuel: "52 L polymer Tank ",
    engine: "74.8 kW(100 HP) @3",
    link: "#"
  },
  {
    image: driveimg4,
    title: "Tata Yodha 1200",
    gwv: "2950 ",
     fuel: "52 L polymer Tank",
    engine: "74.8 kW(100 HP) @3",
    link: "#"
  }


]

// Usage Types for Vehicles
const vehicles = [
  { label: "Fruits and Vegetables", image: Fruit },
  { label: "cereal", image: Rice },
  { label: "Construction", image: Screw },
  { label: "Logistics", image: Logistic },
  { label: "Poultry", image: Potry },
  { label: "Fisheries", image: Fish },
  { label: "FMCG", image: Fmcg },
  { label: "Milk", image: Milk },
  { label: "Refrigerated Vans", image: Frezz },
];

// Fuel Types
const fuels = [
  { label: "Petrol", image: Petrol },
  // { label: "Diesel", image: Diesel },
  // { label: "CNG", image: Cng },
  { label: "Bi-Fuel", image: Bifuel },
  // { label: "EV", image: EV },
];

const VehicleAccross = { image: VehicleAcross };


export { bannerData, contentData, successData, vehicles, fuels, VehicleAccross }