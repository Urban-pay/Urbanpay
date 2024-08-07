"use client"
import React from 'react';
import Link from 'next/link';
import BackBtn from '../../../../components/BackBtn';

const page = () => {

    const copyLink = () => {
        const copyText = document.getElementById('acct');
        copyText.select();
        document.execCommand('copy');
        alert("Copied the text: " + copyText.value);
    };

    return (
        <div className=" flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex items-start justify-start mt-3 text-start">
                            <BackBtn />
                        </div>
                        <div className="flex items-center justify-center w-full text-center">
                            <h1 className="w-full my-2 text-2xl font-bold">Bank Transfer</h1>
                        </div>
                    </div>
                    <div className="my-10">
                        <h1 className="my-2 font-bold text-xl text-start">Add money via bank transfer</h1>
                        <p className="text-sm text-gray-500 text-start">
                            Use the details below to send money to your Urban Pay account from
                            any bank’s app or through internet banking.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    fill="#F6E9FE"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M12 25.9998V18.9998M16 25.9998V18.9998M20 25.9998V18.9998M24 25.9998V18.9998M28 25.9998V18.9998M9 29.9998H31M20.37 10.1498L29.37 13.7498C29.72 13.8898 30 14.3098 30 14.6798V17.9998C30 18.5498 29.55 18.9998 29 18.9998H11C10.45 18.9998 10 18.5498 10 17.9998V14.6798C10 14.3098 10.28 13.8898 10.63 13.7498L19.63 10.1498C19.83 10.0698 20.17 10.0698 20.37 10.1498ZM30 29.9998H10V26.9998C10 26.4498 10.45 25.9998 11 25.9998H29C29.55 25.9998 30 26.4498 30 26.9998V29.9998Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20 16.5C20.197 16.5 20.392 16.4612 20.574 16.3858C20.756 16.3104 20.9214 16.1999 21.0607 16.0607C21.1999 15.9214 21.3104 15.756 21.3858 15.574C21.4612 15.392 21.5 15.197 21.5 15C21.5 14.803 21.4612 14.608 21.3858 14.426C21.3104 14.244 21.1999 14.0786 21.0607 13.9393C20.9214 13.8001 20.756 13.6896 20.574 13.6142C20.392 13.5388 20.197 13.5 20 13.5C19.6022 13.5 19.2206 13.658 18.9393 13.9393C18.658 14.2206 18.5 14.6022 18.5 15C18.5 15.3978 18.658 15.7794 18.9393 16.0607C19.2206 16.342 19.6022 16.5 20 16.5Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <div className="ml-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">Bank</h1>
                                    <p className="ml-2 text-sm text-start">Urban Pay</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="39"
                                    height="39"
                                    rx="3.5"
                                    fill="#F6E9FE"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M14.25 28L15.325 23.75H11.5L11.875 22.25H15.7L16.825 17.75H12.5L12.875 16.25H17.2L18.25 12H19.725L18.675 16.25H23.2L24.25 12H25.725L24.675 16.25H28.5L28.125 17.75H24.3L23.175 22.25H27.5L27.125 23.75H22.8L21.75 28H20.25L21.325 23.75H16.8L15.75 28H14.25ZM17.175 22.25H21.7L22.825 17.75H18.3L17.175 22.25Z"
                                    fill="black"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <div className="ml-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">
                                        Urban Pay account number
                                    </h1>
                                    <input
                                        className="inline p-0 text-sm border-0 text-start focus:outline-none"
                                        id="acct"
                                        value="1234567891"
                                        readOnly
                                    />
                                </div>

                                <span
                                    onClick={copyLink}
                                    id="copy"
                                    className="flex items-center justify-center mt-2 text-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.875 6.375V2.625H2.625V16.875H6.375M7.125 7.125V21.375H21.375V7.125H7.125Z"
                                            stroke="#7D52DF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="39"
                                    height="39"
                                    rx="3.5"
                                    fill="#F6E9FE"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M20 12C21.0609 12 22.0783 12.4214 22.8284 13.1716C23.5786 13.9217 24 14.9391 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20C18.9391 20 17.9217 19.5786 17.1716 18.8284C16.4214 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12ZM20 14C19.4696 14 18.9609 14.2107 18.5858 14.5858C18.2107 14.9609 18 15.4696 18 16C18 16.5304 18.2107 17.0391 18.5858 17.4142C18.9609 17.7893 19.4696 18 20 18C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16C22 15.4696 21.7893 14.9609 21.4142 14.5858C21.0391 14.2107 20.5304 14 20 14ZM20 21C22.67 21 28 22.33 28 25V28H12V25C12 22.33 17.33 21 20 21ZM20 22.9C17.03 22.9 13.9 24.36 13.9 25V26.1H26.1V25C26.1 24.36 22.97 22.9 20 22.9Z"
                                    fill="#222222"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <div className="ml-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">
                                        Account name
                                    </h1>
                                    <p className="ml-2 text-sm text-start">James Peters Emmanuel</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-7">
                            <button className="text-white bg-[#632FD9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center">
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
