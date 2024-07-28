"use client";
import Image from "next/image";
import React from "react";
import UrbanPaylogo from "../../assets/img/UrbanPaylogo.png";
import Link from "next/link";
import { motion } from "framer-motion";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center">
        <motion.div
          className=""
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Image
            src={UrbanPaylogo}
            width={42}
            height={42}
            alt="UrbanPay Logo"
          />
        </motion.div>
        <span className="text-lg font-bold leading-6 text-gray-900">
          URBAN PAY
        </span>
      </div>
      <div className="border rounded-full bg-[#e2baf9] w-[400px] p-2">
        <ul className="flex justify-around">
          <li
            className="text-black hover:bg-customPurple hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium text-[18px]"
            aria-label="Home"
          >
            Home
          </li>
          <li
            className="text-black hover:bg-customPurple hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium text-[18px]"
            aria-label="About"
          >
            About
          </li>
          <li
            className="text-black hover:bg-customPurple hover:text-white hover:mx-1 hover:rounded-35px cursor-pointer font-medium text-[18px]"
            aria-label="Contact Us"
          >
            Contact Us
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/">
          <motion.span
            className="text-lg rounded font-bold py-2 px-4 text-gray-900"
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
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded"
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
    </nav>
  );
};

export default NavigationBar;
