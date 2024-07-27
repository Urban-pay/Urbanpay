import React from "react";
import BackBtn from "../../../../../components/BackBtn";


const Page = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-screen text-center">
        <div className="p-3" style={{ height: "100%", width: "400px" }}>
          <div>
            <div className="flex justify-start pt-12">
              <div className="flex items-start justify-start mt-3 text-start">
                <BackBtn />
              </div>
              <div className="flex items-center justify-center w-full text-center">
                <h1 className="w-full my-2 text-2xl font-bold">Chat with us</h1>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <div className="items-end justify-end text-end gap-2.5">
                <div
                  className="flex py-1 px-3 max-w-[320px] leading-1.5 border-gray-200 bg-gray-100 rounded-xl rounded-es-xl dark:bg-gray-700"
                  style={{ backgroundColor: "#20A090" }}
                >
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    Hi there. Got a question? I&aposm here to help.
                  </p>
                </div>
                <span className="text-sm font-normal py-4 text-gray-500 dark:text-gray-400">
                  9:35 AM
                </span>
              </div>
              <div className="flex items-end justify-end text-end gap-2.5">
                <div
                  className="flex px-2 max-w-[320px] leading-1.5 border-gray-200 bg-gray-100 rounded-xl rounded-es-xl dark:bg-gray-700"
                  style={{ border: "1px solid #20A090" }}
                >
                  <p
                    className="text-sm font-normal py-2.5 text-gray-900 dark:text-white"
                    style={{ color: "#20A090" }}
                  >
                    Talk to human
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
