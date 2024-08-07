import Link from 'next/link';
import React from 'react';



const Page = () => {
    return (
        <div
            class="flex items-center justify-center h-screen text-center"
            style={{ height: "100vh" }}
        >
            <div class="p-3" style={{
                height: "100%", width: '400px'
            }}>
                < div class="" >
                    <div class="flex justify-start pt-12 mb-12">
                        <div class="flex justify-start items-start text-start mt-3">
                            <Link href='/Dashboard/Home'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div class="w-full flex justify-center text-center items-center">
                            <h1 class="w-full my-2 font-bold text-2xl">Send Money</h1>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <g opacity="0.7">
                                    <path
                                        d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                        fill="#E0D5F7"
                                    />
                                    <path
                                        d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                        stroke="#632FD9"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M22 32C20.6167 32 19.3167 31.7375 18.1 31.2125C16.8833 30.6875 15.825 29.975 14.925 29.075C14.025 28.175 13.3125 27.1167 12.7875 25.9C12.2625 24.6833 12 23.3833 12 22C12 20.6167 12.2625 19.3167 12.7875 18.1C13.3125 16.8833 14.025 15.825 14.925 14.925C15.825 14.025 16.8833 13.3125 18.1 12.7875C19.3167 12.2625 20.6167 12 22 12C23.3833 12 24.6833 12.2625 25.9 12.7875C27.1167 13.3125 28.175 14.025 29.075 14.925C29.975 15.825 30.6875 16.8833 31.2125 18.1C31.7375 19.3167 32 20.6167 32 22V23.325C32 24.2583 31.6708 25.0458 31.0125 25.6875C30.3542 26.3292 29.55 26.65 28.6 26.65C28 26.65 27.4333 26.5042 26.9 26.2125C26.3667 25.9208 25.9583 25.5083 25.675 24.975C25.2417 25.5417 24.7 25.9625 24.05 26.2375C23.4 26.5125 22.7167 26.65 22 26.65C20.7 26.65 19.5958 26.2 18.6875 25.3C17.7792 24.4 17.325 23.3 17.325 22C17.325 20.7 17.7792 19.5917 18.6875 18.675C19.5958 17.7583 20.7 17.3 22 17.3C23.3 17.3 24.4042 17.7583 25.3125 18.675C26.2208 19.5917 26.675 20.7 26.675 22V23.325C26.675 23.8417 26.8625 24.275 27.2375 24.625C27.6125 24.975 28.0667 25.15 28.6 25.15C29.1167 25.15 29.5625 24.975 29.9375 24.625C30.3125 24.275 30.5 23.8417 30.5 23.325V22C30.5 19.6333 29.675 17.625 28.025 15.975C26.375 14.325 24.3667 13.5 22 13.5C19.6333 13.5 17.625 14.325 15.975 15.975C14.325 17.625 13.5 19.6333 13.5 22C13.5 24.3667 14.325 26.375 15.975 28.025C17.625 29.675 19.6333 30.5 22 30.5H27.35V32H22ZM22 25.15C22.8833 25.15 23.6333 24.8458 24.25 24.2375C24.8667 23.6292 25.175 22.8833 25.175 22C25.175 21.1 24.8667 20.3417 24.25 19.725C23.6333 19.1083 22.8833 18.8 22 18.8C21.1167 18.8 20.3667 19.1083 19.75 19.725C19.1333 20.3417 18.825 21.1 18.825 22C18.825 22.8833 19.1333 23.6292 19.75 24.2375C20.3667 24.8458 21.1167 25.15 22 25.15Z"
                                        fill="black"
                                    />
                                </g>
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Send with your @ Urban Pay tag
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Send money to other urbanpay users with your tag
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/sendMoney/sendToBank"
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
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <path
                                    d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                    fill="#FFD4CB"
                                />
                                <path
                                    d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                    stroke="#FF947D"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M14 27.9998V20.9998M18 27.9998V20.9998M22 27.9998V20.9998M26 27.9998V20.9998M30 27.9998V20.9998M11 31.9998H33M22.37 12.1498L31.37 15.7498C31.72 15.8898 32 16.3098 32 16.6798V19.9998C32 20.5498 31.55 20.9998 31 20.9998H13C12.45 20.9998 12 20.5498 12 19.9998V16.6798C12 16.3098 12.28 15.8898 12.63 15.7498L21.63 12.1498C21.83 12.0698 22.17 12.0698 22.37 12.1498ZM32 31.9998H12V28.9998C12 28.4498 12.45 27.9998 13 27.9998H31C31.55 27.9998 32 28.4498 32 28.9998V31.9998Z"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    strokeLineJoin="round"
                                />
                                <path
                                    d="M22 18.5C22.197 18.5 22.392 18.4612 22.574 18.3858C22.756 18.3104 22.9214 18.1999 23.0607 18.0607C23.1999 17.9214 23.3104 17.756 23.3858 17.574C23.4612 17.392 23.5 17.197 23.5 17C23.5 16.803 23.4612 16.608 23.3858 16.426C23.3104 16.244 23.1999 16.0786 23.0607 15.9393C22.9214 15.8001 22.756 15.6896 22.574 15.6142C22.392 15.5388 22.197 15.5 22 15.5C21.6022 15.5 21.2206 15.658 20.9393 15.9393C20.658 16.2206 20.5 16.6022 20.5 17C20.5 17.3978 20.658 17.7794 20.9393 18.0607C21.2206 18.342 21.6022 18.5 22 18.5Z"
                                    stroke="#222222"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    strokeLineJoin="round"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Send to bank account
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Send money to local bank accounts
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/sendMoney/sendToBank"
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
                                width="42"
                                height="42"
                                viewBox="0 0 42 42"
                                fill="none"
                            >
                                <path
                                    d="M1 0.5H0.5V1V34C0.5 38.1421 3.85787 41.5 8 41.5H41H41.5V41V8C41.5 3.85786 38.1421 0.5 34 0.5H1Z"
                                    fill="#D6FFF0"
                                />
                                <path
                                    d="M1 0.5H0.5V1V34C0.5 38.1421 3.85787 41.5 8 41.5H41H41.5V41V8C41.5 3.85786 38.1421 0.5 34 0.5H1Z"
                                    stroke="#72FFCB"
                                />
                                <path
                                    d="M22 30V28H24V30H22ZM20 28V23H22V28H20ZM28 25V21H30V25H28ZM26 21V19H28V21H26ZM14 23V21H16V23H14ZM12 21V19H14V21H12ZM21 14V12H23V14H21ZM13.25 16.75H16.75V13.25H13.25V16.75ZM12 18V12H18V18H12ZM13.25 28.75H16.75V25.25H13.25V28.75ZM12 30V24H18V30H12ZM25.25 16.75H28.75V13.25H25.25V16.75ZM24 18V12H30V18H24ZM26 30V27H24V25H28V28H30V30H26ZM22 23V21H26V23H22ZM18 23V21H16V19H22V21H20V23H18ZM19 18V14H21V16H23V18H19ZM14.25 15.75V14.25H15.75V15.75H14.25ZM14.25 27.75V26.25H15.75V27.75H14.25ZM26.25 15.75V14.25H27.75V15.75H26.25Z"
                                    fill="black"
                                />
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        Scan QR Code
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Scan an urbanpay user’s QR code to send
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/sendMoney/sendMoneyScan"
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
                                width="44"
                                height="44"
                                viewBox="0 0 44 44"
                                fill="none"
                            >
                                <g opacity="0.7">
                                    <path
                                        d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                        fill="#BCBCFF"
                                    />
                                    <path
                                        d="M2 1.25H1.25V2V35C1.25 39.2802 4.71979 42.75 9 42.75H42H42.75V42V9C42.75 4.71979 39.2802 1.25 35 1.25H2Z"
                                        stroke="#0000C1"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M16.25 30L17.325 25.75H13.5L13.875 24.25H17.7L18.825 19.75H14.5L14.875 18.25H19.2L20.25 14H21.725L20.675 18.25H25.2L26.25 14H27.725L26.675 18.25H30.5L30.125 19.75H26.3L25.175 24.25H29.5L29.125 25.75H24.8L23.75 30H22.25L23.325 25.75H18.8L17.75 30H16.25ZM19.175 24.25H23.7L24.825 19.75H20.3L19.175 24.25Z"
                                        fill="black"
                                    />
                                </g>
                            </svg>
                            <div class="flex justify-between w-full mt-2">
                                <div class="ml-2">
                                    <h1 class="ml-2 text-1xl font-bold text-start">
                                        USSD
                                    </h1>
                                    <p class="ml-2 text-sm text-start">
                                        Send money with banks that support Urbanpay
                                    </p>
                                </div>

                                <Link
                                    href="/Dashboard/sendMoney/sendMoneyUssd"
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

            </div >

        </div >

    );
}

export default Page;
