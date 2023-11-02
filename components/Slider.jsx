import React, { useState, useEffect } from "react";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="relative w-full max-h-full h-80 md:h-[500px]">
      <div
        className="absolute bg-no-repeat bg-cover w-full h-full"
        style={{ backgroundImage: `url('samp.jpg')` }}
      />
      <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full max-h-full h-80 md:h-[500px]" />
      <div className="flex flex-col items-center justify-center absolute w-full h-full">
        <p className="absolute w-full h-full text-orange-600 hover:text-orange-800 mb-4  px-2 text-shadow font-semibold text-2xl text-center">
          BE A CHANGEMAKER
        </p>
      </div>
      <Link href="/">
        <h1 className="cursor-pointer absolute w-full h-full text-2xl md:text-4xl font-semibold p-3 md:p-4 text-gray-800 hover:text-gray-600">
          We are extremely grateful to all our donors and partners
        </h1>
        <p className="text-gray-500">
          who support and encourage us to transform the lives of Orphans in
          Uganda. WIGCM is always looking for new people to join our cause for
          orphans' empowerment and education. Together, we are building a
          vibrant movement of young orphans for their better tomorrow.
        </p>
      </Link>
    </div>
  );
};

export default Slider;
