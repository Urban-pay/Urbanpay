"use client"
import React, { useState } from 'react';


const page = () => {
    const [pin, setPin] = useState(['', '', '', '', '']);
    

    const appendToPin = (number) => {
        const newPin = [...pin];
        const index = newPin.indexOf('');
        if (index !== -1) {
            newPin[index] = number;
            setPin(newPin);
            // if (newPin.every((digit) => digit !== '')) {
            // }
        }
    };

    const deleteLastDigit = () => {
        const newPin = [...pin];
        const index = newPin.lastIndexOf('');
        if (index === -1) {
            newPin[pin.length - 1] = '';
        } else {
            newPin[index - 1] = '';
        }
        setPin(newPin);
    };


    return (
        <div className="container flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <a href="../home.html" id="back">
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
                        </a>
                        <div className="flex items-center justify-center w-full text-center">
                            <h1 className="w-full my-2 text-2xl font-bold">Check Deposit</h1>
                        </div>
                    </div>
                    <div className="my-10">
                        <h1 className="my-2 font-bold text-xl text-capitalize text-center">
                            Enter the amount you want to deposit
                        </h1>
                        <div className="flex justify-center items-center my-2">
                            <span className="mt-1 mr-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                >
                                    <rect x="0.5" width="24" height="24" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_3294_13494"
                                                transform="scale(0.00195312)"
                                            />
                                        </pattern>
                                    </defs>
                                </svg>
                            </span>
                            <h1 className="mt-1 font-bold text-2xl text-capitalize text-center">
                                30000
                            </h1>
                        </div>
                        <p className="text-sm text-gray-500 text-center">
                            You have 100,000 in your account
                        </p>
                    </div>

                    <div className="space-y-6">
                        <form className="space-y-6" action="#" method="POST" id="signin">
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                                    <button
                                        key={number}
                                        type="button"
                                        className="w-full p-2 border rounded-md text-center text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                                        onClick={() => appendToPin(number)}
                                    >
                                        {number}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    className="w-full p-2 border rounded-md text-center justify-center items-center text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 flex justify-center items-center"
                                    onClick={deleteLastDigit}
                                >
                                    <img
                                        src="../../media/dashoard/lucide_delete.png"
                                        className="img-fluid"
                                        alt="Delete"
                                    />
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <a
                                    href="addMoneyCheck1.html"
                                    className="text-decoration-none text-white"
                                >
                                    Confirm
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
