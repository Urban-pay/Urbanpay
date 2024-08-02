"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {

    const router = useRouter()

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (e) => {
        setIsChecked(!isChecked);
    };

    const [activeTab, setActiveTab] = useState('NewTransfer')

    return (
        <div
            className="flex items-center justify-center h-screen text-center"
            style={{ height: '100vh' }}
        >
            <div className="p-3" style={{ height: '100%', width: '400px' }}>
                <div className="">
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex justify-start items-start text-start mt-3">
                            <button onClick={() => router.back()}>
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
                            </button >
                        </div>
                        <div className="w-full flex justify-center items-center text-center">
                            <div>
                                <div
                                    className="w-full flex justify-center text-center items-center"
                                >
                                    <h1 className="w-full my-2 font-bold text-2xl">Bank Account</h1>
                                </div>
                                <div
                                    className="w-full flex justify-center text-center items-center"
                                >
                                    <p
                                        className="w-full my-2 font-normal text-1xl flex justify-between"
                                    >
                                        <span className="flex">
                                            <span className="inline mt-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"

                                                    width="11"
                                                    height="10"
                                                    viewBox="0 0 11 10"
                                                    fill="none"
                                                >
                                                    <rect
                                                        x="0.625"
                                                        width="10"
                                                        height="10"
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

                                                                transform="scale(0.00195312)"
                                                            />
                                                        </pattern>

                                                    </defs>
                                                </svg>
                                            </span>
                                            5,436.00
                                        </span>
                                        <span className="inline mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="10"
                                                viewBox="0 0 17 10"
                                                fill="none"
                                            >
                                                <path
                                                    d="M10.875 5C10.875 6.25519 9.75571 7.27273 8.375 7.27273C6.99429 7.27273 5.875 6.25519 5.875 5C5.875 3.74481 6.99429 2.72727 8.375 2.72727C9.75571 2.72727 10.875 3.74481 10.875 5Z"
                                                    fill="#9A9A9A"
                                                />
                                                <path
                                                    d="M0.375 5C0.375 5 3.375 0 8.375 0C13.375 0 16.375 5 16.375 5C16.375 5 13.375 10 8.375 10C3.375 10 0.375 5 0.375 5ZM8.375 8.18182C10.308 8.18182 11.875 6.75727 11.875 5C11.875 3.24273 10.308 1.81818 8.375 1.81818C6.442 1.81818 4.875 3.24273 4.875 5C4.875 6.75727 6.442 8.18182 8.375 8.18182Z"
                                                    fill="#9A9A9A"
                                                />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <ul
                            className="flex space-x-3 justify-center w-full"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`${activeTab === 'NewTransfer' ? 'bg-[#E0D5F7] px-2 py-2 rounded-md' : ''} nav-link active text-dark`}
                                    onClick={() => setActiveTab('NewTransfer')}
                                >
                                    New Transfer
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`${activeTab === 'Beneficiaries' ? 'bg-[#E0D5F7] px-2 py-2 rounded-md' : ''} nav-link text-dark`}
                                    onClick={() => setActiveTab('Beneficiaries')}
                                >
                                    Beneficiaries
                                </button>
                            </li>
                        </ul>


                        <div className="tab-content">
                            {activeTab === 'NewTransfer' && (<div
                                className="tab-pane active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div className="w-full">
                                    <div className="flex justify-center text-center">
                                        <button
                                            id="states-button"
                                            data-dropdown-toggle="dropdown-states"
                                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 rounded-s-lg"
                                            type="button"
                                        >
                                            <span className="rounded-full m-1 shadow-2xl shadow-gray-900">
                                                <svg
                                                    width="20"
                                                    height="21"
                                                    className="rounded-full"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        y="0.678711"
                                                        width="19.6429"
                                                        height="19.6429"
                                                        rx="2"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M13.75 0.678711H19C19.5523 0.678711 20 1.12643 20 1.67871V19.3216C20 19.8739 19.5523 20.3216 19 20.3216H13.75V0.678711Z"
                                                        fill="#3E8051"
                                                    />
                                                    <path
                                                        d="M0 1.67871C0 1.12643 0.447715 0.678711 1 0.678711H6.25V20.3216H1C0.447715 20.3216 0 19.8739 0 19.3216V1.67871Z"
                                                        fill="#3E8051"
                                                    />
                                                </svg>
                                            </span>
                                            Nigeria
                                            <span className="m-1">
                                                <svg
                                                    className="w-2.5 h-2.5 ms-2.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        strokeLineJoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            id="dropdown-states"
                                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                                        >
                                            <ul
                                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="states-button"
                                            >
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <div className="inline-flex items-center">
                                                            <svg
                                                                width="20"
                                                                height="21"
                                                                viewBox="0 0 20 21"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    y="0.678711"
                                                                    width="19.6429"
                                                                    height="19.6429"
                                                                    rx="2"
                                                                    fill="white"
                                                                />
                                                                <path
                                                                    d="M13.75 0.678711H19C19.5523 0.678711 20 1.12643 20 1.67871V19.3216C20 19.8739 19.5523 20.3216 19 20.3216H13.75V0.678711Z"
                                                                    fill="#3E8051"
                                                                />
                                                                <path
                                                                    d="M0 1.67871C0 1.12643 0.447715 0.678711 1 0.678711H6.25V20.3216H1C0.447715 20.3216 0 19.8739 0 19.3216V1.67871Z"
                                                                    fill="#3E8051"
                                                                />
                                                            </svg>
                                                            Nigeria
                                                        </div>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <form>
                                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                                            <div className="text-start">
                                                <label
                                                    for="search"
                                                    className="mb-2 text-md font-medium text-gray-900"
                                                >Bank</label
                                                >
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-y-0 start-0 mr-2 flex items-center ps-3 pointer-events-none"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                strokeLineJoin="round"
                                                                stroke-width="2"
                                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="search"
                                                        id="bank"
                                                        name="bank"
                                                        className="block w-full px-5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Search"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-start">
                                                <label
                                                    for="last_name"
                                                    className="block mb-2 text-md font-medium text-gray-900"
                                                >Account Number</label
                                                >
                                                <input
                                                    type="number"
                                                    id="acctnumber"
                                                    name="acctnumber"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />

                                            </div>
                                            <div className="text-start">
                                                <label
                                                    for="company"
                                                    className="block mb-2 text-md font-medium text-gray-900"
                                                >Amount</label
                                                >
                                                <input
                                                    type="number"
                                                    id="amount"
                                                    name="amount"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div className="text-start">
                                                <label
                                                    for="phone"
                                                    className="block mb-2 text-md font-medium text-gray-900"
                                                >Description</label
                                                >
                                                <input
                                                    type="tel"
                                                    id="Description"
                                                    name="Description"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="(optional)"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center m-3">
                                            <p className="text-center mx-2 text-2xl">Save beneficiary</p>
                                            <div className="form-check form-switch inline">
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
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="text-white bg-[#632FD9] card-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center "
                                            >
                                                <a
                                                    href="/Dashboard/sendMoney/sendToBank/Verify"
                                                    className="text-white decoration-none text-capitalize"
                                                >
                                                    Send money
                                                </a>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>)}
                            {activeTab === 'Beneficiaries' && (
                                <div
                                    className="tab-pane"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div className="w-full">
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                className="px-2"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                            >
                                                <circle cx="20" cy="20" r="20" fill="#B7B7B7" />
                                                <mask
                                                    id="mask0_3660_23405"

                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                >
                                                    <circle cx="20" cy="20" r="20" fill="#3E3E3E" />
                                                </mask>
                                                <g mask="url(#mask0_3660_23405)">
                                                    <ellipse
                                                        cx="20"
                                                        cy="35.2004"
                                                        rx="15.2"
                                                        ry="8.8"
                                                        fill="#828282"
                                                    />
                                                </g>
                                                <circle cx="20" cy="17.0008" r="7.2" fill="#828282" />
                                            </svg>
                                            <div className="flex justify-between w-full mt-2">
                                                <h1
                                                    className="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                                >
                                                    bayo
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
