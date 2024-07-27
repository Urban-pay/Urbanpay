import React from "react";
import display from "../../../../../assets/img/dashoard/display.jpg";
import Image from "next/image";
import BackBtn from "../../../../components/BackBtn";

const Page = () => {
  return (
    <div className=" flex items-center justify-center h-screen text-center">
      <div className="p-3 h-full w-96">
        <div>
          <div className="flex justify-start pt-12">
            <div className="flex items-start justify-start mt-3 text-start">
              <BackBtn />
            </div>
            <div className="flex items-center justify-center w-full text-center">
              <h1 className="w-full my-2 text-2xl font-bold">Verification</h1>
            </div>
          </div>
          <div className="justify-center align-center text-center mb-6 pt-6">
            <div className="flex items-center justify-center mr-10">
              <Image src={display} alt="Display" />
            </div>
            <div>
              <h1 className="w-full my-2 font-light text-xl">Stanley Drey</h1>
              <div className="justify-center align-center text-center w-full">
                <p className="px-1 text-sm text-gray-400">
                  preciousojeh@urbanpay.com
                </p>
                <span className="px-1 text-sm rounded-md bg-custom-color text-custom-text">
                  Tier 0
                </span>
              </div>
            </div>
          </div>

          <div className="my-3">
            <a
              href="/Dashboard/Settings/Verification/Verification1"
              className="text-decoration-none"
            >
              <div className="flex p-3 space-x-2 rounded-lg bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <rect width="54" height="54" rx="8" fill="#F6FFF5" />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="53"
                    height="53"
                    rx="7.5"
                    stroke="#00FF66"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M30.9021 33.2456L31.0754 36.7612L27.5194 34.29L23.9434 36.7636L24.1169 33.2456H22.6151L22.3562 38.4956H24.0762L27.5174 36.1153L30.9427 38.4956H32.6628L32.4039 33.2456H30.9021ZM34.9818 22.5072L34.879 20.2547L32.9798 19.0394L31.7643 17.14L29.5117 17.0369L27.5095 16L25.5073 17.0372L23.2547 17.1403L22.0392 19.0394L20.14 20.2547L20.0372 22.5072L19 24.5095L20.0372 26.5117L20.1403 28.7642L22.0392 29.9795L23.2546 31.8789L25.5071 31.9818L27.5095 33.019L29.5117 31.9818L31.7643 31.8789L32.9796 29.9795L34.8789 28.7644L34.9818 26.5119L36.019 24.5096L34.9818 22.5072ZM33.4984 26.1142L33.4158 27.9196L31.8935 28.8936L30.9194 30.4159L29.114 30.4984L27.5095 31.3296L25.9048 30.4984L24.0994 30.4159L23.1253 28.8936L21.6033 27.9196L21.5208 26.1142L20.6892 24.5095L21.5206 22.905L21.6033 21.0994L23.1253 20.1253L24.0994 18.6031L25.9048 18.5206L27.5095 17.6893L29.1142 18.5206L30.9196 18.6031L31.8937 20.1253L33.4158 21.0994L33.4982 22.9048L34.3298 24.5095L33.4984 26.1142Z"
                    fill="#00FF66"
                  />
                  <path
                    d="M26.216 22.432V21.16H28.432V27H27.008V22.432H26.216Z"
                    fill="#00FF66"
                  />
                </svg>
                <div className="text-start">
                  <h1 className="font-bold text-uppercase text-sm text-dark">
                    TIER 1 VERIFICATION
                  </h1>
                  <p className="text-uppercase text-sm text-dark">
                    To upgrade to tier 1, submit and verify your BVN
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="my-3">
            <a
              href="/Dashboard/Settings/Verification/Verification2"
              className="text-decoration-none"
            >
              <div className="flex p-3 space-x-2 rounded-lg bg-purple-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="53"
                    height="53"
                    rx="7.5"
                    stroke="#632FD9"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M29.9021 33.2456L30.0754 36.7612L26.5194 34.29L22.9434 36.7636L23.1169 33.2456H21.6151L21.3562 38.4956H23.0762L26.5174 36.1153L29.9427 38.4956H31.6628L31.4039 33.2456H29.9021ZM33.9818 22.5072L33.879 20.2547L31.9798 19.0394L30.7643 17.14L28.5117 17.0369L26.5095 16L24.5073 17.0372L22.2547 17.1403L21.0392 19.0394L19.14 20.2547L19.0372 22.5072L18 24.5095L19.0372 26.5117L19.1403 28.7642L21.0392 29.9795L22.2546 31.8789L24.5071 31.9818L26.5095 33.019L28.5117 31.9818L30.7643 31.8789L31.9796 29.9795L33.8789 28.7644L33.9818 26.5119L35.019 24.5096L33.9818 22.5072ZM32.4984 26.1142L32.4158 27.9196L30.8935 28.8936L29.9194 30.4159L28.114 30.4984L26.5095 31.3296L24.9048 30.4984L23.0994 30.4159L22.1253 28.8936L20.6033 27.9196L20.5208 26.1142L19.6892 24.5095L20.5206 22.905L20.6033 21.0994L22.1253 20.1253L23.0994 18.6031L24.9048 18.5206L26.5095 17.6893L28.1142 18.5206L29.9196 18.6031L30.8937 20.1253L32.4158 21.0994L32.4982 22.9048L33.3298 24.5095L32.4984 26.1142Z"
                    fill="#632FD9"
                  />
                  <path
                    d="M24.312 25.904C24.4933 25.76 24.576 25.6933 24.56 25.704C25.0827 25.272 25.4933 24.9173 25.792 24.64C26.096 24.3627 26.352 24.072 26.56 23.768C26.768 23.464 26.872 23.168 26.872 22.88C26.872 22.6613 26.8213 22.4907 26.72 22.368C26.6187 22.2453 26.4667 22.184 26.264 22.184C26.0613 22.184 25.9013 22.2613 25.784 22.416C25.672 22.5653 25.616 22.7787 25.616 23.056H24.296C24.3067 22.6027 24.4027 22.224 24.584 21.92C24.7707 21.616 25.0133 21.392 25.312 21.248C25.616 21.104 25.952 21.032 26.32 21.032C26.9547 21.032 27.432 21.1947 27.752 21.52C28.0773 21.8453 28.24 22.2693 28.24 22.792C28.24 23.3627 28.0453 23.8933 27.656 24.384C27.2667 24.8693 26.7707 25.344 26.168 25.808H28.328V26.92H24.312V25.904Z"
                    fill="#632FD9"
                  />
                </svg>
                <div className="text-start">
                  <h1 className="font-bold text-uppercase text-sm text-dark">
                    TIER 2 VERIFICATION
                  </h1>
                  <p className="text-uppercase text-sm text-dark">
                    To upgrade to tier 2, submit a government issue ID
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
