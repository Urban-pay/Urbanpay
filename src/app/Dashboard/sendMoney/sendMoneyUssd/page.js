import React from 'react'

const page = () => {
    return (
        <div className="container flex items-center justify-center h-screen text-center" style={{ height: '100vh' }}>
            <div className="p-3" style={{ height: '100%', width: '400px' }}>
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex justify-start items-start text-start mt-3">
                            <a href="../home.html" id="back">
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
                            </a>
                        </div>
                        <div className="w-full flex justify-center text-center items-center">
                            <div>
                                <h1 className="w-full my-2 font-bold text-2xl">USSD</h1>
                                <p className="text-sm font-light">
                                    Generate codes to send money to a bank of your choice
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="my-4 text-start">
                            <label
                                htmlFor="bank"
                                className="text-md font-bold mb-2 text-gray-600 text-capitalize"
                            >
                                Bank
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
                                    type="text"
                                    name="bank"
                                    id="bank"
                                    required
                                    placeholder="Search Bank"
                                    className="block p-3 px-5 w-full text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-200 bg-gray-50"
                                />
                            </div>
                        </div>

                        <div className="my-4 pb-11 text-start">
                            <label
                                htmlFor="code"
                                className="text-md font-bold mb-2 text-gray-600 text-capitalize"
                            >
                                Code
                            </label>
                            <input
                                type="text"
                                name="code"
                                id="code"
                                required
                                placeholder="#200*500*amount#"
                                className="p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-200 bg-gray-50"
                            />
                        </div>

                        <div className="flex my-10 space-x-1">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                >
                                    <path
                                        d="M7.83325 11.334H9.16659V7.33398H7.83325V11.334ZM8.49992 6.00065C8.68881 6.00065 8.84725 5.93665 8.97525 5.80865C9.10325 5.68065 9.16703 5.52243 9.16659 5.33398C9.16659 5.1451 9.10259 4.98665 8.97459 4.85865C8.84659 4.73065 8.68836 4.66687 8.49992 4.66732C8.31103 4.66732 8.15259 4.73132 8.02459 4.85932C7.89659 4.98732 7.83281 5.14554 7.83325 5.33398C7.83325 5.52287 7.89725 5.68132 8.02525 5.80932C8.15325 5.93732 8.31147 6.0011 8.49992 6.00065ZM8.49992 14.6673C7.5777 14.6673 6.71103 14.4922 5.89992 14.142C5.08881 13.7918 4.38325 13.3169 3.78325 12.7173C3.18325 12.1173 2.70836 11.4118 2.35859 10.6007C2.00881 9.78954 1.8337 8.92287 1.83325 8.00065C1.83325 7.07843 2.00836 6.21176 2.35859 5.40065C2.70881 4.58954 3.1837 3.88398 3.78325 3.28398C4.38325 2.68398 5.08881 2.2091 5.89992 1.85932C6.71103 1.50954 7.5777 1.33443 8.49992 1.33398C9.42214 1.33398 10.2888 1.5091 11.0999 1.85932C11.911 2.20954 12.6166 2.68443 13.2166 3.28398C13.8166 3.88398 14.2917 4.58954 14.6419 5.40065C14.9921 6.21176 15.167 7.07843 15.1666 8.00065C15.1666 8.92287 14.9915 9.78954 14.6413 10.6007C14.291 11.4118 13.8161 12.1173 13.2166 12.7173C12.6166 13.3173 11.911 13.7924 11.0999 14.1427C10.2888 14.4929 9.42214 14.6678 8.49992 14.6673Z"
                                        fill="#B2B2B2"
                                    />
                                </svg>
                            </span>
                            <p className="mb-3 text-sm text-gray-400">
                                Your balance will be updated on the dashboard
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page