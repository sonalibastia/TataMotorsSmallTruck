import img1 from '../assets/images/ace.png'
import './Driving.css'

function Driving() {
  

  return (
    <>
      <div style={{height:"100vh"}}>
       <div id="container">
        <div className="spacer"></div>
        <div id='box1'></div>
        <div className="banner">
          <div className="text-section">
          <h1>Driving Towards a Greener Tomorrow with Tata Motors</h1>
          <p>At Tata Motors, innovation drives us. Our electric mini trucks and pickups are already transforming India’s transportation landscape, delivering cleaner, greener solutions to businesses. With a focus on sustainability, we’re expanding our range of alternate fuels – including electric and beyond – to create smarter, more efficient solutions for the future.</p>
          <a href="#" class="learn-more-btn">
            Learn More About ACE EV 
          </a>
          </div>
        
        <div className='image-section'>
          <img src={img1} alt="Tata EV Truck" class='truck-image' />
        </div>
        </div>
       </div>
        
      </div>
      
    </>
  )
}

export default Driving
