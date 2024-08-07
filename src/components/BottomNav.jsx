"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div
      className="w-[80%] ml-10 md:ml-0 md:w-full bottom-0"
      style={{ position: "sticky" }}
    >
      <div className="flex justify-between py-4">
        <div className="navigation-menu-home">
          <Link href="/Dashboard/Home">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                pathname === "/Dashboard/Home"
                  ? "text-[#632FD9]"
                  : "text-[#606060]"
              }`}
            >
              <path
                d="M9.02 3.33821L3.63 7.53821C2.73 8.23821 2 9.72821 2 10.8582V18.2682C2 20.5882 3.89 22.4882 6.21 22.4882H17.79C20.11 22.4882 22 20.5882 22 18.2782V10.9982C22 9.78821 21.19 8.23821 20.2 7.54821L14.02 3.21821C12.62 2.23821 10.37 2.28821 9.02 3.33821Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18.4883V15.4883"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="img-wrapper">
          <Link href="/Dashboard/Card">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                pathname === "/Dashboard/Card"
                  ? "text-[#632FD9]"
                  : "text-[#606060]"
              }`}
            >
              <path
                d="M2.5 9.00586H22.5M6.5 17.0059H8.5M11 17.0059H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.94 4.00586H18.05C21.61 4.00586 22.5 4.88586 22.5 8.39586V16.6059C22.5 20.1159 21.61 20.9959 18.06 20.9959H6.94C3.39 21.0059 2.5 20.1259 2.5 16.6159V8.39586C2.5 4.88586 3.39 4.00586 6.94 4.00586Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="img-wrapper">
          <Link href="/Dashboard/Transactions">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                pathname === "/Dashboard/Transactions"
                  ? "text-[#632FD9]"
                  : "text-[#606060]"
              }`}
            >
              <path
                d="M18.32 12.4992C20.92 12.4992 22 11.4992 21.04 8.2192C20.39 6.0092 18.49 4.1092 16.28 3.4592C13 2.4992 12 3.5792 12 6.1792V9.0592C12 11.4992 13 12.4992 15 12.4992H18.32Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9994 15.1998C19.0694 19.8298 14.6294 23.1898 9.57944 22.3698C5.78944 21.7598 2.73944 18.7098 2.11944 14.9198C1.30944 9.88977 4.64944 5.44977 9.25944 4.50977"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="iconsax-linear-wrapper">
          <Link href="/Dashboard/Settings">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                pathname === "/Dashboard/Settings"
                  ? "text-[#632FD9]"
                  : "text-[#606060]"
              }`}
            >
              <path
                d="M18.0951 6.7214C16.2851 6.7214 15.5451 5.4414 16.4451 3.8714C16.9651 2.9614 16.6551 1.8014 15.7451 1.2814L14.0151 0.291401C13.2251 -0.178599 12.2051 0.101401 11.7351 0.891401L11.6251 1.0814C10.7251 2.6514 9.24512 2.6514 8.33512 1.0814L8.22512 0.891401C8.11732 0.702383 7.973 0.53669 7.80057 0.403966C7.62814 0.271243 7.43103 0.174138 7.22072 0.118303C7.01041 0.0624677 6.79109 0.0490174 6.57553 0.0787345C6.35997 0.108452 6.15248 0.180743 5.96512 0.291401L4.23512 1.2814C3.32512 1.8014 3.01512 2.9714 3.53512 3.8814C4.44512 5.4414 3.70512 6.7214 1.89512 6.7214C0.855117 6.7214 -0.00488281 7.5714 -0.00488281 8.6214V10.3814C-0.00488281 11.4214 0.845117 12.2814 1.89512 12.2814C3.70512 12.2814 4.44512 13.5614 3.53512 15.1314C3.01512 16.0414 3.32512 17.2014 4.23512 17.7214L5.96512 18.7114C6.75512 19.1814 7.77512 18.9014 8.24512 18.1114L8.35512 17.9214C9.25512 16.3514 10.7351 16.3514 11.6451 17.9214L11.7551 18.1114C12.2251 18.9014 13.2451 19.1814 14.0351 18.7114L15.7651 17.7214C16.6751 17.2014 16.9851 16.0314 16.4651 15.1314C15.5551 13.5614 16.2951 12.2814 18.1051 12.2814C19.1451 12.2814 20.0051 11.4314 20.0051 10.3814V8.6214C19.9999 8.11739 19.7966 7.63565 19.4393 7.28017C19.082 6.9247 18.5992 6.724 18.0951 6.7214ZM9.99512 12.7514C8.20512 12.7514 6.74512 11.2914 6.74512 9.5014C6.74512 7.7114 8.20512 6.2514 9.99512 6.2514C11.7851 6.2514 13.2451 7.7114 13.2451 9.5014C13.2451 11.2914 11.7851 12.7514 9.99512 12.7514Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
