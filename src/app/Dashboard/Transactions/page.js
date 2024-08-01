"use client"
import BottomNav from "../../../components/BottomNav";
import React, { useState } from "react";


const Transactions = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex items-center justify-center h-screen text-center">
      <div className="p-3 h-full w-96">
        <div>
          <div className="flex justify-between pt-3 mb-3">
            <div>
              <h1 className="w-full my-2 text-2xl font-extrabold">Transactions</h1>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-2">
                <div className="relative">
                  <svg
                    id="triggerId"
                    onClick={toggleDropdown}
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F5F0FF" />
                    <path
                      d="M28 22V12C28 11.4696 27.7893 10.9609 27.4142 10.5858C27.0391 10.2107 26.5304 10 26 10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V26C10 26.5304 10.2107 27.0391 10.5858 27.4142C10.9609 27.7893 11.4696 28 12 28H22M28 22V22.172C27.9999 22.7024 27.7891 23.211 27.414 23.586L23.586 27.414C23.211 27.7891 22.7024 27.9999 22.172 28H22M28 22H24C23.4696 22 22.9609 22.2107 22.5858 22.5858C22.2107 22.9609 22 23.4696 22 24V28M14 14H24M14 18H24M14 22H18"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                      <h6 className="font-bold px-4 py-2">All Transactions</h6>
                      <div className="border-t border-gray-200"></div>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                        Sent
                      </a>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">
                        Received
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#F5F0FF" />
                <g clipPath="url(#clip0_3660_20998)">
                  <path
                    d="M10.7916 8.66797H18.2082C18.8249 8.66797 19.3332 9.1763 19.3332 9.79297V11.0263C19.3332 11.4763 19.0499 12.0346 18.7749 12.318L16.3582 14.4513C16.0249 14.7346 15.7999 15.293 15.7999 15.743V18.1596C15.7999 18.493 15.5749 18.943 15.2916 19.118L14.5082 19.6263C13.7749 20.0763 12.7666 19.568 12.7666 18.668V15.693C12.7666 15.3013 12.5416 14.793 12.3166 14.5096L10.1832 12.2596C9.89991 11.9763 9.67491 11.4763 9.67491 11.1346V9.84297C9.66657 9.1763 10.1749 8.66797 10.7916 8.66797Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.6665 17.0005V19.5005C9.6665 23.6672 11.3332 25.3339 15.4998 25.3339H20.4998C24.6665 25.3339 26.3332 23.6672 26.3332 19.5005V14.5005C26.3332 11.9005 25.6832 10.2672 24.1748 9.41719C23.7498 9.17552 22.8998 8.99219 22.1248 8.86719M18.8332 17.8339H22.9998M17.1665 21.1672H22.9998"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3660_20998">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(8 7)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div
            className="flex items-center justify-center space-y-6 text-center"
            style={{ height: "75vh" }}
          >
            <div>
              <div className="flex items-center justify-center mr-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="112"
                  viewBox="0 0 108 112"
                  fill="none"
                >
                  <circle cx="6.5" cy="6" r="6" fill="#D9D9D9" />
                  <rect x="17.5" width="90" height="12" rx="6" fill="#D9D9D9" />
                  <circle cx="6.5" cy="26" r="6" fill="#D9D9D9" />
                  <rect
                    x="17.5"
                    y="20"
                    width="90"
                    height="12"
                    rx="6"
                    fill="#D9D9D9"
                  />
                  <circle cx="6.5" cy="46" r="6" fill="#D9D9D9" />
                  <rect
                    x="17.5"
                    y="40"
                    width="90"
                    height="12"
                    rx="6"
                    fill="#D9D9D9"
                  />
                  <circle cx="6.5" cy="66" r="6" fill="#D9D9D9" />
                  <rect
                    x="17.5"
                    y="60"
                    width="90"
                    height="12"
                    rx="6"
                    fill="#D9D9D9"
                  />
                  <circle cx="6.5" cy="86" r="6" fill="#D9D9D9" />
                  <rect
                    x="17.5"
                    y="80"
                    width="90"
                    height="12"
                    rx="6"
                    fill="#D9D9D9"
                  />
                  <circle cx="6.5" cy="106" r="6" fill="#D9D9D9" />
                  <rect
                    x="17.5"
                    y="100"
                    width="90"
                    height="12"
                    rx="6"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <div className="flex justify-between w-full mt-2">
                <p>Your transactions will show here after activity</p>
              </div>
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default Transactions;
