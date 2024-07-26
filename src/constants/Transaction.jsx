import React from "react";
import Image from "next/image";
import Phone from "../../assets/img/Phone.png";

const Transaction = () => {
  return (
    <main className="my-10 flex justify-between items-center">
      <div className="">
        <h1 className="text-black text-4xl font-semibold">
          Get notified of{" "}
          <span className="text-red-600" style={{ color: "#F00010" }}>
            fake transactions
          </span>{" "}
          in seconds
        </h1>
        <p className="text-sm text-slate-800 py-5">
          We notify you when a fake transaction has been detected through our
          system's continuous analysis.
        </p>
        <button
          className="h-10 rounded-md bg-red-600 text-white px-3"
          style={{ backgroundColor: "#EF0010" }}
        >
          Secure my transaction
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={Phone}
          alt="Transaction Illustration"
          className="object-contain w-full h-full"
          layout="responsive"
          width={700} 
          height={700} 
        />
      </div>
    </main>
  );
};

export default Transaction;
