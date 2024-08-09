import React from 'react';
import Link from 'next/link';
import BackBtn from '../../../../components/BackBtn';



const Page = () => {
    return (
        <>
            <main className='flex items-center justify-center text-center'>
                <div className="p-3" style={{ height: "100%", width: "400px" }}>
                    <div className="mb-10">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between pt-12 mb-12">
                                <div className="flex items-start justify-start">
                                    <BackBtn />
                                </div>
                                <h1 className="flex-grow text-2xl font-bold text-center">GENERAL</h1>
                            </div>

                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#F6E9FE" stroke="#632FD9" />
                                    <path d="M12 25.9998V18.9998M16 25.9998V18.9998M20 25.9998V18.9998M24 25.9998V18.9998M28 25.9998V18.9998M9 29.9998H31M20.37 10.1498L29.37 13.7498C29.72 13.8898 30 14.3098 30 14.6798V17.9998C30 18.5498 29.55 18.9998 29 18.9998H11C10.45 18.9998 10 18.5498 10 17.9998V14.6798C10 14.3098 10.28 13.8898 10.63 13.7498L19.63 10.1498C19.83 10.0698 20.17 10.0698 20.37 10.1498ZM30 29.9998H10V26.9998C10 26.4498 10.45 25.9998 11 25.9998H29C29.55 25.9998 30 26.4498 30 26.9998V29.9998Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20 16.5C20.197 16.5 20.392 16.4612 20.574 16.3858C20.756 16.3104 20.9214 16.1999 21.0607 16.0607C21.1999 15.9214 21.3104 15.756 21.3858 15.574C21.4612 15.392 21.5 15.197 21.5 15C21.5 14.803 21.4612 14.608 21.3858 14.426C21.3104 14.244 21.1999 14.0786 21.0607 13.9393C20.9214 13.8001 20.756 13.6896 20.574 13.6142C20.392 13.5388 20.197 13.5 20 13.5C19.6022 13.5 19.2206 13.658 18.9393 13.9393C18.658 14.2206 18.5 14.6022 18.5 15C18.5 15.3978 18.658 15.7794 18.9393 16.0607C19.2206 16.342 19.6022 16.5 20 16.5Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Buy Airtime
                                    </h1>
                                    <Link
                                        href="/Dashboard/Home/Paybills/Airtime"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#FFD4CB" stroke="#FF947D" />
                                    <path d="M10 16.5049H30M14 24.5049H16M18.5 24.5049H22.5" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.44 11.5049H25.55C29.11 11.5049 30 12.3849 30 15.8949V24.1049C30 27.6149 29.11 28.4949 25.56 28.4949H14.44C10.89 28.5049 10 27.6249 10 24.1149V15.8949C10 12.3849 10.89 11.5049 14.44 11.5049Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Buy Data
                                    </h1>
                                    <Link
                                        href="/Dashboard/Home/Paybills/Data"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2130_9183)">
                                        <path d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z" fill="#D6FFF0" />
                                        <path d="M17.5018 10V13M22.5018 10V13M20.0018 30V24M18.5018 24H21.5018C24.0018 24 25.5018 22.2 25.5018 20V14.91C25.5018 13.86 24.6418 13 23.5918 13H16.4218C15.3718 13 14.5118 13.86 14.5118 14.91V20C14.5018 22.2 16.0018 24 18.5018 24Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H41.5V33C41.5 36.5899 38.5899 39.5 35 39.5H0.5V7Z" stroke="#72FFCB" />
                                    <defs>
                                        <clipPath id="clip0_2130_9183">
                                            <path d="M0 7C0 3.13401 3.13401 0 7 0H42V33C42 36.866 38.866 40 35 40H0V7Z" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Electricity
                                    </h1>
                                    <Link
                                        href="/Dashboard/Home/Paybills/Electricity"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H35.5V29C35.5 32.5899 32.5899 35.5 29 35.5H0.5V7Z" fill="#BCBCFF" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H35.5V29C35.5 32.5899 32.5899 35.5 29 35.5H0.5V7Z" stroke="#0000C1" />
                                    <path d="M25.4987 10.5H10.4987C9.58203 10.5 8.83203 11.25 8.83203 12.1667V22.1667C8.83203 23.0833 9.58203 23.8333 10.4987 23.8333H14.6654V25.5H21.332V23.8333H25.4987C26.4154 23.8333 27.157 23.0833 27.157 22.1667L27.1654 12.1667C27.1654 11.25 26.4154 10.5 25.4987 10.5ZM25.4987 22.1667H10.4987V12.1667H25.4987V22.1667Z" fill="black" />
                                </svg>

                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Streaming Subscription
                                    </h1>
                                    <Link
                                        href="/Dashboard/Home/Paybills/Streaming"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#FFD4CB" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" stroke="#FF947D" />
                                    <path d="M10.5735 16.4635L19.2325 12.1345C19.3158 12.0929 19.4075 12.0713 19.5005 12.0713C19.5936 12.0713 19.6853 12.0929 19.7685 12.1345L28.4275 16.4645C28.5271 16.5143 28.6109 16.5909 28.6694 16.6857C28.7279 16.7804 28.7589 16.8896 28.7589 17.001C28.7589 17.1123 28.7279 17.2215 28.6694 17.3163C28.6109 17.411 28.5271 17.4876 28.4275 17.5375L19.7685 21.8665C19.6853 21.908 19.5936 21.9296 19.5005 21.9296C19.4075 21.9296 19.3158 21.908 19.2325 21.8665L10.5735 17.5365C10.474 17.4866 10.3902 17.41 10.3317 17.3153C10.2732 17.2205 10.2422 17.1113 10.2422 17C10.2422 16.8886 10.2732 16.7794 10.3317 16.6847C10.3902 16.5899 10.474 16.5133 10.5735 16.4635Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30.5 21V17.5L28.5 16.5M12.5 18.5V23.912C12.4999 24.2904 12.6072 24.661 12.8093 24.9809C13.0115 25.3007 13.3002 25.5567 13.642 25.719L18.642 28.093C18.9101 28.2203 19.2032 28.2864 19.5 28.2864C19.7968 28.2864 20.0899 28.2203 20.358 28.093L25.358 25.719C25.6998 25.5567 25.9885 25.3007 26.1907 24.9809C26.3928 24.661 26.5001 24.2904 26.5 23.912V18.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Education
                                    </h1>
                                    <Link
                                        href=""
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#D6FFF0" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" stroke="#72FFCB" />
                                    <path d="M26.8981 13.1056C25.5345 11.7421 23.7973 10.8135 21.9059 10.4373C20.0146 10.0611 18.0543 10.2542 16.2727 10.9922C14.4911 11.7302 12.9684 12.9798 11.8971 14.5832C10.8257 16.1866 10.2539 18.0716 10.2539 20C10.2539 21.9284 10.8257 23.8134 11.8971 25.4168C12.9684 27.0202 14.4911 28.2698 16.2727 29.0078C18.0543 29.7458 20.0146 29.9389 21.9059 29.5627C23.7973 29.1865 25.5345 28.2579 26.8981 26.8944C27.8103 25.9928 28.5344 24.9192 29.0287 23.7357C29.5229 22.5523 29.7774 21.2825 29.7774 20C29.7774 18.7175 29.5229 17.4477 29.0287 16.2643C28.5344 15.0808 27.8103 14.0072 26.8981 13.1056ZM14.165 14.1659C15.515 12.8141 17.2939 11.9751 19.1956 11.7931C19.0123 13.6948 18.1696 15.4725 16.8134 16.8181C15.4659 18.1719 13.6879 19.0125 11.7866 19.1947C11.9701 17.2928 12.8112 15.5144 14.165 14.1659ZM11.7819 20.7013C14.0848 20.5174 16.2461 19.5162 17.8756 17.8784C19.5144 16.2495 20.5163 14.088 20.7003 11.7847C22.6392 11.9463 24.4581 12.7897 25.8342 14.1651C27.2103 15.5405 28.0546 17.359 28.2172 19.2978C25.915 19.4863 23.7546 20.486 22.1208 22.1188C20.487 23.7516 19.4859 25.9114 19.2959 28.2134C17.357 28.0518 15.5381 27.2084 14.162 25.833C12.7859 24.4576 11.9417 22.6391 11.7791 20.7003L11.7819 20.7013ZM25.8369 25.8341C24.4866 27.1855 22.7079 28.0245 20.8062 28.2069C20.9935 26.3067 21.8341 24.5303 23.1847 23.1806C24.5353 21.8309 26.3122 20.9914 28.2125 20.8053C28.0297 22.7069 27.1896 24.4852 25.8369 25.8341Z" fill="black" />
                                </svg>


                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Betting
                                    </h1>
                                    <Link
                                        href="/Dashboard/Home/Paybills/Betting"
                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#F6E9FE" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" stroke="#632FD9" />
                                    <path d="M30 20C30 14.477 25.523 10 20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.9989 10.0498C20.9989 10.0498 23.9989 13.9998 23.9989 19.9998M18.9989 29.9498C18.9989 29.9498 15.9989 25.9998 15.9989 19.9998C15.9989 13.9998 18.9989 10.0498 18.9989 10.0498M10.6289 23.4998H19.9989M10.6289 16.4998H29.3689" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M29.8792 25.9167C30.3732 26.2207 30.3422 26.9597 29.8342 27.0177L27.2672 27.3087L26.1162 29.6207C25.8882 30.0797 25.1832 29.8547 25.0662 29.2867L23.8112 23.1707C23.7122 22.6907 24.1442 22.3887 24.5612 22.6457L29.8792 25.9167Z" stroke="black" stroke-width="1.5" />
                                </svg>


                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Internet
                                    </h1>

                                    <Link href='/Dashboard/Home/Paybills/Internent'>
                                        <button
                                            className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fillRule="none"
                                            >
                                                <path
                                                    fillrule-rule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                    fillRule="#9C9C9C"
                                                />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg width="60" height="60" className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" fill="#BCBCFF" />
                                    <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z" stroke="#0000C1" />
                                    <g clip-path="url(#clip0_2145_9277)">
                                        <path d="M18 19.333H20V20.6663H18V19.333Z" fill="black" />
                                        <path d="M25.632 17.4464C24.4497 15.5116 22.8367 13.8758 20.9187 12.6664C20.0326 12.1048 19.0226 11.7687 17.9767 11.6873C16.9308 11.606 15.8809 11.7819 14.9187 12.1997C14.077 12.5967 13.3447 13.1926 12.7848 13.936C12.225 14.6793 11.8545 15.5478 11.7054 16.4664C11.652 16.7797 11.612 17.0797 11.572 17.373C10.9479 17.4742 10.3799 17.7939 9.96965 18.275C9.55935 18.7561 9.33337 19.3674 9.33203 19.9997V24.0864C9.33203 24.44 9.47251 24.7791 9.72256 25.0292C9.9726 25.2792 10.3117 25.4197 10.6654 25.4197V19.9997C10.6654 19.6461 10.8058 19.3069 11.0559 19.0569C11.3059 18.8068 11.6451 18.6664 11.9987 18.6664H24.4854C25.7702 18.6681 27.002 19.1793 27.9105 20.0879C28.8191 20.9964 29.3303 22.2282 29.332 23.513V23.9997H27.9987C27.7171 23.3131 27.1926 22.7542 26.5253 22.4297C25.8579 22.1051 25.0945 22.0377 24.3805 22.2401C23.6666 22.4426 23.0522 22.9009 22.6546 23.5274C22.257 24.154 22.104 24.905 22.2248 25.6372C22.3456 26.3694 22.7318 27.0315 23.3096 27.4971C23.8874 27.9627 24.6165 28.1993 25.3576 28.1617C26.0987 28.1241 26.8 27.8149 27.3278 27.2932C27.8555 26.7714 28.1726 26.0737 28.2187 25.333H29.332C29.6857 25.333 30.0248 25.1926 30.2748 24.9425C30.5249 24.6925 30.6654 24.3533 30.6654 23.9997V23.513C30.6627 22.0743 30.1587 20.6815 29.24 19.5743C28.3214 18.467 27.0455 17.7146 25.632 17.4464ZM15.332 17.333H12.6187C12.6187 17.1264 12.6787 16.913 12.7187 16.6664C12.8339 15.934 13.1345 15.2433 13.5919 14.6598C14.0493 14.0764 14.6483 13.6197 15.332 13.333V17.333ZM16.6654 17.333V13.053C17.91 12.8914 19.1723 13.1646 20.2387 13.8264C21.6945 14.7332 22.951 15.9262 23.932 17.333H16.6654ZM25.1987 26.9197C24.8691 26.9197 24.5468 26.822 24.2727 26.6388C23.9987 26.4557 23.785 26.1954 23.6589 25.8908C23.5328 25.5863 23.4997 25.2512 23.5641 24.9279C23.6284 24.6046 23.7871 24.3076 24.0202 24.0745C24.2533 23.8414 24.5502 23.6827 24.8735 23.6184C25.1968 23.5541 25.532 23.5871 25.8365 23.7132C26.141 23.8394 26.4013 24.053 26.5845 24.3271C26.7676 24.6012 26.8654 24.9234 26.8654 25.253C26.8654 25.6951 26.6898 26.119 26.3772 26.4315C26.0646 26.7441 25.6407 26.9197 25.1987 26.9197Z" fill="black" />
                                        <path d="M17.447 24.0001C17.1654 23.3135 16.6409 22.7546 15.9736 22.4301C15.3062 22.1056 14.5428 22.0381 13.8288 22.2406C13.1149 22.443 12.5005 22.9013 12.1029 23.5279C11.7053 24.1544 11.5523 24.9055 11.6731 25.6376C11.7939 26.3698 12.1801 27.0319 12.7579 27.4975C13.3357 27.9631 14.0648 28.1997 14.8059 28.1621C15.547 28.1245 16.2483 27.8153 16.7761 27.2936C17.3038 26.7719 17.6209 26.0741 17.667 25.3335H21.2003V25.1668C21.1871 24.7735 21.2321 24.3803 21.3337 24.0001H17.447ZM14.667 26.9201C14.3374 26.9201 14.0151 26.8224 13.741 26.6392C13.467 26.4561 13.2533 26.1958 13.1272 25.8913C13.0011 25.5867 12.968 25.2516 13.0324 24.9283C13.0967 24.605 13.2554 24.308 13.4885 24.0749C13.7216 23.8419 14.0185 23.6831 14.3418 23.6188C14.6651 23.5545 15.0003 23.5875 15.3048 23.7137C15.6093 23.8398 15.8696 24.0534 16.0528 24.3275C16.2359 24.6016 16.3337 24.9238 16.3337 25.2535C16.3337 25.6955 16.1581 26.1194 15.8455 26.432C15.5329 26.7445 15.109 26.9201 14.667 26.9201Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2145_9277">
                                            <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="flex justify-between w-full mt-2 ml-3">
                                    <h1
                                        className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex"
                                    >
                                        Transport
                                    </h1>
                                    <button

                                        className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fillRule="none"
                                        >
                                            <path
                                                fillrule-rule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
                                                fillRule="#9C9C9C"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </main >
        </>
    )
}

export default Page
