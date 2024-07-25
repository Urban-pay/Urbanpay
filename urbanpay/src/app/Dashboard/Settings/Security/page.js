"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const page = () => {

    const [isChecked, setIsChecked] = useState(true);


    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <main className='"container flex items-center justify-center h-screen text-center'>
            <div className="p-3 h-full w-[400px]">
                <div className="mb-[80%]">
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex items-start justify-start mt-3 text-start">
                            <span >
                                <span >
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
                                </span>
                            </span>
                        </div>
                        <div className="flex items-center justify-center w-full text-center">
                            <h1 className="w-full my-2 text-2xl font-bold">Security</h1>
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    fill="#BCBCFF"
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#0000C1"
                                />
                                <path
                                    d="M19 15C19 13.9391 18.5786 12.9217 17.8284 12.1716C17.0783 11.4214 16.0609 11 15 11C13.9391 11 12.9217 11.4214 12.1716 12.1716C11.4214 12.9217 11 13.9391 11 15C11 16.0609 11.4214 17.0783 12.1716 17.8284C12.9217 18.5786 13.9391 19 15 19C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15ZM17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5C14.337 17.5 13.7011 17.2366 13.2322 16.7678C12.7634 16.2989 12.5 15.663 12.5 15C12.5 14.337 12.7634 13.7011 13.2322 13.2322C13.7011 12.7634 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.7634 16.7678 13.2322C17.2366 13.7011 17.5 14.337 17.5 15ZM29 15C29 13.9391 28.5786 12.9217 27.8284 12.1716C27.0783 11.4214 26.0609 11 25 11C23.9391 11 22.9217 11.4214 22.1716 12.1716C21.4214 12.9217 21 13.9391 21 15C21 16.0609 21.4214 17.0783 22.1716 17.8284C22.9217 18.5786 23.9391 19 25 19C26.0609 19 27.0783 18.5786 27.8284 17.8284C28.5786 17.0783 29 16.0609 29 15ZM27.5 15C27.5 15.663 27.2366 16.2989 26.7678 16.7678C26.2989 17.2366 25.663 17.5 25 17.5C24.337 17.5 23.7011 17.2366 23.2322 16.7678C22.7634 16.2989 22.5 15.663 22.5 15C22.5 14.337 22.7634 13.7011 23.2322 13.2322C23.7011 12.7634 24.337 12.5 25 12.5C25.663 12.5 26.2989 12.7634 26.7678 13.2322C27.2366 13.7011 27.5 14.337 27.5 15ZM15 29C13.9391 29 12.9217 28.5786 12.1716 27.8284C11.4214 27.0783 11 26.0609 11 25C11 23.9391 11.4214 22.9217 12.1716 22.1716C12.9217 21.4214 13.9391 21 15 21C16.0609 21 17.0783 21.4214 17.8284 22.1716C18.5786 22.9217 19 23.9391 19 25C19 26.0609 18.5786 27.0783 17.8284 27.8284C17.0783 28.5786 16.0609 29 15 29ZM15 27.5C15.663 27.5 16.2989 27.2366 16.7678 26.7678C17.2366 26.2989 17.5 25.663 17.5 25C17.5 24.337 17.2366 23.7011 16.7678 23.2322C16.2989 22.7634 15.663 22.5 15 22.5C14.337 22.5 13.7011 22.7634 13.2322 23.2322C12.7634 23.7011 12.5 24.337 12.5 25C12.5 25.663 12.7634 26.2989 13.2322 26.7678C13.7011 27.2366 14.337 27.5 15 27.5ZM29 25C29 23.9391 28.5786 22.9217 27.8284 22.1716C27.0783 21.4214 26.0609 21 25 21C23.9391 21 22.9217 21.4214 22.1716 22.1716C21.4214 22.9217 21 23.9391 21 25C21 26.0609 21.4214 27.0783 22.1716 27.8284C22.9217 28.5786 23.9391 29 25 29C26.0609 29 27.0783 28.5786 27.8284 27.8284C28.5786 27.0783 29 26.0609 29 25ZM27.5 25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C24.337 27.5 23.7011 27.2366 23.2322 26.7678C22.7634 26.2989 22.5 25.663 22.5 25C22.5 24.337 22.7634 23.7011 23.2322 23.2322C23.7011 22.7634 24.337 22.5 25 22.5C25.663 22.5 26.2989 22.7634 26.7678 23.2322C27.2366 23.7011 27.5 24.337 27.5 25Z"
                                    fill="black"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <h1 className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex">
                                    Change pin
                                </h1>
                                <span

                                    className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                                </span>
                            </div>
                        </div>
                        <div className="flex my-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    fill="#FFD4CB"
                                />
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    stroke="#FF947D"
                                />
                                <path
                                    d="M26.4698 24.83L26.8598 27.99C26.9598 28.82 26.0698 29.4 25.3598 28.97L21.1698 26.48C20.7098 26.48 20.2598 26.45 19.8198 26.39C20.5778 25.5113 20.9964 24.3904 20.9998 23.23C20.9998 20.39 18.5398 18.09 15.4998 18.09C14.3398 18.09 13.2698 18.42 12.3798 19C12.3498 18.75 12.3398 18.5 12.3398 18.24C12.3398 13.69 16.2898 10 21.1698 10C26.0498 10 29.9998 13.69 29.9998 18.24C29.9998 20.94 28.6098 23.33 26.4698 24.83Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21 23.2298C21 24.4198 20.56 25.5198 19.82 26.3898C18.83 27.5898 17.26 28.3598 15.5 28.3598L12.89 29.9098C12.45 30.1798 11.89 29.8098 11.95 29.2998L12.2 27.3298C10.86 26.3998 10 24.9098 10 23.2298C10 21.4698 10.94 19.9198 12.38 18.9998C13.27 18.4198 14.34 18.0898 15.5 18.0898C18.54 18.0898 21 20.3898 21 23.2298Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <h1 className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex">
                                    Privacy policy
                                </h1>
                                <span

                                    className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
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
                                </span>
                            </div>
                        </div>
                        <div className="flex my-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H39.5V33C39.5 36.5899 36.5899 39.5 33 39.5H0.5V7Z"
                                    fill="#FBFFCB"
                                    stroke="#ADBC00"
                                />
                                <path
                                    d="M18 18.5C18 19.328 17.552 20 17 20C16.448 20 16 19.328 16 18.5C16 17.672 16.448 17 17 17C17.552 17 18 17.672 18 18.5ZM24 18.5C24 19.328 23.552 20 23 20C22.448 20 22 19.328 22 18.5C22 17.672 22.448 17 23 17C23.552 17 24 17.672 24 18.5Z"
                                    fill="#222222"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20 9.25C14.042 9.25 9.25 14.219 9.25 20.3V27.723C9.25 29.57 11.162 30.846 12.843 29.981C13.1769 29.8084 13.5514 29.73 13.9265 29.7541C14.3016 29.7782 14.663 29.904 14.972 30.118C15.5683 30.5293 16.2756 30.7495 17 30.7495C17.7244 30.7495 18.4317 30.5293 19.028 30.118L19.381 29.876C19.5627 29.7498 19.7787 29.6821 20 29.6821C20.2213 29.6821 20.4373 29.7498 20.619 29.876L20.972 30.118C21.5683 30.5293 22.2756 30.7495 23 30.7495C23.7244 30.7495 24.4317 30.5293 25.028 30.118C25.3371 29.9038 25.6987 29.7779 26.074 29.7538C26.4492 29.7297 26.824 29.8082 27.158 29.981C28.838 30.846 30.75 29.569 30.75 27.723V20.301C30.75 14.219 25.958 9.25 20 9.25ZM10.75 20.3C10.75 15.005 14.912 10.75 20 10.75C25.088 10.75 29.25 15.005 29.25 20.3V27.723C29.25 28.521 28.46 28.965 27.844 28.647C27.2691 28.3505 26.6245 28.2157 25.979 28.2571C25.3334 28.2985 24.7113 28.5145 24.179 28.882C23.8326 29.1219 23.4213 29.2504 23 29.2504C22.5787 29.2504 22.1674 29.1219 21.821 28.882L21.468 28.639C21.0364 28.3412 20.5244 28.1817 20 28.1817C19.4756 28.1817 18.9636 28.3412 18.532 28.639L18.179 28.881C17.8326 29.1209 17.4213 29.2494 17 29.2494C16.5787 29.2494 16.1674 29.1209 15.821 28.881C15.2886 28.5136 14.6664 28.2978 14.0209 28.2566C13.3754 28.2154 12.7308 28.3503 12.156 28.647C11.539 28.965 10.75 28.521 10.75 27.723V20.3Z"
                                    fill="#222222"
                                />
                            </svg>
                            <div className="flex justify-between w-full mt-2">
                                <h1 className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex">
                                    Ghost Mode
                                </h1>
                                <span

                                    className="justify-center mt-2 text-center text-decoration-none align-center d-flex"
                                >
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                            checked={isChecked}
                                            onChange={handleChange}
                                        />
                                        <div
                                            className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                        ></div>

                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default page;

