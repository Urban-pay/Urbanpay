import React from "react";
import Image from "next/image";
import Bus from "../../assets/img/Bus.png";

const TransportPricesSection = () => {
  return (
    <main className="my-10 flex flex-col items-center p-4 md:flex-row  md:justify-around">
      <div>
        <Image src={Bus} alt="Bus" width={500} height={100} />
      </div>

      <div className="space-y-5">
        <h1 className="text-black text-4xl font-semibold capitalize">
          Get real-time{" "}
          <span className="text-red-600" style={{ color: "#FF971D" }}>
            local
            <br />
          </span>{" "}
          transport prices in seconds
        </h1>
        <p className="text-sm text-slate-800 py-5">
          You can get real-time prices for both local and
          <br /> commercial vehicles. This will keep you abreast of
          <br /> up-to-date pricing and help you plan accordingly.
        </p>
        <button
          className="h-10 rounded-md bg-orange-600 text-white px-3"
          style={{ backgroundColor: "#FF971D" }}
        >
          View today&aposs transport price
        </button>
      </div>
    </main>
  );
};

export default TransportPricesSection;
