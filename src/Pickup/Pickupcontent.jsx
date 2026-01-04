

import React from 'react'
import contimg from '../assets/images/yodhacontent.png'
import "./Pickupcontent.css"

function Pickupcontent() {
    return (
        <>
            <div id="pickup-container">
                <div id="position"></div>
                <div id="border">
                <div id="item-1">
                    <h1>First OEM in <br />
                        the world with wide <br />
                        range of pickups</h1>
                    <p>Tata Motors has set a global benchmark by becoming the first OEM in the world to offer 7 different types of Pickups. The range, which includes Yodha 2.0, Yodha IFS, Crew cab, Intra V50, V30, V20 & V10, is designed to provide improved productivity for different profiles of customers and their specific needs. This range has been designed with deep understanding of requirements on usage cycle to enhance profitability and consistent performance under flexible loading, with suitability on both urban as well as rural landscapes.</p>
                </div>
                <div id="item2">
                <img src={contimg} alt="img loading" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Pickupcontent;




