import evimg from '../assets/images/evbanner.jpeg'
import imgd from '../assets/images/Brand-card.png'
import blue from '../assets/images/card2-3.png'
import man from '../assets/images/discussion.png'
import test from '../assets/images/image-heavy.png'
import driveimg from '../assets/images/driveforsucess1.png';
import driveimg2 from '../assets/images/driveforsucess2.png';
import driveimg3 from '../assets/images/driveforsucess3.png';


const bannerData = [
    { type: "image", src: evimg },
];


const contentData = {
    tittle: "Tata ACE EV - Kaamiyaabi Ko Kare Charge",
    content: 'Introducing the Tata Ace EV, Indias first 4-wheel electric commercial vehicle that builds on the trusted legacy of Ace. With millions of entrepreneurs placing their trust in the Ace, we are proud to present its electric variant. The Tata Ace EV is perfect for last-mile delivery, providing efficient and reliable transportation while reducing carbon emissions. Powered by EvoGen, our cutting-edge electric technology, it offers a sustainable and cost-effective solution. Developed with a robust EV support ecosystem and charging infrastructure, the Tata Ace EV ensures hassle-free operation and peace of mind. Join the electric revolution and experience the future of commercial transportation with the Tata Ace EV.',
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
      

  const successData= [
              {
    image: driveimg,
    title: "Tata Intra EV",
    gwv: "3320 kg",
    fuel: "NA",
    engine: "NA",
    link: "#"
  },
  {
    image: driveimg2,
    title: "Tata Intra EV",
    gwv: "3320 kg",
    fuel: "NA",
    engine: "NA",
    link: "#"
  },
  {
    image: driveimg3,
    title: "Tata Intra EV",
    gwv: "3320 kg",
    fuel: "NA",
    engine: "NA",
    link: "#"
  } 

]
export { bannerData, contentData ,successData}

