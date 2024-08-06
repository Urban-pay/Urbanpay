'use client'
import React, { useState } from "react";
import Link from "next/link";
import BackBtn from "../../../../../components/BackBtn";


const Page = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="flex items-center justify-center text-center">
            <div className="p-3" style={{ height: "100%", width: "350px" }}>
                <div className="h-full">
                    <div className="pt-12 mb-12" style={{ height: "30%" }}>
                        <div className="flex items-start justify-start mt-3 text-start">
                            <BackBtn />
                        </div>
                        <h1 className="text-3xl font-semibold text-color">OTP Verification</h1>
                        <p className="text-sm">Enter the OTP code sent to</p>
                        <small className="text-gray-400">08123456789</small>
                    </div>

                    <form className="h-full space-y-6" action="#" method="POST">
                        <div style={{ height: "60%" }}>
                            <div className="flex items-center justify-center space-x-4 text-center">
                                {[...Array(5)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className="w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:outline-none"
                                    />
                                ))}
                            </div>
                            <div className="flex items-center justify-center mt-3 text-center">
                                <p className="text-sm lead-4">Resend OTP code in 01:00</p>
                            </div>
                        </div>

                        <div className="mt-auto" style={{ height: "10%" }}>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleModalToggle}
                            >
                                Continue
                            </button>
                            <p className="mt-10 text-sm text-center text-gray-500">
                                Didn&apos;t receive a code?{" "}
                                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Resend
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {modalOpen && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="flex items-center justify-center text-center modal-body">
                                <div>
                                    <h1 className="my-3 font-bold text-md">Transaction Successful</h1>
                                    <div>
                                        <Link href="../home.html">
                                            <a className="text-white rounded-md text-capitalize bg-indigo-600 px-3 py-1.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-medium text-sm">
                                                Go Home
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={handleModalToggle}></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
