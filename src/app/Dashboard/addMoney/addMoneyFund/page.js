"use client"
import React from 'react';
import BackBtn from '../../../../components/BackBtn';


const Page = () => {
    
    const copyToClipboard = () => {
        const input = document.getElementById('acct');
        input.select();
        document.execCommand('copy');
    };

    return (
        <div className="flex items-center justify-center h-screen text-center">
            <div className="p-3 h-full w-[400px]">
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex items-start justify-start mt-3 text-start">
                            <BackBtn />
                        </div>
                        <div className="flex items-center justify-center w-full text-center">
                            <h1 className="w-full my-2 text-2xl font-bold">Cash Deposit</h1>
                        </div>
                    </div>
                    <div className="my-10">
                        <h1 className="my-2 font-bold text-xl text-start">
                            Add money via cash deposit
                        </h1>
                        <p className="text-sm text-gray-500 text-start">
                            You can deposit cash into your UrbanPay account by following the
                            steps below;
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ol className="relative">
                            <li className="mb-10 ms-4 relative">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Give cash to the POS merchant
                                </h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Give cash to the POS merchant, then request for the cash to be
                                    transferred to your Urban Pay account
                                </p>
                                <div className="flex justify-between my-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">Bank Name:</h1>
                                    <p className="ml-2 text-sm text-end text-blue-600">UrbanPay</p>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">
                                        Account Number:
                                    </h1>
                                    <div className="flex ml-2 text-sm text-end text-blue-600">
                                        <span>
                                            <input
                                                id="acct"
                                                className="text-sm border-0 inline p-0 text-start focus:outline-none"
                                                value="1234567891"
                                                readOnly
                                            />
                                        </span>
                                        <span className="pt-1 ml-2">
                                            <svg
                                                onClick={copyToClipboard}
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer"
                                            >
                                                <g clipPath="url(#clip0_1721_7242)">
                                                    <path
                                                        d="M6.66732 5.37516V7.12516C6.66732 8.5835 6.08398 9.16683 4.62565 9.16683H2.87565C1.41732 9.16683 0.833984 8.5835 0.833984 7.12516V5.37516C0.833984 3.91683 1.41732 3.3335 2.87565 3.3335H4.62565C6.08398 3.3335 6.66732 3.91683 6.66732 5.37516Z"
                                                        stroke="#632FD9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M9.16732 2.87516V4.62516C9.16732 6.0835 8.58398 6.66683 7.12565 6.66683H6.66732V5.37516C6.66732 3.91683 6.08398 3.3335 4.62565 3.3335H3.33398V2.87516C3.33398 1.41683 3.91732 0.833496 5.37565 0.833496H7.12565C8.58398 0.833496 9.16732 1.41683 9.16732 2.87516Z"
                                                        stroke="#632FD9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1721_7242">
                                                        <rect width="10" height="10" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h1 className="ml-2 font-bold text-xl text-start">
                                        Beneficiary:
                                    </h1>
                                    <p className="ml-2 text-sm text-end text-blue-600">
                                        James Peter Emmanuel
                                    </p>
                                </div>
                            </li>
                            <li className="mb-10 ms-4 relative">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <h3 className="text-lg font-semiboldtext-white">
                                    Confirm receipt of funds
                                </h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Please verify that the correct amount has been deposited
                                    into your account.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
