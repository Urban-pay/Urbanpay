"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import BackBtn from "../../../../../components/BackBtn";
import Link from "next/link";


const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        textAlign: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
    },
};

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleGidChange = (e) => {
        setShowAdditionalFields(e.target.value === 'NIN');
    };

    return (
        <div className="flex items-center justify-center h-screen text-center">
            <div className="p-3 w-[400px] h-full">
                <div className="pt-12">
                    <div className="flex justify-start items-start mt-3">
                        <BackBtn />
                    </div>
                    <div className="flex items-center justify-center w-full text-center">
                        <h1 className="my-2 text-2xl font-bold">Verification</h1>
                    </div>
                </div>

                <div className="my-10">
                    <h1 className="my-2 text-xl font-bold text-left">
                        Upgrade your UrbanPay account to tier 2 with more personal information
                    </h1>
                </div>

                <div className="max-w-sm mx-auto">
                    <label
                        htmlFor="gid"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Government issued ID
                    </label>
                    <select
                        id="gid"
                        name="gid"
                        onChange={handleGidChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="">Choose a country</option>
                        <option value="NIN">NIN</option>
                    </select>
                </div>

                {showAdditionalFields && (
                    <div className="space-y-6 mt-6">
                        <div className="my-7">
                            <label
                                htmlFor="id"
                                className="block mb-2 font-medium text-gray-900 text-left text-md"
                            >
                                ID Number
                            </label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Enter your NIN ID number"
                                required
                            />
                        </div>
                        <div className="my-7">
                            <label
                                htmlFor="pofid"
                                className="block mb-2 font-medium text-gray-900 text-left text-md"
                            >
                                Proof of ID
                            </label>
                            <div className="relative">
                                <svg
                                    className="absolute inset-y-0 right-0 mt-2 pr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_2836_8484)">
                                        <path
                                            d="M10.5002 8H13.5002M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.7826 9.47783 21.7096 8.96446 21.5357 8.48161C21.3619 7.99876 21.0909 7.5567 20.7394 7.18275C20.3879 6.80879 19.9635 6.51089 19.4924 6.30746C19.0212 6.10403 18.5134 5.99939 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
                                            stroke="#632FD9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
                                            stroke="#632FD9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2836_8484">
                                            <rect width="25" height="25" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <input
                                    type="text"
                                    id="pofid"
                                    name="pofid"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
                                    placeholder="Upload a copy of your document"
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-7">
                            <label
                                htmlFor="country"
                                className="block mb-2 font-medium text-gray-900 text-left text-md"
                            >
                                Country short code
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="e.g NG, GH, US"
                                required
                            />
                        </div>
                        <div className="w-full my-7">
                            <button
                                onClick={openModal}
                                className="text-white bg-[#632FD9] focus:ring-4 focus:outline-none  font-medium text-sm w-full px-5 py-2.5 text-center"
                            >
                                Upgrade Account
                            </button>
                        </div>
                    </div>)}

            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customModalStyles}
                contentLabel="Verification Update Modal"
            >
                <div className="flex items-center justify-center text-center">
                    <div>
                        <h1 className="my-3 font-bold text-md">Verification Update Successful</h1>
                        <div>
                            <Link
                                href="/Dashboard/Home"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
                            >
                                Go home
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
