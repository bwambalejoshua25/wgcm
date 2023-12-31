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
  margin: 20,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 600,
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
      items: 3,
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
    <div className="gap-2">
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
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('tomatoes.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  GREEN HOUSE FARMING
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    We carry out farming to get food to cater for the orphans
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 2 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('children.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  CAPENTRY
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    We make beds, stools, chairs for the orphans to sit on and feel comfort
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 3 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('community.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  COMMUNITY WORK
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    We are extremely grateful to all our donors and partners
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 4 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('disabled11.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  FUNDRAISING
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    Make parties for the orphans, disabled and couselling
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* <Slider 5 /> */}
          <div className="relative w-full max-h-full h-80 md:h-[500px] ">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full "
              style={{ backgroundImage: `url('community.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  BE A CHANGEMAKER
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    We are extremely grateful to all our donors and partners
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
