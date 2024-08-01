"use client";
import React, { useState } from "react";
import Link from "next/link";

const DeleteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState({ pin1: "", pin2: "", pin3: "", pin4: "" });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePinChange = (e) => {
    const { id, value } = e.target;
    setPin((prevPin) => ({
      ...prevPin,
      [id]: value.slice(0, 1), // Limit to 1 character
    }));
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="flex items-center">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
            d="M16.8104 10L13.1904 13.63M23.1904 10L26.8104 13.63"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 15.8516C10 14.0016 10.99 13.8516 12.22 13.8516H27.78C29.01 13.8516 30 14.0016 30 15.8516C30 18.0016 29.01 17.8516 27.78 17.8516H12.22C10.99 17.8516 10 18.0016 10 15.8516Z"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M17.76 22V25.55M22.36 22V25.55M11.5 18L12.91 26.64C13.23 28.58 14 30 16.86 30H22.89C26 30 26.46 28.64 26.82 26.76L28.5 18"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-between w-full mt-2">
          <h1 className="justify-center ml-2 text-2xl font-bold text-start align-center d-flex">
            Delete account
          </h1>
          <button
            onClick={openModal}
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
            <div className="modal-content p-4">
              <div className="text-center">
                <h1 className="my-3 font-bold text-md text-capitalize">
                  Enter pin to delete account
                </h1>
                <form className="space-y-6" id="signin">
                  <div className="flex justify-center items-center space-x-4">
                    <input
                      type="text"
                      id="pin1"
                      maxLength="1"
                      value={pin.pin1}
                      onChange={handlePinChange}
                      className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                    />
                    <input
                      type="text"
                      id="pin2"
                      maxLength="1"
                      value={pin.pin2}
                      onChange={handlePinChange}
                      className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                    />
                    <input
                      type="text"
                      id="pin3"
                      maxLength="1"
                      value={pin.pin3}
                      onChange={handlePinChange}
                      className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                    />
                    <input
                      type="text"
                      id="pin4"
                      maxLength="1"
                      value={pin.pin4}
                      onChange={handlePinChange}
                      className="w-12 h-12 border border-gray-300 rounded text-2xl text-center focus:outline-none"
                    />
                  </div>
                  <div className="my-6">
                    <button
                      type="button"
                      onClick={() => {
                        console.log(pin);
                        // Handle pin submission
                        closeModal();
                      }}
                      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Confirm
                    </button>
                  </div>
                  <div className="my-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-lg border border-gray-300 text-gray-700 px-5 py-2.5 text-center focus:ring-4 focus:outline-none  font-medium text-sm "
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
