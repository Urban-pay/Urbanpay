"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import display from '../../../../assets/img/dashoard/display.jpg'
import Link from 'next/link'
import BottomNav from '../../../components/BottomNav'


const page = () => {

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <main className='container flex items-center justify-center h-screen text-center'>
                <div class="p-3" style={{ height: "100%", width: "400px" }}>
                    <div class="">
                        <div class="flex justify-start pt-12 mb-12">
                            <div class="flex items-center justify-center mr-10">
                                <Image src={display} alt="" />
                            </div>
                            <div class="">
                                <h1 class="w-full my-2 font-light text-1xl">Stanley Drey</h1>
                                <div class="flex justify-between w-full">
                                    <p class="px-1 text-sm custom-color">@drey</p>
                                    <span class="px-1 text-sm rounded-md span-color custom-color"
                                    >Tier 0</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <h1 class="text-2xl font-bold text-start">GENERAL</h1>
                            <div class="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                        fill="#F6E9FE"
                                        stroke="#632FD9"
                                    />
                                    <path
                                        d="M11.333 26.4974C11.333 25.3481 11.7896 24.2459 12.6022 23.4333C13.4149 22.6206 14.5171 22.1641 15.6663 22.1641H24.333C25.4823 22.1641 26.5845 22.6206 27.3971 23.4333C28.2098 24.2459 28.6663 25.3481 28.6663 26.4974C28.6663 27.072 28.4381 27.6231 28.0317 28.0295C27.6254 28.4358 27.0743 28.6641 26.4997 28.6641H13.4997C12.925 28.6641 12.3739 28.4358 11.9676 28.0295C11.5613 27.6231 11.333 27.072 11.333 26.4974Z"
                                        stroke="#222222"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20 17.832C21.7949 17.832 23.25 16.377 23.25 14.582C23.25 12.7871 21.7949 11.332 20 11.332C18.2051 11.332 16.75 12.7871 16.75 14.582C16.75 16.377 18.2051 17.832 20 17.832Z"
                                        stroke="#222222"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Profile
                                    </h1>
                                    <Link
                                        href="Settings/Profile"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 42 40"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_3660_22500)">
                                        <path
                                            d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z"
                                            fill="#D6FFF0"
                                        />
                                        <path
                                            d="M14.62 18.79C16.06 21.62 18.38 23.93 21.21 25.38L23.41 23.18C23.68 22.91 24.08 22.82 24.43 22.94C25.55 23.31 26.76 23.51 28 23.51C28.55 23.51 29 23.96 29 24.51V28C29 28.55 28.55 29 28 29C18.61 29 11 21.39 11 12C11 11.45 11.45 11 12 11H15.5C16.05 11 16.5 11.45 16.5 12C16.5 13.25 16.7 14.45 17.07 15.57C17.18 15.92 17.1 16.31 16.82 16.59L14.62 18.79Z"
                                            fill="black"
                                        />
                                    </g>
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H41.5V33C41.5 36.5899 38.5899 39.5 35 39.5H0.5V7Z"
                                        stroke="#72FFCB"
                                    />
                                    <defs>
                                        <clipPath id="clip0_3660_22500">
                                            <path
                                                d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Help & Support
                                    </h1>
                                    <Link
                                        href="Settings/Help"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 43 40"
                                    fill="none"
                                >
                                    <path
                                        d="M1 7C1 3.41015 3.91015 0.5 7.5 0.5H42V33C42 36.5899 39.0899 39.5 35.5 39.5H1V7Z"
                                        fill="#D6FFF0"
                                    />
                                    <path
                                        d="M1 7C1 3.41015 3.91015 0.5 7.5 0.5H42V33C42 36.5899 39.0899 39.5 35.5 39.5H1V7Z"
                                        stroke="#72FFCB"
                                    />
                                    <g clipPath="url(#clip0_3660_22413)">
                                        <path
                                            d="M29.8751 21.1256C29.1251 24.8756 26.2976 28.4066 22.3301 29.1956C20.3951 29.5809 18.3878 29.346 16.5941 28.5241C14.8004 27.7023 13.3117 26.3356 12.3399 24.6184C11.3682 22.9013 10.963 20.9214 11.182 18.9606C11.4009 16.9997 12.233 15.158 13.5596 13.6976C16.2806 10.7006 20.8751 9.87556 24.6251 11.3756"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.125 19.625L20.875 23.375L29.875 13.625"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3660_22413">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(8.5 8)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Verification
                                    </h1>
                                    <Link
                                        href="Settings/Verification"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div class="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
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
                                        d="M20 21C19.6955 20.9964 19.3973 21.0862 19.1454 21.2573C18.8936 21.4284 18.7001 21.6725 18.5912 21.9568C18.4823 22.2411 18.4631 22.552 18.5361 22.8476C18.6092 23.1431 18.7711 23.4092 19 23.61V25C19 25.2652 19.1054 25.5196 19.2929 25.7071C19.4804 25.8946 19.7348 26 20 26C20.2652 26 20.5196 25.8946 20.7071 25.7071C20.8946 25.5196 21 25.2652 21 25V23.61C21.2289 23.4092 21.3908 23.1431 21.4639 22.8476C21.5369 22.552 21.5177 22.2411 21.4088 21.9568C21.2999 21.6725 21.1064 21.4284 20.8546 21.2573C20.6027 21.0862 20.3045 20.9964 20 21ZM25 17V15C25 13.6739 24.4732 12.4021 23.5355 11.4645C22.5979 10.5268 21.3261 10 20 10C18.6739 10 17.4021 10.5268 16.4645 11.4645C15.5268 12.4021 15 13.6739 15 15V17C14.2044 17 13.4413 17.3161 12.8787 17.8787C12.3161 18.4413 12 19.2044 12 20V27C12 27.7956 12.3161 28.5587 12.8787 29.1213C13.4413 29.6839 14.2044 30 15 30H25C25.7956 30 26.5587 29.6839 27.1213 29.1213C27.6839 28.5587 28 27.7956 28 27V20C28 19.2044 27.6839 18.4413 27.1213 17.8787C26.5587 17.3161 25.7956 17 25 17ZM17 15C17 14.2044 17.3161 13.4413 17.8787 12.8787C18.4413 12.3161 19.2044 12 20 12C20.7956 12 21.5587 12.3161 22.1213 12.8787C22.6839 13.4413 23 14.2044 23 15V17H17V15ZM26 27C26 27.2652 25.8946 27.5196 25.7071 27.7071C25.5196 27.8946 25.2652 28 25 28H15C14.7348 28 14.4804 27.8946 14.2929 27.7071C14.1054 27.5196 14 27.2652 14 27V20C14 19.7348 14.1054 19.4804 14.2929 19.2929C14.4804 19.1054 14.7348 19 15 19H25C25.2652 19 25.5196 19.1054 25.7071 19.2929C25.8946 19.4804 26 19.7348 26 20V27Z"
                                        fill="#222222"
                                    />
                                </svg>
                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Security
                                    </h1>
                                    <Link
                                        href="Settings/Security"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                        fill="#FFD4CB"
                                        stroke="#FF947D"
                                    />
                                    <path
                                        d="M25.8097 12.47C25.7297 12.47 25.6497 12.45 25.5797 12.41C23.6597 11.42 21.9997 11 20.0097 11C18.0297 11 16.1497 11.47 14.4397 12.41C14.1997 12.54 13.8997 12.45 13.7597 12.21C13.6974 12.093 13.6834 11.9563 13.7208 11.8291C13.7582 11.702 13.844 11.5946 13.9597 11.53C15.8197 10.52 17.8597 10 20.0097 10C22.1397 10 23.9997 10.47 26.0397 11.52C26.2897 11.65 26.3797 11.95 26.2497 12.19C26.2102 12.2734 26.1479 12.3439 26.0701 12.3934C25.9923 12.4429 25.902 12.4695 25.8097 12.47ZM11.4997 17.72C11.4076 17.7209 11.317 17.6962 11.238 17.6487C11.159 17.6012 11.0947 17.5327 11.0522 17.4509C11.0097 17.3691 10.9908 17.2771 10.9974 17.1851C11.004 17.0932 11.036 17.0049 11.0897 16.93C12.0797 15.53 13.3397 14.43 14.8397 13.66C17.9797 12.04 21.9997 12.03 25.1497 13.65C26.6497 14.42 27.9097 15.51 28.8997 16.9C28.9381 16.9537 28.9655 17.0145 28.9802 17.0789C28.9949 17.1433 28.9968 17.2099 28.9856 17.275C28.9745 17.3401 28.9505 17.4023 28.9152 17.4581C28.8799 17.5139 28.8338 17.5621 28.7797 17.6C28.5497 17.76 28.2397 17.71 28.0797 17.48C27.204 16.2404 26.0408 15.2316 24.6897 14.54C21.8197 13.07 18.1497 13.07 15.2897 14.55C13.9297 15.25 12.7897 16.25 11.8897 17.51C11.8097 17.65 11.6597 17.72 11.4997 17.72ZM17.7497 29.79C17.6842 29.7908 17.6192 29.7779 17.5589 29.752C17.4986 29.7262 17.4444 29.688 17.3997 29.64C16.5297 28.77 16.0597 28.21 15.3897 27C14.6997 25.77 14.3397 24.27 14.3397 22.66C14.3397 19.69 16.8797 17.27 19.9997 17.27C23.1197 17.27 25.6597 19.69 25.6597 22.66C25.6597 22.94 25.4397 23.16 25.1597 23.16C24.8797 23.16 24.6597 22.94 24.6597 22.66C24.6597 20.24 22.5697 18.27 19.9997 18.27C17.4297 18.27 15.3397 20.24 15.3397 22.66C15.3397 24.1 15.6597 25.43 16.2697 26.51C16.9097 27.66 17.3497 28.15 18.1197 28.93C18.3097 29.13 18.3097 29.44 18.1197 29.64C18.0097 29.74 17.8797 29.79 17.7497 29.79ZM24.9197 27.94C23.7297 27.94 22.6797 27.64 21.8197 27.05C20.3297 26.04 19.4397 24.4 19.4397 22.66C19.4397 22.38 19.6597 22.16 19.9397 22.16C20.2197 22.16 20.4397 22.38 20.4397 22.66C20.4397 24.07 21.1597 25.4 22.3797 26.22C23.0897 26.7 23.9197 26.93 24.9197 26.93C25.1597 26.93 25.5597 26.9 25.9597 26.83C26.2297 26.78 26.4897 26.96 26.5397 27.24C26.5897 27.51 26.4097 27.77 26.1297 27.82C25.5597 27.93 25.0597 27.94 24.9197 27.94ZM22.9097 30C22.8697 30 22.8197 29.99 22.7797 29.98C21.1897 29.54 20.1497 28.95 19.0597 27.88C18.369 27.198 17.8213 26.385 17.4487 25.4887C17.0761 24.5923 16.8861 23.6307 16.8897 22.66C16.8897 21.04 18.2697 19.72 19.9697 19.72C21.6697 19.72 23.0497 21.04 23.0497 22.66C23.0497 23.73 23.9797 24.6 25.1297 24.6C26.2797 24.6 27.2097 23.73 27.2097 22.66C27.2097 18.89 23.9597 15.83 19.9597 15.83C17.1197 15.83 14.5197 17.41 13.3497 19.86C12.9597 20.67 12.7597 21.62 12.7597 22.66C12.7597 23.44 12.8297 24.67 13.4297 26.27C13.5297 26.53 13.3997 26.82 13.1397 26.91C12.8797 27.01 12.5897 26.87 12.4997 26.62C12.0179 25.3553 11.7705 24.0134 11.7697 22.66C11.7697 21.46 11.9997 20.37 12.4497 19.42C13.7797 16.63 16.7297 14.82 19.9597 14.82C24.5097 14.82 28.2097 18.33 28.2097 22.65C28.2097 24.27 26.8297 25.59 25.1297 25.59C23.4297 25.59 22.0497 24.27 22.0497 22.65C22.0497 21.58 21.1197 20.71 19.9697 20.71C18.8197 20.71 17.8897 21.58 17.8897 22.65C17.8897 24.36 18.5497 25.96 19.7597 27.16C20.7097 28.1 21.6197 28.62 23.0297 29.01C23.2997 29.08 23.4497 29.36 23.3797 29.62C23.3297 29.85 23.1197 30 22.9097 30Z"
                                        fill="black"
                                    />
                                </svg>

                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Biometrics
                                    </h1>
                                    <Link
                                        href=""
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                        fill="#BCBCFF"
                                    />
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                        stroke="#0000C1"
                                    />
                                    <g clipPath="url(#clip0_3660_22641)">
                                        <path
                                            d="M24.5 9.5C24.8978 9.5 25.2794 9.65804 25.5607 9.93934C25.842 10.2206 26 10.6022 26 11V29C26 29.3978 25.842 29.7794 25.5607 30.0607C25.2794 30.342 24.8978 30.5 24.5 30.5H15.5C15.1022 30.5 14.7206 30.342 14.4393 30.0607C14.158 29.7794 14 29.3978 14 29V11C14 10.6022 14.158 10.2206 14.4393 9.93934C14.7206 9.65804 15.1022 9.5 15.5 9.5H24.5ZM15.5 8C14.7044 8 13.9413 8.31607 13.3787 8.87868C12.8161 9.44129 12.5 10.2044 12.5 11V29C12.5 29.7956 12.8161 30.5587 13.3787 31.1213C13.9413 31.6839 14.7044 32 15.5 32H24.5C25.2956 32 26.0587 31.6839 26.6213 31.1213C27.1839 30.5587 27.5 29.7956 27.5 29V11C27.5 10.2044 27.1839 9.44129 26.6213 8.87868C26.0587 8.31607 25.2956 8 24.5 8H15.5Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M20 29C20.3978 29 20.7794 28.842 21.0607 28.5607C21.342 28.2794 21.5 27.8978 21.5 27.5C21.5 27.1022 21.342 26.7206 21.0607 26.4393C20.7794 26.158 20.3978 26 20 26C19.6022 26 19.2206 26.158 18.9393 26.4393C18.658 26.7206 18.5 27.1022 18.5 27.5C18.5 27.8978 18.658 28.2794 18.9393 28.5607C19.2206 28.842 19.6022 29 20 29Z"
                                            fill="#222222"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3660_22641">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(8 8)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Shake to send
                                    </h1>
                                    <Link
                                        href=""
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    ><div
                                        class="form-check form-switch"
                                        style={{ width: '40px', height: '24px' }}
                                    >
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value=""
                                                    className="sr-only peer"
                                                    checked={isChecked}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                                ></div>

                                            </label>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                        fill="#FFD4CB"
                                        stroke="#FF947D"
                                    />
                                    <path
                                        d="M25.4398 23.62L27.9998 21.06L25.4398 18.5M17.7598 21.06H27.9298M19.7598 29C15.3398 29 11.7598 26 11.7598 21C11.7598 16 15.3398 13 19.7598 13"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Logout
                                    </h1>
                                    <Link
                                        href="index.html"
                                        data-bs-toggle="modal"
                                        data-bs-target="#secmodal"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="flex">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                        d="M16.8104 10L13.1904 13.63M23.1904 10L26.8104 13.63"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10 15.8516C10 14.0016 10.99 13.8516 12.22 13.8516H27.78C29.01 13.8516 30 14.0016 30 15.8516C30 18.0016 29.01 17.8516 27.78 17.8516H12.22C10.99 17.8516 10 18.0016 10 15.8516Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M17.76 22V25.55M22.36 22V25.55M11.5 18L12.91 26.64C13.23 28.58 14 30 16.86 30H22.89C26 30 26.46 28.64 26.82 26.76L28.5 18"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                <div class="flex justify-between w-full mt-2">
                                    <h1
                                        class="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Delete account
                                    </h1>
                                    <Link
                                        href=""
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalId"
                                        class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <BottomNav />
                </div>
            </main>
        </>
    )
}

export default page