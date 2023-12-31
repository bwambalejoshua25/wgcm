import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-black pt-10 lg:px-32 px-10 text-white">
      {/* div 1 */}
      <div className="flex flex-col lg:flex-row lg:justify-between mb-8 items-center">
        <div>
          <p className="text-base font-light italic">
            Walk in Grace Child Ministry Uganda Ltd ( WGCM ) is a registered
            non-governmental organization (NGO) with the Uganda NGO Board
            operating primarily in western Uganda and working towards empowering
            the disabled and orphans to be self-reliant through vocational
            skills training.
          </p>
          <h1 className="text-2xl">KEEP UP WITH WIGCM</h1>

          <div className="py-4">
            <form className="gap-4 grid lg:flex ">
              <input
                placeholder="Name"
                type="text"
                className="p-1 text-black text-base border-none active:bg-pink-600"
              />
              <input
                placeholder="Email Address"
                type="text"
                className=" p-1 text-black text-base border-none active:bg-pink-600"
              />
              <button className=" bg-blue-400 rounded-full py-2 lg:py-0 px-4 hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="button ">
          <Link href="#">
            <button className="border-white border-2 p-3 hover:bg-green-600 rounded-full lg:rounded-none">
              DONATE TODAY
            </button>
          </Link>
        </div>
      </div>

      {/* div 2 */}

      <div className="text-center">
        <div>
          <h1 className="text-lg font-medium">
            Walk In Grace Child Ministries
          </h1>
          <p>
            Uganda Address: P.O. Box 250, Nyamugasani Cell, Kisinga Town
            Council,
          </p>
          <p>Bukonzo East, Kasese district, Uganda</p>

          <Link href="walkingracechildministry@gmail.com">
            <p>walkingracechildministry@gmail.com</p>
          </Link>
        </div>
      </div>

      {/* div 3 */}

      <div className="flex lg:flex-row flex-col justify-between py-5 items-center">
        <div className="flex gap-2">
          <ul className="nav-items">
            <p className="flex text-2xl gap-1 md:gap-4 text-white p-2">
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
        <div className="mt-2 lg:mt-0">
          <p>©2019 - 2023: WGCM-Uganda, All Rights Reserved.</p>
        </div>
        <div className="mt-2 lg:mt-0">
          <p>Created by Bwambale Joshua</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
