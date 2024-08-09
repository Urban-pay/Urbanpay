"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import display from '../../../../public/img/dashoard/display.jpg';
import Link from 'next/link';
import BottomNav from '../../../../components/BottomNav';
import BackBtn from '../../../../components/BackBtn';
// import DeleteModal from '../../../constants/DeleteModal';


const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (e) => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <main className=' flex items-center justify-center h-screen text-center'>
                <div className="p-3" style={{ height: "100%", width: "400px" }}>
                    <div className="">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between pt-12 mb-12">
                                <div className="flex items-start justify-start">
                                    <BackBtn />
                                </div>
                                <h1 className="flex-grow text-2xl font-bold text-center">GENERAL</h1>
                            </div>

                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#F6E9FE" stroke="#632FD9" />
                                    <path d="M12 25.9998V18.9998M16 25.9998V18.9998M20 25.9998V18.9998M24 25.9998V18.9998M28 25.9998V18.9998M9 29.9998H31M20.37 10.1498L29.37 13.7498C29.72 13.8898 30 14.3098 30 14.6798V17.9998C30 18.5498 29.55 18.9998 29 18.9998H11C10.45 18.9998 10 18.5498 10 17.9998V14.6798C10 14.3098 10.28 13.8898 10.63 13.7498L19.63 10.1498C19.83 10.0698 20.17 10.0698 20.37 10.1498ZM30 29.9998H10V26.9998C10 26.4498 10.45 25.9998 11 25.9998H29C29.55 25.9998 30 26.4498 30 26.9998V29.9998Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20 16.5C20.197 16.5 20.392 16.4612 20.574 16.3858C20.756 16.3104 20.9214 16.1999 21.0607 16.0607C21.1999 15.9214 21.3104 15.756 21.3858 15.574C21.4612 15.392 21.5 15.197 21.5 15C21.5 14.803 21.4612 14.608 21.3858 14.426C21.3104 14.244 21.1999 14.0786 21.0607 13.9393C20.9214 13.8001 20.756 13.6896 20.574 13.6142C20.392 13.5388 20.197 13.5 20 13.5C19.6022 13.5 19.2206 13.658 18.9393 13.9393C18.658 14.2206 18.5 14.6022 18.5 15C18.5 15.3978 18.658 15.7794 18.9393 16.0607C19.2206 16.342 19.6022 16.5 20 16.5Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Buy Airtime
                                    </h1>
                                    <Link
                                        href="Settings/Profile"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#FFD4CB" stroke="#FF947D" />
                                    <path d="M10 16.5049H30M14 24.5049H16M18.5 24.5049H22.5" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.44 11.5049H25.55C29.11 11.5049 30 12.3849 30 15.8949V24.1049C30 27.6149 29.11 28.4949 25.56 28.4949H14.44C10.89 28.5049 10 27.6249 10 24.1149V15.8949C10 12.3849 10.89 11.5049 14.44 11.5049Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Buy Data
                                    </h1>
                                    <Link
                                        href="Settings/Help"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2130_9183)">
                                        <path d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z" fill="#D6FFF0" />
                                        <path d="M17.5018 10V13M22.5018 10V13M20.0018 30V24M18.5018 24H21.5018C24.0018 24 25.5018 22.2 25.5018 20V14.91C25.5018 13.86 24.6418 13 23.5918 13H16.4218C15.3718 13 14.5118 13.86 14.5118 14.91V20C14.5018 22.2 16.0018 24 18.5018 24Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H41.5V33C41.5 36.5899 38.5899 39.5 35 39.5H0.5V7Z" stroke="#72FFCB" />
                                    <defs>
                                        <clipPath id="clip0_2130_9183">
                                            <path d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Electricity
                                    </h1>
                                    <Link
                                        href="Settings/Verification"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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

                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H35.5V29C35.5 32.5899 32.5899 35.5 29 35.5H0.5V7Z" fill="#BCBCFF" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H35.5V29C35.5 32.5899 32.5899 35.5 29 35.5H0.5V7Z" stroke="#0000C1" />
                                    <path d="M25.4987 10.5H10.4987C9.58203 10.5 8.83203 11.25 8.83203 12.1667V22.1667C8.83203 23.0833 9.58203 23.8333 10.4987 23.8333H14.6654V25.5H21.332V23.8333H25.4987C26.4154 23.8333 27.157 23.0833 27.157 22.1667L27.1654 12.1667C27.1654 11.25 26.4154 10.5 25.4987 10.5ZM25.4987 22.1667H10.4987V12.1667H25.4987V22.1667Z" fill="black" />
                                </svg>

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Streaming Subscription
                                    </h1>
                                    <Link
                                        href="Settings/Security"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                            <div className="flex">
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

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Biometrics
                                    </h1>
                                    <Link
                                        href=""
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                            <div className="flex">
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

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Shake to send
                                    </h1>
                                    <button
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    ><div
                                        className="form-check form-switch"
                                        style={{ width: '40px', height: '24px' }}
                                    >
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center">
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

                                <div className="flex justify-between w-full mt-2">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Logout
                                    </h1>
                                    <button
                                        onClick={openModal}
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                                    </button>
                                    {isOpen && (
                                        <div
                                            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                                            aria-labelledby="secmodalTitle"
                                            aria-hidden="true"
                                        >
                                            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
                                                <div className="modal-content p-4">
                                                    <div className="text-center">
                                                        <h1 className="my-3 font-bold text-md">
                                                            Are you sure you want to log out?
                                                        </h1>
                                                        <div className="my-6">
                                                            <Link
                                                                href="/"
                                                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm rounded-lg px-5 py-2.5 text-center"
                                                            >
                                                                Yes
                                                            </Link>
                                                        </div>
                                                        <div className="my-6">
                                                            <button
                                                                onClick={closeModal}
                                                                className="bg-transparent text-blue-600 hover:text-blue-700 rounded-lg border border-blue-600 px-5 py-2.5 text-sm text-center"
                                                            >
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* <DeleteModal /> */}
                        </div>
                    </div >
                    <BottomNav />
                </div >

            </main >
        </>
    )
}

export default Page
