"use client";
import Image from "next/image";
import React, { useState } from "react";
import UrbanPaylogo from "../../public/img/UrbanPaylogo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center">
        <Link href="/">
          <motion.div
            className=""
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <Image
              src={UrbanPaylogo}
              className="w-[100px] md:w-[80px]"
              width={50}
              height={12}
              alt="UrbanPay Logo"
            />
          </motion.div>
        </Link>
        <span className="lg:text-lg  md:text-sm hidden md:block font-bold leading-6 text-gray-900">
          URBAN PAY
        </span>
      </div>
      <div className="border hidden md:block rounded-full bg-[#e2baf9] w-[400px] p-2">
        <ul className="flex justify-around">
          <Link href="/">
            <li
              className="text-black  hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium md:text-[15px] lg:text-[18px]"
              aria-label="Home"
            >
              Home
            </li>
          </Link>
          <Link href="/About">
            <li
              className="text-black  hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium md:text-[15px] lg:text-[18px]"
              aria-label="About"
            >
              About
            </li>
          </Link>
          <Link href="/ContactUs">
            <li
              className="text-black  hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium md:text-[15px] lg:text-[18px]"
              aria-label="Contact Us"
            >
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex  items-center space-x-4">
        <Link href="/">
          <motion.span
            className="lg:text-lg hidden md:block md:text-sm rounded font-bold py-2 px-4 text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "#e2baf9" }}
            whileTap={{ scale: 0.9 }}
          >
            Log in
          </motion.span>
        </Link>
        <Link href="/">
          <motion.button
            className="bg-purple-600 hidden md:block text-white font-bold py-2 md:px-2 lg:px-4 rounded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "#A020F0" }}
            whileTap={{ scale: 0.9 }}
          >
            Create Account
          </motion.button>
        </Link>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-[70%] border border-customPurple rounded-xl bg-white z-50 flex flex-col items-center justify-center"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center text-center">
              <button className="absolute top-10 right-4" onClick={toggleMenu}>
                <FaTimes className="w-8 h-7 text-black" />
              </button>
              <Link href="/">
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <Image
                    src={UrbanPaylogo}
                    className="w-[80px]"
                    width={50}
                    height={12}
                    alt="UrbanPay Logo"
                  />
                </motion.div>
              </Link>
            </div>
            <ul className="flex flex-col space-y-4 w-full ml-10 md:hidden">
              <li className="flex items-center gap-[20px]">
                <Link href="/" className="flex items-center w-full gap-[20px]">
                  {/* <Image
                    src={home}
                    className=""
                    width={50}
                    height={10}
                    alt="home"
                  /> */}
                  <span
                    className="text-black hover:text-customPurple cursor-pointer font-bold text-[25px] ml-5"
                    aria-label="Home"
                  >
                    Home
                  </span>
                </Link>
              </li>

              <li className="flex items-center space-x-3 gap-[20px]">
                <Link
                  href="/ContactUs"
                  className="flex items-center space-x-2 gap-[20px]"
                >
                  {/* <Image src={About} width={50} height={10} alt="About" /> */}
                  <span
                    className="text-black hover:text-customPurple  cursor-pointer font-bold text-[25px] ml-5"
                    aria-label="Contact Us"
                  >
                    Contact
                  </span>
                </Link>
              </li>
              <li className="flex items-center space-x-3 gap-[20px]">
                <Link
                  href="/About"
                  className="flex items-center space-x-2 gap-[20px]"
                >
                  {/* <Image src={Contact} width={50} height={10} alt="contact" /> */}
                  <span
                    className="text-black  hover:text-CustomPurple  cursor-pointer font-bold text-[25px] ml-5"
                    aria-label="About"
                  >
                    About
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex flex-col md:hidden items-center space-y-2 absolute bottom-4">
              <Link href="/">
                <motion.span
                  className="text-xl rounded font-bold py-2 px-4 text-gray-900"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e2baf9" }}
                  whileTap={{ scale: 0.9 }}
                >
                  Log in
                </motion.span>
              </Link>
              <Link href="/">
                <motion.button
                  className="bg-purple-600 text-white font-bold py-2 px-10 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#A020F0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  Create Account
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Page;
