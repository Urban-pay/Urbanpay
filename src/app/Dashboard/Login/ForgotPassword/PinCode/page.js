import React from 'react';
import BackBtn from '../../../../../components/BackBtn';
import Link from 'next/link';

const page = () => {

    return (
        <div className="flex justify-center items-center text-center h-screen" style={{ height: '100vh' }}>
            <div className="p-3" style={{ height: '100%', width: '350px' }}>
                <div>
                    <div className="flex justify-start items-start text-start mt-3">
                        <BackBtn />
                    </div>
                    <div className="mb-12 pt-12">
                        <h1 className="text-3xl font-semibold text-color">Pin code verification</h1>
                        <p className="text-sm">
                            Enter the code sent to your email or phone number
                        </p>
                    </div>

                    <form className="space-y-6" action="#" method="POST">
                        <div className="flex items-center justify-center text-center space-x-4">
                            {[...Array(5)].map((_, index) => (
                                <input
                                    key={index}
                                    required
                                    type="text"
                                    id={`code-${index}`}
                                    name="code"
                                    maxLength="1"
                                    className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                                />
                            ))}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full gray-btn justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Link href="signin.html" className="font-semibold leading-6 text-white">
                                    Continue
                                </Link>
                            </button>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Didn&apos;t receive a code?{' '}
                                <Link href="create-account.html" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-grayy">
                                    Resend
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
