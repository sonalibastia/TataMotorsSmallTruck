import React from 'react'
import './Finddropdown.css'

function Finddropdown() {
    return(
        <>
        <div id='dropdown'>
            <div className="selector-container">
      <h2 style={{color:"#fff",fontSize:"30px",fontFamily:"sans-serif"}}>Find the Perfect Vehicle for Your Needs</h2>

      <div className="dropdown-group">
        <select id='application' defaultValue="Choose Application" style={{backgroundColor:"transparent",color:"white"}}>
          <option value="Choose Application" >Choose Application</option>
          <option value="Agricultural">Agricultural</option>
          <option value="Fruits and Vegetables">Fruits and Vegetables</option>
          <option value="Agri Products">Agri Products</option>
          <option value="Cereal">Cereal</option>
          <option value="Market Load">Market Load</option>
          <option value="Logistics">Logistics</option>
          <option value="Refrigerated Vans">Refrigerated Vans</option>
          <option value="Pharma">Pharma</option>
          <option value="Poultry">Poultry</option>
          <option value="Service Support Van">Service Support Van</option>
          <option value="Parcel & Courier">Parcel & Courier</option>
        </select>

        <select id='fuel' defaultValue="Choose Fuel Type" style={{backgroundColor:"transparent",color:"white"}}>
          <option value="Choose Fuel Type">Choose Fuel Type</option>
          <option value="CNG">CNG</option>
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
          <option value="CNG+Petrol">CNG+Petrol</option>
          <option value="Electric">Electric</option>
        </select>

        <select id='tonnage' defaultValue="Choose Tonnage" style={{backgroundColor:"transparent",color:"white"}}>
          <option value="Choose Tonnage">Choose Tonnage</option>
          <option value="11500 Kgs">11500 Kgs</option>
          <option value="11600 Kgs">11600 Kgs</option>
          <option value="11800 Kgs">11800 Kgs</option>
          <option value="20000 Kgs">20000 Kgs</option>
          <option value="21000 Kgs">21000 Kgs</option>
          <option value="22000 Kgs">22000 Kgs</option>
        </select>
      </div>
        <button className='findbutton'>
                    <a href="" >Find Now</a>
        </button>
      
    </div>
        </div>
        </>
    )
}
export default Finddropdown