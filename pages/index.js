import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import Slider from "../components/Slider";
import Board from "../components/Board";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
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
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const Home = () => (
  <div className="">
    <Head>
      <title>Walk in Grace Child Ministry - Uganda</title>
      <meta
        name="keywords"
        content="Walk in Grace Child Ministry - Uganda, Mobilizing resources to address challenges facing orphans and enable them realize their full potential through promoting programs on education, healthcare, recreational skills, social security and moral support"
      />
      <meta
        name="description"
        content="Mobilizing resources to address challenges facing orphans and enable them realize their full potential through promoting programs on education, healthcare, recreational skills, social security and moral support"
      />
      <meta
        property="og:title"
        content="Walk in Grace Child Ministry - Uganda"
      />
      <link rel="icon" href="/logo.jpg" />
    </Head>
    <div className="gap-2">
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          autoPlay={true}
          nav={true}
          navText={false}
          dots={true}
          animateIn={true}
          {...options}
        >
          {/* <Slider /> */}
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

          {/* Slide 2 */}

          <div className="relative w-full max-h-full h-80 md:h-[500px]">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full"
              style={{ backgroundImage: `url('orphans.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  NO ONE HAS EVER BEEN POOR
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className=" text-gray-200 px-2 mb-1">
                    Mobilizing resources to address challenges facing orphans
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Slide 2 */}

          <div className="relative w-full max-h-full h-80 md:h-[500px]">
            <div
              className="absolute bg-no-repeat bg-cover w-full h-full"
              style={{ backgroundImage: `url('tomatoes.jpg')` }}
            />
            <div className="absolute  bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
            <Link href="/">
              <div className="flex flex-col left-0 bottom-0 absolute bg-slate-800 bg-opacity-70">
                <p className="text-orange-600 hover:text-orange-800  px-2 text-shadow font-semibold text-2xl">
                  FUNDRAISE FOR ORPHANS
                </p>
                <div className="bg-slate-800 bg-opacity-50">
                  <p className="px-2 mb-1 text-gray-200">
                    Want to join our efforts but not sure where to start? Let's
                    work.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>

      {/* Welcome */}

      <div className="flex flex-col items-center justify-center px-5 lg:px-36 bg-orange-100 mt-4">
        <img
          src="logo.jpg"
          alt="walk in grace child ministries"
          className="w-10 h-10"
        />
        <h1 className="text-3xl font-bold text-green-800">welcome to</h1>
        <h1 className="text-4xl lg:text-6xl text-green-800 font-semibold text-center">
          WALK IN GRACE CHILD MINISTRY
        </h1>
        <h1 className="text-4xl lg:text-6xl text-green-700 font-semibold text-center">
          UGANDA
        </h1>
        <p className="pt-5 lg:px-28 text-2xl text-center  ">
          A non-governmental organization committed to improving the lives of
          Orphans and the Disabled
        </p>
        <p className="py-4 lg:px-28 text-lg text-center">
          Empowering rural communities in fighting Poverty, Disease and
          Defending the Rights of Young People through Information Accessibility
          and Training Services.
        </p>
      </div>

      {/* Activities */}
      <Link href="/">
        <h1 className="text-5xl text-center border-b-2 p-1 text-blue-400 underline cursor-pointer hover:text-ellipsis hover:text-green-700">
          WHAT WE DO
        </h1>
      </Link>
      <div className="lg:flex lg:justify-between lg:px-20 py-4">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          {" "}
          <img
            src="orphans.jpg"
            alt="walk in grace child ministry"
            className="w-80 mb-4"
          />
          <Link href="#" target="blank">
            <button className="bg-pink-500 text-2xl p-1 rounded-lg w-72 hover:text-black  text-white font-bold">
              Adressing challenges Facing Orphans
            </button>
          </Link>
          <p className="py-2 text-lg text-center w-80">
            Mobilizing resources to address challenges facing orphans and enable
            them realize their full potential through promoting programs on
            education, healthcare, recreational skills, social security and
            moral support
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          {" "}
          <img
            src="children.jpg"
            alt="walk in grace child ministry"
            className="w-80 mb-4"
          />
          <Link href="#" target="blank">
            <button className="bg-pink-500 text-2xl p-1 rounded-lg w-72 hover:text-black  text-white font-bold">
              Empowering Women and Girls
            </button>
          </Link>
          <p className="py-2 text-lg text-center w-80">
            Our projects primarily focus on creating sustainable financial
            independence for women, which we believe in the long run will reduce
            harassment and domestic violence toward women and girls and increase
            gender equality.
          </p>
        </div>

        <div className="flex flex-col items-center mb-8 lg:mb-0">
          {" "}
          <img
            src="disabled11.jpg"
            alt="walk in grace child ministry"
            className="w-80 h-80 mb-4"
          />
          <Link href="#" target="blank">
            <button className="bg-pink-500 text-2xl p-1 rounded-lg w-72 hover:text-black  text-white font-bold">
              Creating and Generating Opportunities for Orphans
            </button>
          </Link>
          <p className="py-2 text-lg text-center w-80">
            Be part of the millions of people around the globe that care for the
            environment. Get the three in One ACEone cook stove at Walk Ingrace
            Child Ministries Uganda for clean and smart Cooking. The stoves and
            briquets are all available at our offices. Short distance deliveries
            are offered.
          </p>
        </div>
      </div>

      {/* Services */}

      <div className="flex flex-col items-center">
        <h1 className="p-4 text-4xl font-semibold cursor-pointer text-blue-600 hover:text-green-600 underline">
          Services
        </h1>
        <ul className="text-xl border-solid w-80 rounded-2xl text-center ">
          <li className="flex flex-col text-green-600 p-2 gap-3 font-semi-bold">
            <a
              className=" hover:text-white  hover:bg-green-600 hover:p-1 hover:rounded-sm hover:text-2xl"
              href="#"
            >
              Vocational Skills Training
            </a>
            <a
              className=" hover:text-white hover:bg-green-600 hover:p-1 hover:rounded-sm hover:text-2xl"
              href="#"
            >
              Creating and Generating Opportunities for Women
            </a>
            <a
              className=" hover:text-white hover:bg-green-600 hover:p-1 hover:rounded-sm hover:text-2xl"
              href="#"
            >
              Career Guidance
            </a>
            <a
              className=" hover:text-white hover:bg-green-600 hover:p-1 hover:rounded-sm hover:text-2xl"
              href="#"
            >
              Disease Control and Awareness
            </a>
          </li>
        </ul>
      </div>

      {/* Projects */}

      <div className="flex flex-col items-center justify-center px-5 lg:px-36 bg-orange-100 py-4">
        <img
          src="logo.jpg"
          alt="walk in grace child ministries"
          className="w-10 h-10"
        />
        <h1 className="text-4xl text-green-600 font-bold text-center">
          OUR CURRENT PROJECTS
        </h1>
        <h1 className="text-2xl lg:text-3xl ">Here are our Current Projects</h1>
      </div>
      <div>
        <Slider />
      </div>

      <div className="flex flex-col items-center justify-center px-5 lg:px-36 bg-orange-100">
        <img
          src="logo.jpg"
          alt="walk in grace child ministries"
          className="w-10 h-10"
        />
        <h1 className="text-4xl text-green-600 font-bold text-center">
          THE GOVERNING BOARD
        </h1>
        <p className="py-5 px-5 lg:px-28 text-lg text-center">
          With vast experience and knowledge in working with the local
          community, this is our team of board members that oversees and
          monitors all organization programmes. Dedicated and committed to their
          work and enabling a friendly environment for staff, trainees and
          community.
        </p>
      </div>

      <div>
        <Board />
      </div>

      {/* follow */}

      <div className="flex flex-col items-center justify-center px-10 lg:px-36  bg-orange-100">
        <img
          src="logo.jpg"
          alt="walk in grace child ministries"
          className="w-10 h-10"
        />
        <h1 className="text-6xl font-bold">FOLLOW</h1>
        <h1 className="text-4xl lg:text-6xl ">OUR MOVEMENT</h1>
        <p className="pt-5 px-5 lg:px-28 text-lg text-center">
          We love engaging with our community of Orphan advocates! Join us on
          our social media channels and follow our work and conversations.
          Invite your friends to like our pages and raise awareness of the
          positive change everyone at WIGCM is creating.
        </p>
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex gap-2">
            <ul className="nav-items">
              <p className="flex text-2xl gap-1 md:gap-4 text-black p-2">
                <Link href="/">
                  <AiFillInstagram className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
                </Link>
                <Link href="/">
                  <AiOutlineTwitter className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
                </Link>
                <Link href="/">
                  <AiOutlineFacebook className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
                </Link>
                <Link href="/">
                  <AiOutlineWhatsApp className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
                </Link>
                <Link href="/">
                  <AiOutlineYoutube className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
                </Link>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
