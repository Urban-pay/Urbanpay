import React from 'react'
import BackBtn from '../../../../../components/BackBtn';
import Link from 'next/link';


const page = () => {
    return (
        <main className='flex items-center justify-center text-center'>
            <div className="p-3" style={{ height: "100%", width: "400px" }}>
                <div className="flex items-center justify-between pt-12 mb-12">
                    <div className="flex items-start justify-start">
                        <BackBtn />
                    </div>
                    <h1 className="flex-grow text-2xl font-bold text-center">Internet</h1>
                </div>
                <form className="max-w-md mx-auto">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-[#D9D9D9] rounded-lg bg-[#B2B2B2] placeholder-gray-400"
                            placeholder="Search"
                            required
                        />
                    </div>
                </form>

                <div className='flex items-start justify-start mt-5'>
                    <div className='flex items-center justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <circle cx={20} cy={20} r={20} fill="url(#a)" />
                            <circle
                                cx={20}
                                cy={20}
                                r={19.75}
                                stroke="#000"
                                strokeOpacity={0.1}
                                strokeWidth={0.5}
                            />
                            <defs>
                                <pattern
                                    id="a"
                                    width={1}
                                    height={1}
                                    patternContentUnits="objectBoundingBox"
                                >
                                    <use xlinkHref="#b" transform="matrix(.00294 0 0 .00291 .094 .298)" />
                                </pattern>
                                <image
                                    xlinkHref="data:image/png;base64,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"
                                    id="b"
                                    width={284}
                                    height={177}
                                />
                            </defs>
                        </svg>

                        <div className='flex justify-between items-center w-full mt-2 ml-3'>
                            <div className='flex flex-col items-start ml-5'>
                                <p className='font-bold text-xl'>Spectranent Limited</p>
                                <p>SPEC</p>
                            </div>
                            <Link
                                href="/Dashboard/Home/Paybills/Airtime"
                                className="flex justify-end mt-2 ml-24 text-decoration-none align-end items-end"
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
                </div>
                <div className='flex items-start justify-start mt-5'>
                    <div className='flex items-center justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <circle cx={20} cy={20} r={20} fill="url(#a)" />
                            <circle
                                cx={20}
                                cy={20}
                                r={19.75}
                                stroke="#000"
                                strokeOpacity={0.1}
                                strokeWidth={0.5}
                            />
                            <defs>
                                <pattern
                                    id="a"
                                    width={1}
                                    height={1}
                                    patternContentUnits="objectBoundingBox"
                                >
                                    <use xlinkHref="#b" transform="matrix(.00294 0 0 .00291 .094 .298)" />
                                </pattern>
                                <image
                                    xlinkHref="data:image/png;base64,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"
                                    id="b"
                                    width={284}
                                    height={177}
                                />
                            </defs>
                        </svg>

                        <div className='flex justify-between items-center w-full mt-2 ml-3'>
                            <div className='flex flex-col items-start ml-5'>
                                <p className='font-bold text-xl'>Spectranent Limited</p>
                                <p>SPEC</p>
                            </div>
                            <Link
                                href="/Dashboard/Home/Paybills/Airtime"
                                className="flex justify-end mt-2 ml-24 text-decoration-none align-end items-end"
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
                </div>

                
                <div className='flex items-start justify-start mt-5'>
                    <div className='flex items-center justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <circle cx={20} cy={20} r={20} fill="url(#a)" />
                            <circle
                                cx={20}
                                cy={20}
                                r={19.75}
                                stroke="#000"
                                strokeOpacity={0.1}
                                strokeWidth={0.5}
                            />
                            <defs>
                                <pattern
                                    id="a"
                                    width={1}
                                    height={1}
                                    patternContentUnits="objectBoundingBox"
                                >
                                    <use xlinkHref="#b" transform="matrix(.00294 0 0 .00291 .094 .298)" />
                                </pattern>
                                <image
                                    xlinkHref="data:image/png;base64,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"
                                    id="b"
                                    width={284}
                                    height={177}
                                />
                            </defs>
                        </svg>

                        <div className='flex justify-between items-center w-full mt-2 ml-3'>
                            <div className='flex flex-col items-start ml-5'>
                                <p className='font-bold text-xl'>Spectranent Limited</p>
                                <p>SPEC</p>
                            </div>
                            <Link
                                href="/Dashboard/Home/Paybills/Airtime"
                                className="flex justify-end mt-2 ml-24 text-decoration-none align-end items-end"
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
                </div>


                <div className='flex items-start justify-start mt-5'>
                    <div className='flex items-center justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <circle cx={20} cy={20} r={20} fill="url(#a)" />
                            <circle
                                cx={20}
                                cy={20}
                                r={19.75}
                                stroke="#000"
                                strokeOpacity={0.1}
                                strokeWidth={0.5}
                            />
                            <defs>
                                <pattern
                                    id="a"
                                    width={1}
                                    height={1}
                                    patternContentUnits="objectBoundingBox"
                                >
                                    <use xlinkHref="#b" transform="matrix(.00294 0 0 .00291 .094 .298)" />
                                </pattern>
                                <image
                                    xlinkHref="data:image/png;base64,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"
                                    id="b"
                                    width={284}
                                    height={177}
                                />
                            </defs>
                        </svg>

                        <div className='flex justify-between items-center w-full mt-2 ml-3'>
                            <div className='flex flex-col items-start ml-5'>
                                <p className='font-bold text-xl'>Spectranent Limited</p>
                                <p>SPEC</p>
                            </div>
                            <Link
                                href="/Dashboard/Home/Paybills/Airtime"
                                className="flex justify-end mt-2 ml-24 text-decoration-none align-end items-end"
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
                </div>

    
            </div>
        </main>
    )
}

export default page
