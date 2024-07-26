import Image from "next/image";
import React from "react";
import UrbanPaylogo from "../../assets/img/UrbanPaylogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Image
              src={UrbanPaylogo}
              alt="UrbanPay Logo"
              width={70}
              height={70}
            />
            <h1 className="text-2xl font-bold">URBANPAY</h1>
          </div>
          <div className="flex flex-col space-y-5">
            <button className="h-10 rounded-full border-2 border-[#66A966]  shadow-lg text-slate-800 flex items-center justify-center px-3">
              {/* add svg */}
              <p>
                Get on <span className="font-medium">Google Play</span>
              </p>
            </button>
            <button className="h-10 rounded-full  border-2 shadow-lg border-[#7911BA] text-slate-800 flex items-center justify-center px-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 70 70"
                fillRule="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.7292 59.15C46.8708 61.9208 43.75 61.4833 40.7458 60.1708C37.5667 58.8292 34.65 58.7708 31.2958 60.1708C27.0958 61.9792 24.8792 61.4542 22.3708 59.15C8.13751 44.4792 10.2375 22.1375 26.3958 21.3208C30.3333 21.525 33.075 23.4792 35.3792 23.6542C38.8208 22.9542 42.1167 20.9417 45.7917 21.2042C50.1958 21.5542 53.5208 23.3042 55.7083 26.4542C46.6083 31.9083 48.7667 43.8958 57.1083 47.25C55.4458 51.625 53.2875 55.9708 49.7 59.1792L49.7292 59.15ZM35.0875 21.1458C34.65 14.6417 39.9292 9.275 45.9958 8.75C46.8417 16.275 39.1708 21.875 35.0875 21.1458Z"
                  fill="#222222"
                />
              </svg>
              <p>
                Get on <span className="font-medium">App Store</span>
              </p>
            </button>
          </div>
        </div>
        <div className="grid my-2 text-center space-y-4">
          <h2 href="#" className="font-bold display-5 text-2xl text-[#7217AA] ">
            Product
          </h2>
          <a href="#" className="">
            Transfer Money
          </a>
          <a href="#" className="">
            Transfer Pricing
          </a>
          <a href="#" className="">
            Virtual Cards
          </a>
          <a href="#" className="">
            Currency Exchange
          </a>
        </div>
        <div className="grid my-2 text-center space-y-4">
          <h2
            href="#"
            className=" font-bold display-5 text-2xl text-[#7217AA] "
          >
            Company
          </h2>
          <a href="#" className="">
            Contact
          </a>
          <a href="#" className="">
            Careers
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Blog
          </a>
        </div>
        <div className="grid my-2 text-center space-y-4">
          <h2
            href="#"
            className=" font-bold display-5 text-2xl text-[#7217AA] "
          >
            Connect
          </h2>
          <a href="#" className="">
            Twitter
          </a>
          <a href="#" className="">
            Instagram
          </a>
          <a href="#" className="">
            Linkedin
          </a>
          <a href="#" className="">
            Facebook
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        UrbanPay is a cutting-edge financial technology company dedicated to
        transforming the way people transact and manage their finances. We have
        an understanding of urban lifestyles and use that to provide seamless
        and secure payment experiences.{" "}
        <p className="mt-4">&copy; {currentYear} UrbanPay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
