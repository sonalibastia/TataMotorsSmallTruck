import React from "react";
import './Betterbutton.css';


function Betterbutton() {
    return(
        <> 
        <div id="titlediv">
            <div id="textdiv">
                <h1 style={{
                    fontSize:"25px",color:"rgb(19, 132, 224)"
                }}>Read more about</h1>
                <a href="/better-always">
                    <button>Better Always</button>
                </a>
            </div>
        </div>
        </>
    )
}
export default Betterbutton