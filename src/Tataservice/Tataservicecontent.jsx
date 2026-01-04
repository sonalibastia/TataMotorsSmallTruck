import React from "react";
import serviceimg1 from '../assets/images/imageservice1.png'
import serviceimg2 from '../assets/images/serviceimg1.png'
import serviceimg3 from '../assets/images/1.jpg'
import serviceimg4 from '../assets/images/2.jpg'
import serviceimg5 from '../assets/images/3.jpg'
import './Tataservicecontent.css'

function Tataservice() {
    return(
        <>
           <div id="tataservice">
             <div id="tatacontent">
             <div id="tatahead">
                <h1>Add-On Services for <br />
Your Trucks Purchase</h1>
             </div>
             <div id="tataimg">
                <div className="ser-img" style={{marginBottom:"100px"}} >
                    <img src={serviceimg1} alt="" />
                    
                </div>
                <div className="ser-img" >
                    <h1>Jankari hogi Tabhi toh tarakki hogi</h1>
                    <b>Get live updates on vehicle movement remotely on Fleet Edge</b>
                    <p>From impactful decision-making to future planning, everything needs relevant information provided in real-time. Tata Motors FleetEdge with its in-house, state-of-the-art connected platform technology, provides your business with every need in the way of building a stronger, data-driven, real-time business with a focus on providing better decision-making for greater success to your business.</p> <br />
                      <div id="spancontent">
                        <span style={{borderRight:"2px solid white"}}>
                        <h1>1.59L+</h1>
                        <p>Total Users</p>
                    </span>
                    <span style={{borderRight:"2px solid white"}}>
                        <h1>3.74L+</h1>
                        <p>Total Vehicles</p>
                    </span>
                    <span>
                        <h1>456M+</h1>
                        <p>Total Vehicles</p>
                    </span>
                      </div> <br />
                     <button>know more &gt;</button>
                </div>

                <div className="ser-img" style={{marginTop:"250px"}}>
                    <h1>About Suraksha Annual Maintenance Contract (AMC)</h1>
                    <b>About Fleet Management System (FMS)  </b>
                    <p>The AMC Service from Tata Motors Limited is known as Suraksha and it ensures that the customer can focus entirely on his core business while leaving work related to vehicle maintenance to the experts at Tata Motors</p> <br />
                    <p>Tata Motors offers an Annual Maintenance Contract (AMC) to commercial vehicle buyers, which provides maintenance and repair services to the customer at specified National Highways through the service outlets of its authorised dealers of Tata Authorised Service Stations (TASS).</p> <br />
                    <p>The AMC covers scheduled maintenance services at periodic intervals of kilometres for labour, parts, and consumables, as recommended by Tata Motors, at intervals indicated in the service schedule to the extent the customer is liable to pay under the Free Services scheme</p> <br />
                    <p>There are different types of AMC plans available for Tata vehicles, such as Silver, Gold, and P2P (Pay to Protect). The AMC is a maintenance plan that guarantees protection against unexpected repairs and provides substantial savings through scheduled maintenance services.</p> <br />
                    
                <button>know more &gt;</button> 
                   
                  
                </div> 
                <div className="ser-img" style={{marginBottom:"70px"}} >
                    <img src={serviceimg2} alt="" />
                   
                    
                </div>
                <div className="ser-img"  style={{marginTop:"370px"}}>
                  <img src={serviceimg3} alt="" />
                </div>
                <div  className="ser-img" style={{marginTop:"390px"}}>
                     <h1>Sampoorna Seva 2.0</h1>
                   <p>When you buy a Tata Motors Truck, you are buying not just a product, but a universe of services that includes everything from service, roadside assistance, insurance, loyalty and a whole lot more. You can now focus wholeheartedly on your business, and let SampoornaSeva take care of the rest. <br /> <br />

Sampoorna Seva 2.0 is all-new and enhanced. We have collected feedback from over 6.5 million customers who've visited our centres in the last year to create this continuously improving holistic service. <br /> <br />

You will benefit from the assistance of over 1500 Channel Partners covering 29 State Service Offices, 250+ Tata Motors Engineers, modern equipment & facilities and 24x7 Mobile Vans.</p> <br />
                <button>know more &gt;</button>
                   
                </div>
                <div  className="ser-img" style={{marginTop:"250px"}}>
                    <h1>TATA OK</h1> <br />
                    <p> TATA OK is the preferred choice when it comes to selling or buying pre-owned Tata Motors Commercial Vehicles. TATA OK provides the assurance of best market price and a host of conveniences like doorstep and free evaluation. We are involved in every stage of sourcing and buying, valuation, refurbishment and sale of refurbished vehicles to make sure you have smooth selling or buying experience.</p> <br />
                    
                   <button>know more &gt;</button>
                </div>
                <div  className="ser-img" style={{marginTop:"350px"}}>
                    <img src={serviceimg4} alt="" />
                </div>
                <div  className="ser-img" style={{marginTop:"300px"}}>
                      <img src={serviceimg5} alt="" />
                </div>
                <div  className="ser-img" style={{marginTop:"300px"}}>
                    <h1>TATA Guru</h1> <br />
                      <p>In 2008-09, there were a total of 6.9 million repair jobs for TATA commercial vehicles out of which only 2.7 million were serviced by TATA authorized dealers or service stations i.e. over 60% jobs not serviced by TATA Motors, but by private or unauthorized workshops. Also, there was no assurance of genuineness of parts used in these jobs for the customers - this would totally depend on the mechanic of the private workshop.</p> <br />  <br /> <br />
                      <button>know more &gt;</button>
                </div>
             </div>
        </div>
           </div>
        </>
    )
}
export default Tataservice




