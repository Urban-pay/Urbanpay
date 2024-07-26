import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="container flex items-center justify-center h-screen text-center">
            <div className="p-3 w-400 h-full">
                <div className="">
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex justify-start items-start text-start mt-3">
                            <Link href="../home.html">
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
                            </Link>
                        </div>
                        <div className="w-full flex justify-center text-center items-center">
                            <h1 className="w-full my-2 font-bold text-2xl">Add Money</h1>
                        </div>
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
                                    <h1 className="ml-2 text-xl font-bold text-start">
                                        Bank Transfer
                                    </h1>
                                    <p className="ml-2 text-sm text-start">
                                        Add money directly from your bank card
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/addMoneyBank"
                                    className="justify-center mt-2 text-center text-decoration-none align-center flex"
                                >
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
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
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
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    fill="#F6E9FE"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M10 16.5049H30M14 24.5049H16M18.5 24.5049H22.5"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.44 11.5049H25.55C29.11 11.5049 30 12.3849 30 15.8949V24.1049C30 27.6149 29.11 28.4949 25.56 28.4949H14.44C10.89 28.4949 10 27.6149 10 24.1049V15.8949C10 12.3849 10.89 11.5049 14.44 11.5049Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <div className="ml-2">
                                    <h1 className="ml-2 text-xl font-bold text-start">
                                        Top up with bank card
                                    </h1>
                                    <p className="ml-2 text-sm text-start">
                                        Fast payment with a bank card
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/addMoneyCard"
                                    className="justify-center mt-2 text-center text-decoration-none align-center flex"
                                >
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
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex">
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
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M14.25 28L15.325 23.75H11.5L11.875 22.25H15.7L16.825 17.75H12.5L12.875 16.25H17.2L18.25 12H19.725L18.675 16.25H23.2L24.25 12H25.725L24.675 16.25H28.5L28.125 17.75H24.3L23.175 22.25H27.5L27.125 23.75H22.8L21.75 28H20.25L21.325 23.75H16.8L15.75 28H14.25ZM17.175 22.25H21.7L22.825 17.75H18.3L17.175 22.25Z"
                                    fill="black"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">USSD</h1>
                                    <p class="ml-2 text-sm text-start">
                                        Add money using other banks ussd
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/addMoneyUssd"
                                    class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex">
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
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M25 28.5H15C12 28.5 10 27 10 23.5V16.5C10 13 12 11.5 15 11.5H25C28 11.5 30 13 30 16.5V23.5C30 27 28 28.5 25 28.5Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M27 15H24M16 25H13M20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20C23 19.2044 22.6839 18.4413 22.1213 17.8787C21.5587 17.3161 20.7956 17 20 17C19.2044 17 18.4413 17.3161 17.8787 17.8787C17.3161 18.4413 17 19.2044 17 20C17 20.7956 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Request funds
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Fund your account by visiting merchants
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/addMoneyFund"
                                    class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex">
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
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M19.02 27.5H15.5C14.88 27.5 14.33 27.48 13.84 27.41C11.21 27.12 10.5 25.88 10.5 22.5V17.5C10.5 14.12 11.21 12.88 13.84 12.59C14.33 12.52 14.88 12.5 15.5 12.5H18.96M23.02 12.5H24.5C25.12 12.5 25.67 12.52 26.16 12.59C28.79 12.88 29.5 14.12 29.5 17.5V22.5C29.5 25.88 28.79 27.12 26.16 27.41C25.67 27.48 25.12 27.5 24.5 27.5H23.02M23 10V30M16 16.5V23.5"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">Check</h1>
                                    <p class="ml-2 text-sm text-start">
                                        Fund accounts by using check
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/addMoneyCheck"
                                    class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex">
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
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M21 29V27H23V29H21ZM19 27V22H21V27H19ZM27 24V20H29V24H27ZM25 20V18H27V20H25ZM13 22V20H15V22H13ZM11 20V18H13V20H11ZM20 13V11H22V13H20ZM12.25 15.75H15.75V12.25H12.25V15.75ZM11 17V11H17V17H11ZM12.25 27.75H15.75V24.25H12.25V27.75ZM11 29V23H17V29H11ZM24.25 15.75H27.75V12.25H24.25V15.75ZM23 17V11H29V17H23ZM25 29V26H23V24H27V27H29V29H25ZM21 22V20H25V22H21ZM17 22V20H15V18H21V20H19V22H17ZM18 17V13H20V15H22V17H18ZM13.25 14.75V13.25H14.75V14.75H13.25ZM13.25 26.75V25.25H14.75V26.75H13.25ZM25.25 14.75V13.25H26.75V14.75H25.25Z"
                                    fill="black"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Scan my QR Code
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Show QR Code to any Urban Pay user
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/ScanQR"
                                    class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="flex">
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
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#632FD9"
                                />
                                <path
                                    d="M20 30C18.6167 30 17.3167 29.7375 16.1 29.2125C14.8833 28.6875 13.825 27.975 12.925 27.075C12.025 26.175 11.3125 25.1167 10.7875 23.9C10.2625 22.6833 10 21.3833 10 20C10 18.6167 10.2625 17.3167 10.7875 16.1C11.3125 14.8833 12.025 13.825 12.925 12.925C13.825 12.025 14.8833 11.3125 16.1 10.7875C17.3167 10.2625 18.6167 10 20 10C21.3833 10 22.6833 10.2625 23.9 10.7875C25.1167 11.3125 26.175 12.025 27.075 12.925C27.975 13.825 28.6875 14.8833 29.2125 16.1C29.7375 17.3167 30 18.6167 30 20V21.325C30 22.2583 29.6708 23.0458 29.0125 23.6875C28.3542 24.3292 27.55 24.65 26.6 24.65C26 24.65 25.4333 24.5042 24.9 24.2125C24.3667 23.9208 23.9583 23.5083 23.675 22.975C23.2417 23.5417 22.7 23.9625 22.05 24.2375C21.4 24.5125 20.7167 24.65 20 24.65C18.7 24.65 17.5958 24.2 16.6875 23.3C15.7792 22.4 15.325 21.3 15.325 20C15.325 18.7 15.7792 17.5917 16.6875 16.675C17.5958 15.7583 18.7 15.3 20 15.3C21.3 15.3 22.4042 15.7583 23.3125 16.675C24.2208 17.5917 24.675 18.7 24.675 20V21.325C24.675 21.8417 24.8625 22.275 25.2375 22.625C25.6125 22.975 26.0667 23.15 26.6 23.15C27.1167 23.15 27.5625 22.975 27.9375 22.625C28.3125 22.275 28.5 21.8417 28.5 21.325V20C28.5 17.6333 27.675 15.625 26.025 13.975C24.375 12.325 22.3667 11.5 20 11.5C17.6333 11.5 15.625 12.325 13.975 13.975C12.325 15.625 11.5 17.6333 11.5 20C11.5 22.3667 12.325 24.375 13.975 26.025C15.625 27.675 17.6333 28.5 20 28.5H25.35V30H20ZM20 23.15C20.8833 23.15 21.6333 22.8458 22.25 22.2375C22.8667 21.6292 23.175 20.8833 23.175 20C23.175 19.1 22.8667 18.3417 22.25 17.725C21.6333 17.1083 20.8833 16.8 20 16.8C19.1167 16.8 18.3667 17.1083 17.75 17.725C17.1333 18.3417 16.825 19.1 16.825 20C16.825 20.8833 17.1333 21.6292 17.75 22.2375C18.3667 22.8458 19.1167 23.15 20 23.15Z"
                                    fill="black"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Share your @ UrbanPay tag
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Receive money from other Urban Pay users with your unique
                                        urban Pay tag.
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/addMoney/urbanTag"
                                    class="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                            fill="#9C9C9C"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page