"use client"
import React, { useState } from 'react';
import BackBtn from '../../../../../components/BackBtn';

const Page = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        const phoneNumberElement = document.getElementById("phone-numbers");
        const phoneNumber = phoneNumberElement.options[phoneNumberElement.selectedIndex].value;

        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000); 
            });
    };

    return (
        <main className='flex items-center justify-center text-center'>
            <div className="p-3" style={{ height: "100%", width: "400px" }}>
                <div className="flex items-center justify-between pt-12 mb-12">
                    <div className="flex items-start justify-start">
                        <BackBtn />
                    </div>
                    <h1 className="flex-grow text-2xl font-bold text-center">Betting</h1>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <h3 className="mb-2">Recent Transfers</h3>
                    <svg width="168" height="30" viewBox="0 0 168 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="#1ABC8D" fillOpacity="0.5" />
                        <rect x="46" width="30" height="30" rx="15" fill="#FFF2AD" />
                        <rect x="92" width="30" height="30" rx="15" fill="#1ABC8D" fillOpacity="0.5" />
                        <rect x="138" width="30" height="30" rx="15" fill="#1ABC8D" fillOpacity="0.5" />
                    </svg>
                </div>

                <form className="max-w-sm mx-auto my-5">
                    <div className="mb-2 flex justify-between items-center">
                        <label htmlFor="phone-numbers" className="text-lg font-medium text-gray-900">
                            Services :
                        </label>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <select
                                id="phone-numbers"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-[#B2B2B2] text-gray-900 text-lg rounded-lg block w-full p-4 my-5"
                            >
                                <option disabled selected className='text-[#B2B2B2] text-sm'>
                                    Choose Services
                                </option>
                                <option value="+1 234 456 7890">+1 234 456 7890</option>
                                <option value="+1 456 234 7890">+1 456 234 7890</option>
                                <option value="+1 432 621 3163">+1 432 621 3163</option>
                            </select>
                        </div>
                    </div>
                </form>

                <form className="max-w-sm mx-auto my-5">
                    <div className="mb-2 flex justify-between items-center">
                        <label htmlFor="amount" className="text-lg font-medium text-gray-900">
                            Betting ID:
                        </label>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="amount"
                                placeholder="Input ID"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-[#B2B2B2] text-gray-900 text-lg rounded-lg block w-full p-4 my-5"
                            />
                        </div>
                    </div>
                </form>


                <form className="max-w-sm mx-auto my-5">
                    <div className="mb-2 flex justify-between items-center">
                        <label htmlFor="phone-numbers" className="text-lg font-medium text-gray-900">
                            Amount :
                        </label>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="amount"
                                placeholder="Input Amonut"
                                aria-describedby="helper-text-explanation"
                                className="bg-gray-50 border border-[#B2B2B2] text-gray-900 text-lg rounded-lg block w-full p-4 my-5"
                            />
                        </div>
                    </div>
                </form>
                <button className="bg-[#632FD9] text-white font-medium rounded-lg w-full py-4">
                    Continue
                </button>
            </div>
        </main>
    )
}

export default Page
