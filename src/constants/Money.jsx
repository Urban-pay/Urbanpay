import Image from "next/image";
import cartoon from "../../assets/img/cartoon.png";
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

      <div className="md:w-1/2 space-y-5">
        <h1 className="text-4xl font-semibold lg:text-5xl">
          It is <b className="text-green-400">your money</b>
          <br /> spend it your way
        </h1>
        <p className="text-sm text-slate-800 py-5">
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
