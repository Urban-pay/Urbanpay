"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Modal from "react-modal";
import display from '../../../../../../public/img/dashoard/display.jpg'



const MyComponent = () => {

    const router = useRouter();

    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSendMoneyClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const customModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            textAlign: 'center',

        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
        },
    }

    return (
        <div className="flex flex-col items-center m-3">
            <div className=" flex items-center justify-center text-center" style={{ height: '100vh' }}>
                <div className="p-3" style={{ height: '100%', width: '400px' }}>
                    <div>
                        <div className="w-full flex justify-center items-center">
                            <div className="flex justify-start items-start mt-3">
                                <button onClick={() => router.back()}>
                                    <span id="back">
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
                                </button>
                            </div>
                            <h1 className="w-full my-2 font-bold text-2xl text-capitalize">
                                Summary
                            </h1>
                        </div>
                        <div className="w-full flex justify-center items-center mb-12 pt-12">
                            <div className="w-full">
                                <div className="w-full flex justify-center items-center">
                                    <Image src={display} alt="" width={24} height={24} />
                                </div>
                                <div className="w-full flex justify-between my-3 space-x-4">
                                    <p className="text-capitalize text-sm text-gray-400">Send</p>
                                    <h1 className="text-md font-semibold text-[#632FD9]">300,00</h1>
                                </div>
                                <div className="w-full flex justify-between my-3 space-x-4">
                                    <p className="text-capitalize text-sm text-gray-400">To</p>
                                    <h1 className="text-md font-semibold text-[#632FD9]">john doe</h1>
                                </div>
                                <div className="w-full flex justify-between my-3 space-x-4">
                                    <p className="text-capitalize text-sm text-gray-400">description</p>
                                    <h1 className="text-md font-semibold text-[#632FD9]">thank you</h1>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <form className="space-y-6" action="#" method="POST" id="signin">
                                <label htmlFor="pin" className="text-md font-bold text-capitalize">
                                    Enter pin
                                </label>
                                <div className="flex justify-center items-center space-x-4">
                                    {[...Array(5)].map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            id={`pin${index + 1}`}
                                            maxLength="1"
                                            className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                                        />
                                    ))}
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <p className="text-center mx-2 font-bold text-xl">Ghost Mode</p>
                            <div className="form-check form-switch inline">
                                <input
                                    type="checkbox"
                                    className="form-check-input inline px-8 py-3.5"
                                    role="switch"
                                    id="beneficiary"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                            </div>
                        </div>

                        <div className="flex my-3 space-x-1">
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
                                Ghost mode hides your ID from the receiver
                            </p>
                        </div>

                        <div className="mb-3">
                            <button
                                type="button"
                                onClick={handleSendMoneyClick}
                                className="text-white bg-[#632FD9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
                            >
                                Send Money
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalVisible}
                style={customModalStyles}
                onRequestClose={handleCloseModal}
            >
                <div
                    className=""
                    id="modalId"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                    style={customModalStyles}
                >
                    <div
                        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-body flex justify-center items-center text-center">
                                <div>
                                    <h1 className="text-md font-bold text-capitalize my-3">
                                        Transaction Successful
                                    </h1>
                                    <p className="text-sm font-light text-capitalize my-3">
                                        ID hidden from receiver
                                    </p>
                                    <div>
                                        <Link href="/Dashboard/Home">
                                            <span className="text-white rounded-md decoration-none text-capitalize card-btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Go Home
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default MyComponent;
