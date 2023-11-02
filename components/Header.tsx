import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex top-0 relative items-center w-full">
      <nav className="bg-gray-200 w-screen p-2">
        <div className="md:justify-center mx-auto md:px-0">
          <div className="flex items-center justify-between md:justify-center h-24">
            <div className="flex items-center justify-between w-11/12 ">
              <div className="cursor-pointer font-semibold text-4xl flex-shrink-0 flex items-center align-middle ">
                <Link href="/">
                  <img
                    src="/logo.jpg"
                    alt="walkingracechildministries"
                    className="block w-14 h-14"
                  />
                </Link>
                <div className="md:text-3xl text-2xl font-semibold pl-2 hover:text-pink-600 text-green-800 font-serif ">
                  <h1>
                    WALK IN GRACE
                    <br />
                  </h1>
                  <h1>CHILD MINISTRY</h1>
                </div>
              </div>
              <div className="flex items-center text-xl md:text-lg lg:text-xl ">
                <div className="hidden lg:float-left lg:contents ">
                  <Link href="/">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      HOME
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      WHAT WE DO
                    </span>
                  </Link>

                  <Link href="/">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      WHO WE ARE
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      GET INVOLVED
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      BLOG
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      EXPLORE
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-black hover:text-white block px-3 py-2 font-semibold cursor-pointer border-2 border-soil hover:bg-pink-600">
                      CONTACT US
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center font-semibold cursor-pointer rounded-md text-gray-400 hover:text-pink-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    HOME
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="/">
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    WHAT WE DO
                  </span>
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} href="/">
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    WHO WE ARE
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="#">
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    GET INVOLVED
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="#">
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    BLOG
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="#">
                  <span className="text-black hover:text-pink-600 block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    EXPLORE
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="#">
                  <span className="text-black hover:text-white block px-3 py-2 font-semibold cursor-pointer border-2 border-soil hover:bg-pink-600">
                    CONTACT US
                  </span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
