import React from "react";
import Image from "next/image";
import Phone from "../../assets/img/Phone.png";

const Transaction = () => {
  return (
    <main className="my-10 flex justify-around items-center">
      <div className="space-y-5">
        <h1 className="text-black text-4xl font-semibold">
          Get notified of{" "}
          <span className="text-red-600" style={{ color: "#F00010" }}>
            fake
            <br /> transactions
          </span>{" "}
          in
          <br /> seconds
        </h1>
        <p className="text-sm text-slate-800 py-5">
          We notify you when a fake transaction has been
          <br /> detected through our system&aposs continuous analysis.
        </p>
        <button
          className="h-10 rounded-md bg-red-600 text-white px-3"
          style={{ backgroundColor: "#EF0010" }}
        >
          Secure my transaction
        </button>
      </div>
      <div className="">
        <Image
          src={Phone}
          alt="Transaction Illustration"
          width={500}
          height={100}
        />
      </div>
    </main>
  );
};

export default Transaction;
