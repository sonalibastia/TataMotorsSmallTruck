import tataaceimg from '../assets/images/ace-banner.jpg'
import imgd from '../assets/images/ace-slide1.jpg'
import blue from '../assets/images/ace-slide2.jpg'
import man from '../assets/images/discussion.png'
import test from '../assets/images/ace-slide3.jpg'

import driveimg from '../assets/images/Ace-Flex1.png';
import driveimg2 from '../assets/images/Ace-Flex2.png';
import driveimg3 from '../assets/images/Ace-Flex3.png';
import driveimg4 from '../assets/images/Ace-Flex4.png';



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
import Diesel from "../assets/images/diesel.png"
import Cng from "../assets/images/cng1.png"
import Bifuel from "../assets/images/bifuel.png"
import EV from "../assets/images/ev.png"

import VehicleAcross from "../assets/images/VehicleAcross.jpeg"
// import { dividerClasses } from '@mui/material'





const bannerData = [

  { type: "image", src: tataaceimg },
];




const contentData = {
  tittle: "TATA ACE",
  content: 'The trusted Tata Ace range has empowered 25 Lakhs + entrepreneurs while helping individuals achieve their success goals. One of India’s most desired Small Commercial Vehicles, the Tata Ace family offers variants across Diesel, Petrol, CNG, Bi-fuel (CNG + Petrol) & EV fuel options that suit different business needs. The Tata Ace family is specially designed to provide superior mileage, enhanced profits through increased productivity, and lower operational costs for more savings. Ensuring total peace of mind, the Tata Ace models offer a 2 year /72000 km warranty. Experience success with the power of Tata Ace.',
  slides: [
    {
      image: imgd,
      text: 'No. 1 for 19 years'
    },
    {
      image: blue,
      text: 'Low on maintenace cost'
    },
    {
      image: man,
      text: 'Low total cost of Wonership'
    },
    {
      image: test,
      text: 'Heavy duty payload'
    }
  ]
}


const successData = [
  {
    image: driveimg,
    title: "Tata Ace Flex Fuel",
    gwv: "1460 ",
    fuel: "10 L",
    engine: "694cc,2 cylinder,G...",
  },
  {
    image: driveimg2,
    title: "Tata Ace Gold CNG Plus",
    gwv: "1630 ",
    fuel: "105L(35L+35L  ...",
    engine: "2 cylinder 694cc",
  },
  {
    image: driveimg3,
    title: "Tata Ace HT+",
    gwv: "2120",
    fuel: "30 L ",
    engine: "798 cc",
  },
  {
    image: driveimg4,
    title: "Tata Ace Gold Diesel",
    gwv: "1835",
    fuel: "30 L",
    engine: "702 cc",
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
  { label: "Diesel", image: Diesel },
  { label: "CNG", image: Cng },
  { label: "Bi-Fuel", image: Bifuel },
  { label: "EV", image: EV },
];

const VehicleAccross = { image: VehicleAcross };


export { bannerData, contentData, successData, vehicles, fuels, VehicleAccross }