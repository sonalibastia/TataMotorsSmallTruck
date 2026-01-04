import React from 'react'
import './Service.css'

function Service() {
  

  return (
    <>
      <div id='divten'>
        <div id='divten-top'>
          <h1 style={{fontFamily:"sans-serif",fontSize:"30px",color:"white"}}>Services that will help your business</h1>
          <p style={{width:"700px",fontSize:"15px",fontWeight:"lighter",textAlign:"center",color:"rgba(238, 240, 243, 0.93)"}}>Tata Motors offers a range of services keeping in mind the comfort and convenience of its customers. An end-to-end service which covers everything you need for a sustained life of your vehicle and business.</p>
        </div>
        <div id='divten-bottom'>
            <div className='divbox'>
              <h1>16K</h1>
              <b>Service points</b>
            </div>
            <div className='divbox'>
              <h1>90%</h1>
              <b>District covered</b>
            </div>
            <div className='divbox'>
              <h1 style={{}}>6.4 kms</h1>
              <b style={{textAlign:"center"}}>Average distance to  <br />the nearest <br /> workshop</b>
            </div>
            <div className='divbox'>
              <h1>38</h1>
              <b>Area service office</b>
            </div>
            <div className='divbox'>
              <h1>150+</h1>
              <b>Service engineers</b>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service
