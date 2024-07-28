import Image from "next/image";
import React from "react";
import UrbanPaylogo from "../../assets/img/UrbanPaylogo.png";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center">
        <Image
          src={UrbanPaylogo}
          className=""
          width={42}
          height={42}
          alt="UrbanPay Logo"
        />
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
        <a
          href="#"
          className="text-lg rounded font-bold py-2 px-4 text-gray-900"
        >
          Log in
        </a>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Create Account
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
