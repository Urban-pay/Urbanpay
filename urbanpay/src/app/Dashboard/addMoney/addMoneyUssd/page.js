"use client"
import React, { useState } from 'react';

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="container flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex items-start justify-start mt-3 text-start">
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
                        </div>
                        <div className="flex items-center justify-center w-full text-center">
                            <h1 className="w-full my-2 text-2xl font-bold">Add by USSD</h1>
                        </div>
                    </div>
                    <div className="my-10">
                        <h1 className="my-2 font-bold text-xl text-start">Add money via USSD</h1>
                        <p className="text-sm text-gray-500 text-start">
                            Use the details below to send money to your Urban Pay account from
                            any bank’s app or through internet banking.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="my-2">
                            <label
                                htmlFor="bank"
                                className="block mb-2 font-medium  text-start text-md text-white"
                            >
                                Fund Method
                            </label>
                            <select
                                id="bank"
                                name="bank"
                                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            >
                                <option value="Access Bank">Access Bank</option>
                                <option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
                            </select>
                        </div>
                        <div className="my-7">
                            <label
                                htmlFor="amount"
                                className="block mb-2 font-medium  text-start text-md text-white"
                            >
                                Enter Amount
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 y-400"
                                placeholder="₦ enter amount"
                                required
                            />
                        </div>
                        <div className="w-full my-7">
                            <button
                                onClick={openModal}
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center "
                            >
                                Add Money
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white  rounded-lg w-full max-w-sm mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 text-center">
                            <h1 className="my-3 font-bold text-md text-capitalize">
                                Fund by USSD Successful
                            </h1>
                            <h1 className="my-3 text-2xl font-bold text-capitalize">19,000</h1>
                            <p className="my-3 text-sm font-light text-capitalize">
                                Dial the USSD code below, follow steps to complete this transaction
                            </p>
                            <h1 className="my-3 font-bold text-xl text-capitalize">
                                *826*000*1234#
                            </h1>
                            <p className="my-3 text-sm font-light text-capitalize">
                                USSD Code expires in 01:00
                            </p>
                            <a
                                href="tel:*826*000*1234#"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
                            >
                                Tap to dial
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;
