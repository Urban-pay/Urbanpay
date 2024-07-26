import Image from "next/image";
import React from "react";
import UrbanPaylogo from "../../assets/img/UrbanPaylogo.png";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-3">
        <Image src={UrbanPaylogo} className="w-14 h-14" alt="UrbanPay Logo" />
        <span className="text-lg font-bold leading-6 text-gray-900">
          URBAN PAY
        </span>
      </div>
      <div className="border rounded-full bg-[#e2baf9]">
        <ul className="flex space-x-4 px-11 p-3">
          <li className="text-white font-medium text-[18px]">Home</li>
          <li className="text-white font-medium text-[18px]">About</li>
          <li className="text-white font-medium text-[18px]">Contact Us</li>
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
