import React from 'react';
import Money from '../constants/Money';
import Transaction from '../constants/Transaction';
import TransportPrice from '..//constants/TransportPrice';
import Card from '../constants/Card';
import Phone from "../../assets/img/Phone.png";
import Image from 'next/image';
import { NavigationBar, Footer } from "../components/index";


const Hero = () => {
  return (
    <>
      <NavigationBar />
      <div className="my-40">
        <div className="flex text-center items-center justify-center">
          <div>
            <h1 className="text-black text-5xl font-extrabold">
              Don't <span className="text-customColor">Pester</span> about
              <br /> borders anymore
            </h1>
            <p className="text-sm text-slate-800 py-5 lg:text-3xl">
              Welcome to a borderless payment future where
              <br />
              simplicity and global connectivity are just a click away
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button className="h-10 rounded-full border-2 border-[#66A966]  shadow-lg text-slate-800 flex items-center justify-center px-3">
                {/* add svg */}
                <p>
                  Get on <span className="font-medium">Google Play</span>
                </p>
              </button>
              <button className="h-10 rounded-full  border-2 shadow-lg border-[#7911BA] text-slate-800 flex items-center justify-center px-3">
                <svg width="30" height="30" viewBox="0 0 70 70" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.7292 59.15C46.8708 61.9208 43.75 61.4833 40.7458 60.1708C37.5667 58.8292 34.65 58.7708 31.2958 60.1708C27.0958 61.9792 24.8792 61.4542 22.3708 59.15C8.13751 44.4792 10.2375 22.1375 26.3958 21.3208C30.3333 21.525 33.075 23.4792 35.3792 23.6542C38.8208 22.9542 42.1167 20.9417 45.7917 21.2042C50.1958 21.5542 53.5208 23.3042 55.7083 26.4542C46.6083 31.9083 48.7667 43.8958 57.1083 47.25C55.4458 51.625 53.2875 55.9708 49.7 59.1792L49.7292 59.15ZM35.0875 21.1458C34.65 14.6417 39.9292 9.275 45.9958 8.75C46.8417 16.275 39.1708 21.875 35.0875 21.1458Z" fill="#222222" />
                </svg>
                <p>
                  Get on <span className="font-medium">App Store</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Money />
      <Transaction />
      <TransportPrice />
      <div className="my-40 flex items-center justify-center">
        <div className="flex-1">
          <Image src={Phone} alt="Phone" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div>
            <h1 className="text-black text-4xl font-semibold capitalize">
              <span className="text-[#A020F0]">
                One <span className="uppercase">Card</span> + One WALLET =
              </span>{" "}
              Multiple Transaction$
            </h1>
            <p className="text-sm text-slate-800 py-3">
              Say goodbye to juggling wallets and effortlessly handle your
              currencies with ease on a single platform. Experience the freedom
              and flexibility.
            </p>
            <div className="flex-wrap space-x-4">
              <button className="h-10 rounded-md bg-customBg1 text-white px-3">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
