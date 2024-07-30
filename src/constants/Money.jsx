import Image from "next/image";
import cartoon from "../../public/img/cartoon.png";
import Button from "../components/Button";

const Money = () => {
  return (
    <main className="my-10 flex flex-col items-center p-4 md:flex-row  md:justify-around">
      <div className="">
        <Image
          src={cartoon}
          alt="cartoon Illustration"
          width={500}
          height={100}
        />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-semibold md:text-5xl">
          It is <span className="text-[#43B671]">your money</span>,
          <br />
          spend it your way
        </h1>
        <p className="text-md text-slate-800 py-3">
          At our platform, your money is sacred. We respect
          <br /> your funds and never interfere with your
          <br /> financial matters.
        </p>
        <Button text="Download App" style={{ backgroundColor: "#43B671" }} />
      </div>
    </main>
  );
};

export default Money;
