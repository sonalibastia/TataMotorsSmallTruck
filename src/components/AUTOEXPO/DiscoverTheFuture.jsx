import React from 'react'
import './Discoverthefuture.css'
import discoverthefuture from "../../assets/images/descoverfuture.jpg"
export default function DiscoverTheFuture() {
  return (
    <>
      <div id='home' style={{backgroundImage:`url(${discoverthefuture})`,height:"90vh",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
           <span id='span'>
             <h1>Discover the Future of Mobility <br /> At Auto Expo 2025</h1>
            <p>Tata Motors Commercial Vehicles proudly showcases its groundbreaking range of Small Commercial Vehicles at Auto Expo 2025 — engineered to set new benchmarks in performance, safety, and efficiency with every innovation.</p>
           </span>
      </div>
    </>
  )
}
