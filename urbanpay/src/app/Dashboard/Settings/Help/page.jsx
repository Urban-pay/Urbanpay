import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container flex items-center justify-center h-screen text-center">
      <div className="p-3 h-full w-[400px]">
        <div className="mb-[80%]">
          <div className="flex justify-start pt-12 mb-12">
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
              <h1 className="w-full my-2 text-2xl font-bold">Help & Support</h1>
            </div>
          </div>

          <div>
            <div className="flex my-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  fill="#BCBCFF"
                />
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  stroke="#0000C1"
                />
                <path
                  d="M29.97 26.33C29.97 26.69 29.89 27.06 29.72 27.42C29.55 27.78 29.33 28.12 29.04 28.44C28.55 28.98 28.01 29.37 27.4 29.62C26.8 29.87 26.15 30 25.45 30C24.43 30 23.34 29.76 22.19 29.27C21.04 28.78 19.89 28.12 18.75 27.29C17.5881 26.4401 16.4917 25.5041 15.47 24.49C14.4588 23.472 13.5261 22.3789 12.68 21.22C11.86 20.08 11.2 18.94 10.72 17.81C10.24 16.67 10 15.58 10 14.54C10 13.86 10.12 13.21 10.36 12.61C10.6 12 10.98 11.44 11.51 10.94C12.15 10.31 12.85 10 13.59 10C13.87 10 14.15 10.06 14.4 10.18C14.66 10.3 14.89 10.48 15.07 10.74L17.39 14.01C17.57 14.26 17.7 14.49 17.79 14.71C17.88 14.92 17.93 15.13 17.93 15.32C17.93 15.56 17.86 15.8 17.72 16.03C17.59 16.26 17.4 16.5 17.16 16.74L16.4 17.53C16.29 17.64 16.24 17.77 16.24 17.93C16.24 18.01 16.25 18.08 16.27 18.16C16.3 18.24 16.33 18.3 16.35 18.36C16.53 18.69 16.84 19.12 17.28 19.64C17.73 20.16 18.21 20.69 18.73 21.22C19.27 21.75 19.79 22.24 20.32 22.69C20.84 23.13 21.27 23.43 21.61 23.61C21.66 23.63 21.72 23.66 21.79 23.69C21.87 23.72 21.95 23.73 22.04 23.73C22.21 23.73 22.34 23.67 22.45 23.56L23.21 22.81C23.46 22.56 23.7 22.37 23.93 22.25C24.16 22.11 24.39 22.04 24.64 22.04C24.83 22.04 25.03 22.08 25.25 22.17C25.47 22.26 25.7 22.39 25.95 22.56L29.26 24.91C29.52 25.09 29.7 25.3 29.81 25.55C29.91 25.8 29.97 26.05 29.97 26.33Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M23.5 14H28.5M26 16.5V11.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex justify-between w-full mt-2">
                <h1 className="ml-2 text-2xl font-bold text-start">
                  Contact us
                </h1>
                <Link
                  href="javascript:void()"
                  className="mt-2 text-center text-decoration-none"
                >
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
                      d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                      fill="#9C9C9C"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex my-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  fill="#FFD4CB"
                />
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  stroke="#FF947D"
                />
                <path
                  d="M26.4698 24.83L26.8598 27.99C26.9598 28.82 26.0698 29.4 25.3598 28.97L21.1698 26.48C20.7098 26.48 20.2598 26.45 19.8198 26.39C20.5778 25.5113 20.9964 24.3904 20.9998 23.23C20.9998 20.39 18.5398 18.09 15.4998 18.09C14.3398 18.09 13.2698 18.42 12.3798 19C12.3498 18.75 12.3398 18.5 12.3398 18.24C12.3398 13.69 16.2898 10 21.1698 10C26.0498 10 29.9998 13.69 29.9998 18.24C29.9998 20.94 28.6098 23.33 26.4698 24.83Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 23.2298C21 24.4198 20.56 25.5198 19.82 26.3898C18.83 27.5898 17.26 28.3598 15.5 28.3598L12.89 29.9098C12.45 30.1798 11.89 29.8098 11.95 29.2998L12.2 27.3298C10.86 26.3998 10 24.9098 10 23.2298C10 21.4698 10.94 19.9198 12.38 18.9998C13.27 18.4198 14.34 18.0898 15.5 18.0898C18.54 18.0898 21 20.3898 21 23.2298Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex justify-between w-full mt-2">
                <h1 className="ml-2 text-2xl font-bold text-start">
                  Chat With Us
                </h1>
                <Link
                  href="/Dashboard/Settings/Help/chat"
                  className="mt-2 text-center text-decoration-none"
                >
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
                      d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                      fill="#9C9C9C"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex my-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  fill="#BCBCFF"
                />
                <path
                  d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                  stroke="#0000C1"
                />
                <path
                  d="M25 26.4302H21L16.55 29.3902C16.3998 29.4903 16.2253 29.5478 16.045 29.5564C15.8647 29.5651 15.6855 29.5247 15.5264 29.4395C15.3672 29.3543 15.2342 29.2275 15.1415 29.0727C15.0488 28.9178 14.9999 28.7407 15 28.5602V26.4302C12 26.4302 10 24.4302 10 21.4302V15.4302C10 12.4302 12 10.4302 15 10.4302H25C28 10.4302 30 12.4302 30 15.4302V21.4302C30 24.4302 28 26.4302 25 26.4302Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.9998 19.3599V19.1499C19.9998 18.4699 20.4198 18.1099 20.8398 17.8199C21.2498 17.5399 21.6598 17.1799 21.6598 16.5199C21.6598 15.5999 20.9198 14.8599 19.9998 14.8599C19.0798 14.8599 18.3398 15.5999 18.3398 16.5199M19.9948 21.7499H20.0048"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex justify-between w-full mt-2">
                <h1 className="ml-2 text-2xl font-bold text-start uppercase">
                  Faqs
                </h1>
                <Link
                  href="javascript:void()"
                  className="mt-2 text-center text-decoration-none"
                >
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
                      d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                      fill="#9C9C9C"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
