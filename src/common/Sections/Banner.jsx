import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { bannerData } from "./evData";

export default function EVBanner({ bannerData }) {
  return (
    <div className="py-7 bg-black">
      <div className="relative w-full">
        {/* Left Blue Box */}
        <div className="absolute top-0 left-0 z-20">
          <div className="w-18 h-28 bg-blue-500" />
        </div>

        {/* Top Black Bar */}
        <div className="absolute top-8 left-12 z-30">
          <div className="w-6 h-20 bg-black" />
        </div>

        {/* Carousel */}
        <div className="relative z-0 pl-14 top-8">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <button
                  key={index}
                  aria-label={`Slide ${label}`}
                  onClick={onClickHandler}
                  className={`mx-2 w-4.5 h-4.5 rounded-full transition-all duration-300 cursor-pointer -top-10 ${isSelected
                      ? "bg-gray-200  border-2 border-gray-200"
                      : "bg-transparent border-2 border-gray-200"
                    }`}
                />
              );
            }}
          >
            {bannerData.map((item, index) => (
              <div key={index}>
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    width={1368}
                    height={'100%'}
                    className="w-full h-[550px] object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
} 