// import React from 'react';

// import serviceimg1 from '../assets/images/tataimg1.png'
// import serviceimg2 from '../assets/images/tataimg2.png'
// import serviceimg3 from '../assets/images/tataimg3.png'
// import serviceimg4 from '../assets/images/tataimg4.png'
// import serviceimg5 from '../assets/images/tataimg5.png'
// import './Tataservice.css'

// const services = [
//   {
//     image: serviceimg1,
//     heading: 'Jankari hogi Tabhi toh tarakki hogi',
//     description: 'Get live updates on vehicle movement remotely using Fleet Edge. You can monitor your vehicles’ health, fuel usage, driver behaviour, and even schedule services efficiently.',
//     stats: ['1.59L+ Truck Users', '3.74L+ Total Vehicles', '456M+ Data Records'],
//     buttonText: 'Know More'
//   },
//   {
//     image: serviceimg2,
//     heading: 'About Suraksha Annual Maintenance Contract (AMC)',
//     description: 'AMC ensures peace of mind through timely maintenance services and fixed costs. Choose AMC to extend vehicle life and boost uptime.',
//     buttonText: 'Know More'
//   },
//   {
//     image: serviceimg3,
//     heading: 'Sampoorna Seva 2.0',
//     description: 'A one-stop solution for service, warranty, breakdown, insurance and more. Tata Motors ensures a holistic ownership experience.',
//     buttonText: 'Know More'
//   },
//   {
//     image: serviceimg4,
//     heading: 'TATA OK',
//     description: 'TATA OK is the preferred choice when it comes to selling or buying pre-owned Tata Motors Commercial Vehicles. TATA OK provides the assurance of best market price and a host of conveniences like doorstep and free evaluation. We are involved in every stage of sourcing and buying, valuation, refurbishment and sale of refurbished vehicles to make sure you have smooth selling or buying experience.',
//     buttonText: 'Know More'
//   },
//   {
//     image: serviceimg5,
//     heading: 'TATA Guru',
//     description: 'In 2008-09, there were a total of 6.9 million repair jobs for TATA commercial vehicles out of which only 2.7 million were serviced by TATA authorized dealers or service stations i.e. over 60% jobs not serviced by TATA Motors, but by private or unauthorized workshops. Also, there was no assurance of genuineness of parts used in these jobs for the customers - this would totally depend on the mechanic of the private workshop',
//     buttonText: 'Know More'
//   }
// ];

// const Services = () => {
//   return (
//     <div className="services-container">
//       {services.map((service, index) => (
//         <div key={index} className="service-card">
//           <div className="service-text">
//             <h2>{service.heading}</h2>
//             <p>{service.description}</p>
//             {service.stats && (
//               <div className="stats">
//                 {service.stats.map((stat, i) => (
//                   <span key={i}>{stat}</span>
//                 ))}
//               </div>
//             )}
//             <button>{service.buttonText}</button>
//           </div>
//           <div className="service-img">
//             <img src={service.image} alt={service.heading} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tataservice;
