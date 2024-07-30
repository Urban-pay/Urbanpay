"use client"
import React from 'react';
import Image from 'next/image';
import display from '../../../../../public/img/dashoard/display.jpg'
import BackBtn from '../../../../components/BackBtn';

const Page = () => {
    const copyLink = () => {
        const tag = document.getElementById('acct');
        navigator.clipboard.writeText(tag.value);
    };

    return (
        <div className=" flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div className="flex justify-start pt-12 mb-12">
                    <div className="flex justify-start items-start text-start mt-3">
                        <BackBtn />
                    </div>
                    <div className="mb-12 pt-12 w-full flex justify-center items-center">
                        <div>
                            <div className="w-full flex justify-center items-center">
                                <Image src={display} alt="Display" />
                            </div>
                            <h1 className="text-2xl text-center font-semibold">
                                Precious Ojeh
                            </h1>
                            <p className="text-sm text-center text-gray-400">
                                preciousojeh@urbanpay.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-3 rounded-lg m-3">
                        <h1 className="mb-3 text-md font-bold">Hi @preciousurbanpay</h1>
                        <p className="text-sm text-gray-400 text-center capitalize">
                            Receive money from your friends on Urbanpay with your tag
                        </p>
                    </div>
                    <div className="p-3 rounded-lg m-3 flex justify-between bg-[#f6e9fe]">
                        <div>
                            <p className="text-sm text-gray-700 text-start capitalize">
                                Your UrbanPay tag
                            </p>
                            <input
                                className="inline p-0 mb-3 text-md border-0 text-start font-bold bg-transparent focus:outline-none"
                                id="acct"
                                value="@preciousurbanpay"
                                readOnly
                            />
                        </div>
                        <div className="flex justify-between space-x-4 mt-2">
                            <span className="text-color">Copy</span>
                            <svg
                                id="copy"
                                onClick={copyLink}
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 13.4V17.6C16 21.1 14.6 22.5 11.1 22.5H6.9C3.4 22.5 2 21.1 2 17.6V13.4C2 9.9 3.4 8.5 6.9 8.5H11.1C14.6 8.5 16 9.9 16 13.4Z"
                                    stroke="#632FD9"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 7.4V11.6C22 15.1 20.6 16.5 17.1 16.5H16V13.4C16 9.9 14.6 8.5 11.1 8.5H8V7.4C8 3.9 9.4 2.5 12.9 2.5H17.1C20.6 2.5 22 3.9 22 7.4Z"
                                    stroke="#632FD9"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            data-bs-toggle="modal"
                            data-bs-target="#modalId"
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
