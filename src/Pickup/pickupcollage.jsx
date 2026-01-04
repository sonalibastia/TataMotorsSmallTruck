import React from 'react'
import collageimg from "../assets/images/9.jpg"

function Pickupcollage() {
    return(
        <>
        <div id='collage' style={{
                backgroundImage: `url(${collageimg})`,height:"100vh",width:"100%",backgroundRepeat:"no-repeat", backgroundSize:"cover"
              }} >
            <h1 style={{textAlign:"center",fontSize:"35px",fontWeight:"bold",paddingTop:"70px"}}>Multiple Applications, Efficient Performance</h1>
            <p style={{textAlign:"center",fontSize:"15px",}}>Regardless of your transport needs, Tata Motors small commercial vehicles support diverse applications and help you succeed in last mile delivery Image</p>
        </div>
        </>
    )
}
export default Pickupcollage