import React from "react";
import Phone from "../../assets/img/Phone.png";
import Image from "next/image";

const Card = () => {
  return (
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
  );
};

export default Card;
