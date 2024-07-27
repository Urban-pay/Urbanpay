"use client"
import { useState } from 'react';
import BottomNav from "../../../components/BottomNav";
import Image from 'next/image';

const Page = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className=" flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div className="pt-2 mb-2">
                    <h1 className="text-2xl font-bold text-start">Card</h1>
                </div>

                <div className="space-y-6">

                    <ul className="flex justify-center w-full space-x-4">
                        <li className="" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'home' ? 'text-dark' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('home')}
                            >
                                Virtual Card
                            </button>
                        </li>
                        <li className="" role="presentation">
                            <button
                                className={` ${activeTab === 'profile' ? 'text-dark' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                Physical Card
                            </button>
                        </li>
                    </ul>


                    <div className="tab-content">
                        {activeTab === 'home' && (
                            <div className="tab-pane">
                                <div className="w-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width=""
                                        height="230"
                                        viewBox="0 0 366 230"
                                        fill="none"
                                    >
                                        <rect
                                            width="366"
                                            height="230"
                                            rx="4"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlinkHref="#image0_3660_19020"
                                                    transform="scale(0.000244141 0.000388502)"
                                                />
                                            </pattern>

                                        </defs>
                                    </svg>
                                </div>
                                <div className="my-10">
                                    <button className="w-full p-2 text-white bg-blue-500 rounded-md">
                                        Get card
                                    </button>
                                </div>
                                <div className="flex mb-10">
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
                                            d="M10 16H30M14 24H16M18.5 24H22.5"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.44 11.5039H25.55C29.11 11.5039 30 12.3839 30 15.8939V24.1039C30 27.6139 29.11 28.4939 25.56 28.4939H14.44C10.89 28.5039 10 27.6239 10 24.1139V15.8939C10 12.3839 10.89 11.5039 14.44 11.5039Z"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex justify-between w-full mt-3">
                                        <h1 className="ml-2 text-2xl font-bold">Save Cards</h1>
                                        <a href="" className="mt-2">
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'profile' && (
                            <div className="tab-pane">
                                <div className="w-full">
                                    <Image
                                        src={''}
                                        alt="Physical Card Design"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className="my-10">
                                    <button className="w-full p-2 text-white bg-blue-500 rounded-md">
                                        Get card
                                    </button>
                                </div>
                                <div className="flex mb-10">
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
                                            d="M10 16H30M14 24H16M18.5 24H22.5"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.44 11.5039H25.55C29.11 11.5039 30 12.3839 30 15.8939V24.1039C30 27.6139 29.11 28.4939 25.56 28.4939H14.44C10.89 28.5039 10 27.6239 10 24.1139V15.8939C10 12.3839 10.89 11.5039 14.44 11.5039Z"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex justify-between w-full mt-2">
                                        <h1 className="ml-2 text-2xl font-bold">Save Cards</h1>
                                        <a href="" className="mt-2">
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <BottomNav />
            </div>

        </div>
    );
};

export default Page;
