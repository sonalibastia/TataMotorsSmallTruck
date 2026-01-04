import React from 'react'
import './AutoExpo.css'
import Autoexpo from "../../assets/images/desk.jpg"
import bharatmobility from "../../assets/images/bharatmobility.png"
import DiscoverTheFuture from './DiscoverTheFuture'
import IntroducingVehicle from './IntroducingVehicle'
import Highlites from './Highlites'
function AutoExpo() {
  return (
    <>
      <div id="main" style={{backgroundImage:`url(${Autoexpo})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
     <div id="subDiv">
      <img src={bharatmobility} alt=""  />
      <h1>AUTO EXPO 2025</h1>
     </div>
     </div>
     <DiscoverTheFuture/>
     <IntroducingVehicle/>
     <Highlites/>
     
    </>
  )
}

export default AutoExpo
