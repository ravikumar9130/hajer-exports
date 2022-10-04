import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import products from "../content/productContent";

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    let per = width > 1280 ? 6 : width > 1024 ? 5 : width > 768 ? 3 : 1;
    console.log(per);
    setWindowWidth(per);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: "free-snap",
    slides: {
      perView: width || 2,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper bg-blue pt-8 pb-8 md:pb-16">
      <div className="w-[90%] mx-auto">
              <div className="text-center  text-primary  pb-6 text-4xl">Products</div>
        <div ref={sliderRef} className="keen-slider  ">
          {products.map((data, i) => (
            <div key={i} className="keen-slider__slide ">
              <div className="bg-white mx-6 lg:mx-4  text-black rounded shadow-md">
                <div className="flex flex-col  ">
                  <div className="relative  w-full  lg:mb-0">
                    <img
                      src={data.url}
                      alt={data.tittle}
                      className=" w-[90%] h-[200px] lg:h-[100px] lg:px-4 lg:w-[250px] mx-auto mt-4 md:h-[180px] rounded"
                    />
                  </div>
                  <div className="my-4">
                    <div className="flex items-center justify-between w-full min-w-0 ">
                      <div className="mx-4 text-lg md:text-md cursor-pointer hover:text-gray-900 ">
                        {data.tittle}
                      </div>
                    </div>
                    <div className="py-2 mt-2 px-3 mx-4 text-center text-sm font-bold rounded-lg bg-primary text-white">
                      Send Enquiry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              />
             
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow border opacity-60  fill-black bg-white rounded-full p-1 m-3  ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
