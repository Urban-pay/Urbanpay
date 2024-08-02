"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import BackBtn from "../../../../../components/BackBtn";


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
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                        Enter the following details to upgrade your UrbanPay account to tier 1
                    </h1>
                </div>

                <div className="space-y-6">
                    {[
                        { id: "Street", label: "Street", placeholder: "Enter street name" },
                        { id: "City", label: "City", placeholder: "Enter city name" },
                        { id: "State", label: "State", placeholder: "Enter state name" },
                        { id: "BVN", label: "BVN", placeholder: "123456789" }
                    ].map((field, index) => (
                        <div className="my-7" key={index}>
                            <label
                                htmlFor={field.id}
                                className="block mb-2 font-medium text-gray-900 text-left text-md"
                            >
                                {field.label}
                            </label>
                            <input
                                type="text"
                                id={field.id}
                                name={field.id}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={field.placeholder}
                                required
                            />
                        </div>
                    ))}
                    <div className="w-full my-7">
                        <button
                            onClick={openModal}
                            className="text-white bg-[#632FD9] focus:ring-4 focus:outline-none  font-medium text-sm w-full px-5 py-2.5 text-center"
                        >
                            Upgrade Account
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Verification Update Successful"
                style={customModalStyles}
            >
                <div className="flex items-center justify-center text-center p-4">
                    <div>
                        <h1 className="my-3 font-bold text-md text-capitalize">
                            Verification Update Successful
                        </h1>
                        <a
                            href="../home.html"
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
                        >
                            Go home
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Page;
