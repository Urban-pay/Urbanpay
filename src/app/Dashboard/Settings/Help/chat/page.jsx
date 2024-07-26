import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UrbanPay: dashboard</title>
        <link rel="stylesheet" href="/assets/bootstrap5.2/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/custom/css/style.css" />
        <link rel="stylesheet" href="/assets/tailwind/tailwind.css" />
        <link
          rel="shortcut icon"
          href="/assets/img/URBAN PAY LOGO PNG.png"
          type="image/x-icon"
        />
      </Head>
      <div className="container flex items-center justify-center h-screen text-center">
        <div className="p-3" style={{ height: "100%", width: "400px" }}>
          <div>
            <div className="flex justify-start pt-12">
              <div className="flex items-start justify-start mt-3 text-start">
                <Link href="../home.html" id="back">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536Z"
                      fill="black"
                    />
                  </svg>
                </Link>
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
                    Hi there. Got a question? I'm here to help.
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

export default page;
