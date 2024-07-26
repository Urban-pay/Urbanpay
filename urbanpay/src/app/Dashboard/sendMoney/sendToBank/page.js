"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    return (
        <div
            class="container flex items-center justify-center h-screen text-center"
            style={{ height: '100vh' }}
        >
            <div class="p-3" style={{ height: '100%', width: '400px' }}>
                <div class="">
                    <div class="flex justify-start pt-12 mb-12">
                        <div class="flex justify-start items-start text-start mt-3">
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
                        <div class="w-full flex justify-center items-center text-center">
                            <div>
                                <div
                                    class="w-full flex justify-center text-center items-center"
                                >
                                    <h1 class="w-full my-2 font-bold text-2xl">Bank Account</h1>
                                </div>
                                <div
                                    class="w-full flex justify-center text-center items-center"
                                >
                                    <p
                                        class="w-full my-2 font-normal text-1xl flex justify-between"
                                    >
                                        <span class="flex">
                                            <span class="inline mt-2">
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
                                                        {/* <image
                                                            id="image0_3660_23189"
                                                            width="512"
                                                            height="512"
                                                            xlink: href="data:image/png;base64,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"
                                                        /> */}
                                                    </defs>
                                                </svg>
                                            </span>
                                            5,436.00
                                        </span>
                                        <span class="inline mt-2">
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

                    <div class="space-y-6">
                        <ul
                            class="justify-center w-full nav nav-pills"
                            id="myTab"
                            role="tablist"
                        >
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link active text-dark"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"

                                >
                                    New Transfer
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link text-dark"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Beneficiaries
                                </button>
                            </li>
                        </ul>


                        <div class="tab-content">
                            <div
                                class="tab-pane active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div class="w-full">
                                    <div class="flex justify-center text-center">
                                        <button
                                            id="states-button"
                                            data-dropdown-toggle="dropdown-states"
                                            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 rounded-s-lg"
                                            type="button"
                                        >
                                            <span class="rounded-full m-1 shadow-2xl shadow-gray-900">
                                                <svg
                                                    width="20"
                                                    height="21"
                                                    class="rounded-full"
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
                                            <span class="m-1">
                                                <svg
                                                    class="w-2.5 h-2.5 ms-2.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            id="dropdown-states"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                                        >
                                            <ul
                                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="states-button"
                                            >
                                                <li>
                                                    <button
                                                        type="button"
                                                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <div class="inline-flex items-center">
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
                                        <div class="grid gap-6 mb-6 md:grid-cols-1">
                                            <div class="text-start">
                                                <label
                                                    for="search"
                                                    class="mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                >Bank</label
                                                >
                                                <div class="relative">
                                                    <div
                                                        class="absolute inset-y-0 start-0 mr-2 flex items-center ps-3 pointer-events-none"
                                                    >
                                                        <svg
                                                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="search"
                                                        id="bank"
                                                        name="bank"
                                                        class="block w-full px-5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Search"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div class="text-start">
                                                <label
                                                    for="last_name"
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                >Account Number</label
                                                >
                                                <input
                                                    type="number"
                                                    id="acctnumber"
                                                    name="acctnumber"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />

                                            </div>
                                            <div class="text-start">
                                                <label
                                                    for="company"
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                >Amount</label
                                                >
                                                <input
                                                    type="number"
                                                    id="amount"
                                                    name="amount"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div class="text-start">
                                                <label
                                                    for="phone"
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                >Description</label
                                                >
                                                <input
                                                    type="tel"
                                                    id="Description"
                                                    name="Description"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="(optional)"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="flex justify-center items-center m-3">
                                            <p class="text-center mx-2">Save beneficiary</p>
                                            <div class="form-check form-switch inline">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input inline px-8 py-3.5"
                                                    role="switch"
                                                    id="beneficiary"
                                                    checked
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                class="text-white card-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                <a
                                                    href="verify.html"
                                                    class="text-white decoration-none text-capitalize"
                                                >
                                                    Send money
                                                </a>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                class="tab-pane"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <div class="w-full">
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="flex cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            class="px-2"
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
                                        <div class="flex justify-between w-full mt-2">
                                            <h1
                                                class="justify-center ml-10 text-2xl mt-3 font-bold text-start align-center d-flex"
                                            >
                                                bayo
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
