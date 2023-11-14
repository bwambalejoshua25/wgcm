import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 400,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const Slider = () => (
  <div className="">
    <div className="gap-1">
      <div>
        <OwlCarousel
          className="owl-theme px-2"
          loop
          autoPlay={true}
          nav={true}
          navText={false}
          dots={true}
          animateIn={true}
          {...options}
        >
          {/* <Slider 1 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px]">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('ceo.jpg')` }}
            />
            <div className="absolute bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 text-center bottom-0 absolute bg-slate-800 bg-opacity-70 w-full">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  MUMBERE BREAN
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">CHAIRPERSON BOARD</p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 2 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('ceo.jpg')` }}
            />
            <div className="absolute bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col text-center left-0 bottom-0 absolute bg-slate-800 bg-opacity-70 w-full">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  BIIRA MATIAS
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    VICE CHAIRPERSON BOARD
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 3 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('ceo.jpg')` }}
            />
            <div className="absolute bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col text-center left-0 bottom-0 absolute bg-slate-800 bg-opacity-70 w-full">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  BWAMBALE JOSHUA
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">BOARD TREASURER</p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 4 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('ceo.jpg')` }}
            />
            <div className="absolute bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col text-center left-0 bottom-0 absolute bg-slate-800 bg-opacity-70 w-full">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  BALUKU ASIMWE GERSHOM
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">BOARD SECRETARY</p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 5 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('ceo.jpg')` }}
            />
            <div className="absolute bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 text-center bottom-0 absolute bg-slate-800 bg-opacity-70 w-full">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  MUHINDO FORTUNATE
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    REPRESENTATIVE FORMER TRAINEES
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
);

export default Slider;
