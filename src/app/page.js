"use client"
import React from 'react';
import { Money, Transaction, TransportPrice, Faqs } from '../constants/index';
import wallet from "../../public/img/wallet.png";
import Image from 'next/image';
import { NavigationBar, Footer, Button } from "../components/index";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import playstore from '../../public/img/playstore.png'



const Hero = () => {
  return (
    <>
      <NavigationBar />
      <div className="my-20 md:my-40">
        <div className="flex text-center items-center justify-center">
          <div>
            <h1 className="text-black space-y-2 tracking-wide text-5xl md:text-7xl font-extrabold">
              There is no need to{'  '}
              <TypeAnimation
                sequence={[
                  'Worry',
                  1000,
                  'Pester',
                  1000,
                  'Bother',
                  1000,
                ]}
                wrapper="span"
                speed={15}
                className='inline-block text-customPurple'
                repeat={Infinity}
              /> <br />about borders anymore
            </h1>
            <p className='font-medium text-xl my-4 md:p-4'>Welcome to a borderless payment future where simplicity and global connectivity are just a click away </p>

            <div className="flex flex-col space-y-3 md:flex-row  justify-center items-center md:space-x-4 mt-5">
              <button className="h-10 border-2 border-[#66A966] shadow-lg text-slate-800 flex items-center justify-center px-3 py-8">
                <Image src={playstore} width={40} height={40} alt='playstore' />
                <p className='ml-3'>
                  Get on <b className="font-bold">Google Play</b>
                </p>
              </button>
              <button className="h-10  border-2 shadow-lg border-[#7911BA] text-slate-800 flex items-center justify-center px-3 py-8">
                <svg width="40" height="40" viewBox="0 0 70 70" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.7292 59.15C46.8708 61.9208 43.75 61.4833 40.7458 60.1708C37.5667 58.8292 34.65 58.7708 31.2958 60.1708C27.0958 61.9792 24.8792 61.4542 22.3708 59.15C8.13751 44.4792 10.2375 22.1375 26.3958 21.3208C30.3333 21.525 33.075 23.4792 35.3792 23.6542C38.8208 22.9542 42.1167 20.9417 45.7917 21.2042C50.1958 21.5542 53.5208 23.3042 55.7083 26.4542C46.6083 31.9083 48.7667 43.8958 57.1083 47.25C55.4458 51.625 53.2875 55.9708 49.7 59.1792L49.7292 59.15ZM35.0875 21.1458C34.65 14.6417 39.9292 9.275 45.9958 8.75C46.8417 16.275 39.1708 21.875 35.0875 21.1458Z" fill="#222222" />
                </svg>
                <p className='ml-3'>
                  Get on <b className="font-bold">App Store</b>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Money />
      <Transaction />
      <TransportPrice />
      <main className="my-10 flex flex-col items-center p-4 md:flex-row  md:justify-around">
        <div className="flex flex-col p-4 space-y-3">
          <h1 className="text-black text-4xl md:text-5xl font-semibold capitalize">
            <span className="text-[#A020F0]">
              1 <span className="uppercase">Card</span> + 1 WALLET = <br />
            </span>{" "}
            Multiple Transaction$
          </h1>
          <p className="text-md text-slate-800 py-3">
            Say goodbye to juggling wallets and effortlessly<br /> handle your
            currencies with ease on a single<br /> platform. Experience the freedom
            and flexibility.
          </p>
          <div className="flex-wrap space-x-4">
            <Button text='Get Started' style={{ backgroundColor: '#A020F0' }} />
          </div>
        </div>
        <div className="">
          <Image src={wallet} alt="wallet" width={500}
            height={100} />
        </div>
      </main>
      <Faqs />
      <Footer />
    </>
  );
};

export default Hero;
