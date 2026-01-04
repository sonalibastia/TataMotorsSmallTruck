import tataaceimg from '../assets/images/indrabanner.jpg'
import imgd from '../assets/images/indraslide1.png'
import blue from '../assets/images/indraslide2.png'
import man from '../assets/images/indraslide3.png'
import test from '../assets/images/indraslide4.png'
import remote from '../assets/images/indraslide5.png'
import car from '../assets/images/indraslide6.png'

import driveimg from '../assets/images/intradrive1.png';
import driveimg2 from '../assets/images/intradrive2.png';
import driveimg3 from '../assets/images/intradrive3.png';
import driveimg4 from '../assets/images/intradrive4.png';



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

import VehicleAcross from "../assets/images/4.png"





const bannerData = [
  { type: "image", src: tataaceimg },
];




const contentData = {
  tittle: "TATA INTRA Gold Series" ,
  content: "The Tata Intra Gold Pickup range is creating a new benchmark in the pickups segment with its Powerful Engine and Higher Load Carrying Capability. Equipped with a large and wide loading area which facilitates effortless loading and unloading of cargo, the Intra Gold series offers improved convenience to transporters. Suitable for long lead and high load applications, the versatile Tata Intra V20 Gold, V30 Gold, V50 Gold and V70 Gold variants provide better earnings, lower total cost of operation (TCO) and quicker ROI.  ",
  content2: 'Intra Gold pickups offer excellent suspension and superior Gradeability to easily travel across rough terrain, flyovers and ghats. The chassis frame is manufactured using a hydroforming process, and fewer welding joints ensure higher structural strength along with lower NVH levels, which significantly improve performance. Suitable for deployment in a variety of applications, Tata Intra V20 Gold, V30 Gold, V50 Gold and V70 Gold vehicles facilitates higher revenue, increased profits and high fuel efficiency in addition to complete peace of mind which comes from low maintenance cost.',
  content3: 'Intra Gold range offers the customers wide range of options in Engine power, torque, load body length and payloads. Intra V70 Gold is the most versatile offering, an ideal pickup for multiple applications. It comes with a large load body, 2000 kg payload capability and a powerful engine enabling fastest turnaround time in its segment, suiting both short and long hauls',
  slides: [
    {
      image: imgd,
      text: 'Better visibility'
    },
    {
      image: blue,
      text: 'Strong Chessis'
    },
    {
      image: man,
      text: 'Large and Wide Loading Area'
    },
    {
      image: test,
      text: 'Low total cost of Operation'
    },
    {
      image:remote,
      text:'Low NVH Level'
    },
    {
      image:car ,
      text:'Faster turnaround Time'
    }

  ]
}


const successData = [
  {
    image: driveimg,
    title: "Tata Intra V10",
    gwv: "2120 ",
    fuel: "35 L",
    engine: "798 cc",
    link: "#"
  },
  {
    image: driveimg2,
    title: "Tata Intra V20",
    gwv: "2265 ",
    fuel: "35/5 L CNG Cylin ...",
    engine: "1199 cc",
    link: "#"
  },
  {
    image: driveimg3,
    title: "Tata Intra V70 Gold",
    gwv: "3490 kg",
    fuel: "35 L ",
    engine: "1497 cc",
    link: "#"
  },
  {
    image: driveimg4,
    title: "Tata Intra V20 Gold",
    gwv: "2550 kg",
     fuel: "petrol Fuel Tank",
    engine: "1199 cc NGNA CNG Eng",
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