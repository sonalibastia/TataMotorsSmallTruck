import React, { useState } from 'react'
import './Watchour.css'
import watchimg1 from '../assets/images/watchour0.jpeg';
import watchimg2 from '../assets/images/watchour1.jpeg';
import watchimg3 from '../assets/images/watchman.jpeg';
import watchimg4 from '../assets/images/watchour3.jpeg';
import watchimg5 from '../assets/images/watchour4.jpeg';
// import watchimg5 from './assets/';
// import watchimg6 from './assets/vedio6.jpg';
import watchimg7 from '../assets/images/watchour5.jpeg';
import watchimg8 from '../assets/images/watchour6.jpeg'
import watchimg9 from '../assets/images/watchour7.jpeg';
import watchimg10 from '../assets/images/watchour8.jpeg';
import watchimg11 from '../assets/images/watchour10.jpeg';
import watchimg12 from '../assets/images/watchour11.jpeg';
import watchimg13 from '../assets/images/watchour13.jpeg';
import watchimg14 from '../assets/images/watchour15.jpeg';
import watchimg15 from '../assets/images/watchour16.jpeg';
import watchimg16 from '../assets/images/watchour17.jpeg';
import watchimg17 from '../assets/images/watchour18.jpeg';
import watchimg18 from '../assets/images/watchour19.jpeg';
import watchimg19 from '../assets/images/watchour20.jpeg';
import watchimg20 from  '../assets/images/watchour21.jpeg';
import watchimg21 from '../assets/images/watchour22.jpeg';
import watchimg22 from '../assets/images/watchour12.jpeg';




function Watchour() {

    const images = [
        { img: watchimg4 ,link:"" },
        { img: watchimg8 },
        { img: watchimg7 },
          {  img: watchimg8 },
          {  img: watchimg9 },
          {  img: watchimg10 },
          {  img: watchimg11 },
          {  img: watchimg12 },
          {  img: watchimg13 },
          {  img: watchimg14 },
          {  img: watchimg15 },
          {  img: watchimg16 },
          {  img: watchimg17 },
          {  img: watchimg18 },
          {  img: watchimg19 },
          {  img: watchimg20 },
             {img:watchimg21},
             {img:watchimg22},
    ];
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };



    // const AutoCarousel=()=>{
    //     const [current,setCurrent]= useState(0);

    // }

    return (
        <>
            <div id='vedio'>
                <div id='vedio-box'>
                    <div id='contentdiv'><h1 style={{ color: "white",fontSize:"40px" }}>Watch Our Brand Videos</h1></div>
                    <div id='vedio-bottom'>
                        <div id='bottom-left'>
                            <img src={watchimg3} alt=""  style={{width:"500px"}}/>
                        </div>
                        <div id='bottom-mid'>
                            <img src={watchimg22} alt="" />
                            <img src={watchimg5} alt="" />
                            <button style={{ padding: "10px", width: "200px", backgroundColor: "transparent", color: "white", border: "2px solid white", outline: "none", }}>Watch More &gt;</button>
                        </div>
                        <div
                            id="bottom-right"
                            style={{
                                position: 'relative',
                                textAlign: 'center',
                                padding: '20px',
                                // backgroundColor: '#111',
                                // backgroundColor:'red',
                                color: 'white',
                                maxWidth: '400px',
                                top:'30px',
                                // margin: 'auto',
                                borderRadius: '10px',
                                gap:'10px'
                            }}
                        >
                            <h3 style={{ fontSize: '30px' }}>Testimonials</h3>

                            <img
                                src={images[index].img}
                                alt="testimonial"
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    objectFit: 'cover',
                                    // borderRadius: '10px',
                                    marginBottom: '5px'
                                }}
                            />

                            <div style={{
                                // backgroundColor:"orange"
                            }}>
                                <button
                                    onClick={prevSlide}
                                    style={{
                                        width: '50px',
                                        height: '45px',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        border: '2px solid white',
                                        // marginTop:'10px',
                                        position:'relative',
                                        right:'290px',
                                        top:'60px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    &lt;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    style={{
                                        width: '50px',
                                        height: '45px',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        border: '2px solid white',
                                        position:'relative',
                                        right:'280px',
                                        top:'60px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    &gt;
                                </button>
                            </div>

                            {/* Progress Line */}
                            <hr
                                style={{
                                    width: `${((index + 1) / images.length) * 100}%`,
                                    position: 'absolute',
                                    left: 0,
                                    top:470,
                                    height: '4px',
                                    backgroundColor: 'white',
                                    border: 'none',
                                    transition: 'width 0.5s ease'
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Watchour