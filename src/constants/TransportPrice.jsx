import React from "react";
import Image from "next/image";
import Bus from "../../assets/img/Bus.png";

const TransportPricesSection = () => {
  return (
    <div className="my-30 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-black text-4xl font-semibold capitalize">
          Get real-time{" "}
          <span className="text-red-600" style={{ color: "#FF971D" }}>
            local
          </span>{" "}
          transport prices in seconds
        </h1>
        <p className="text-sm text-slate-800 py-5">
          You can get real-time prices for both local and commercial vehicles.
          This will keep you abreast of up-to-date pricing and help you plan
          accordingly.
        </p>
        <div>
          <Image src={Bus} alt="Bus" width={140} height={140} />
        </div>

        <button
          className="h-10 rounded-md bg-orange-600 text-white px-3"
          style={{ backgroundColor: "#FF971D" }}
        >
          View today&aposs transport price
        </button>
      </div>
    </div>
  );
};

export default TransportPricesSection;
