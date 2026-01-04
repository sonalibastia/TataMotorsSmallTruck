import React from 'react'
import './Fleetedgeimg.css'
import img1 from "../assets/images/fleetedge.png" 
import img2 from "../assets/images/sampoorna.png" 
import img3 from "../assets/images/suraksha.png" 
import img4 from "../assets/images/tatagenuine.png" 

function Fleetedgeimg() {
    return(
        <>
        <div id='image'>
            <div id='image-top'>
                <div className='imgbox'>
                    <img src={img1} alt="" style={{width:"250px",height:"150px",borderLeft:"25px solid white",borderRight:"25px solid white"}} />
                 <p style={{fontSize:"14px",fontWeight:"bold",width:"250px",paddingTop:"20px"}}>Get live updates on vehicle movement remotely on Fleet Edge</p>
            </div>
            <div className='imgbox'>
                <img src={img2} alt=""  style={{width:"250px",height:"150px"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold",width:"250px",paddingTop:"20px"}}>Remove or minimise the risks associated with vehicle maintenance.</p>
            </div>
            <div className='imgbox'>
                <img src={img3} alt=""  style={{width:"250px",height:"150px",border:"40px solid white"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold",width:"250px",paddingTop:"20px"}}>One-stop solution for all your spares needs.</p>
            </div>
            <div className='imgbox'>
                 <img src={img4} alt=""  style={{width:"250px",height:"150px"}}/>
                <p style={{fontSize:"14px",fontWeight:"bold",width:"250px",paddingTop:"5px"}}>Maintenance and repair services at specified National Highways through Service outlets.</p>
            </div>
            </div>

            <div id='image-bottom'>
                <button>
                    <a href="/tata-service" >Know More</a>
                </button>
            </div>
        </div>
        </>
    )
}

export default Fleetedgeimg