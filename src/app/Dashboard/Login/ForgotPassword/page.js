"use client"
import React from 'react';
import BackBtn from '../../../../components/BackBtn';

import Link from 'next/link';

const Page = () => {

    return (
        <div className="flex justify-center items-center text-center h-screen" style={{ height: '100vh' }}>
            <div className="p-3" style={{ height: '100%', width: '350px' }}>
                <div>
                    <div className="flex justify-start items-start text-start mt-3">
                        <BackBtn />
                    </div>
                    <div className="mb-12 pt-12">
                        <h1 className="text-3xl font-semibold text-color">Forgot Password</h1>
                        <p className="text-sm">
                            Enter the email associated with your account, we will send an email with OTP to reset your password.
                        </p>
                    </div>

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-left font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder=""
                                    className="form-control w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Link href="/Dashboard/Login/ForgotPassword/PinCode" className="font-semibold leading-6 text-white">
                                    Send OTP
                                </Link>
                            </button>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Don’t have an account?{' '}
                                <Link href="create-account.html" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Start a Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
