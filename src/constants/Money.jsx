import Image from "next/image";
import Phone from "../../assets/img/Phone.png";

const Money = () => {
  return (
    <main className="my-10 flex justify-between items-center">
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

      <div className="md:w-1/2">
        <h1 className="text-darktext-4xl font-semibold">
          It is <span className="text-[#43B671]">your money</span> spend it your
          way
        </h1>
        <p className="text-sm text-slate-800 py-5">
          At our platform, your money is sacred. We respect your funds and never
          interfere with your financial matters.
        </p>

        <button
          className="h-10 rounded-lg text-white px-3 bg-[#43B671]"
          style={{
            backgroundColor: "#43B671",
            border: "1px solid #43B671",
          }}
        >
          Download App
        </button>
      </div>
    </main>
  );
};

export default Money;
