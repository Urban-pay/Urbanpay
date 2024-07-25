"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import display from "../../../../../assets/img/dashoard/display.jpg";

const Page = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal handler
  const openModal = () => setIsModalOpen(true);

  // Close modal handler
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container flex items-center justify-center h-screen text-center">
      <div className="p-3 w-[400px] h-full">
        <div className="flex justify-start pt-12">
          <div className="flex items-start justify-start mt-3 text-start">
            <button
              onClick={() => window.history.back()}
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-black"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center w-full text-center">
            <h1 className="w-full my-2 text-2xl font-bold">Profile</h1>
          </div>
        </div>

        <div className="flex justify-start mb-6 pt-6">
          <div className="flex items-center justify-center mr-10">
            <Image src={display} alt="Profile" />
          </div>
          <div>
            <h1 className="w-full my-2 font-light text-xl">Stanley Drey</h1>
            <div className="flex justify-between w-full">
              <p className="px-1 text-sm text-custom-color">@drey</p>
              <span className="px-1 text-sm rounded-md bg-custom-color text-white">
                Tier 0
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {["Full name", "Username", "Mail", "Phone number"].map(
            (label, index) => (
              <div className="my-7" key={index}>
                <label
                  htmlFor={label.toLowerCase().replace(" ", "-")}
                  className="block mb-2 font-medium text-gray-900 text-md dark:text-white"
                >
                  {label}
                </label>
                <input
                  type="text"
                  id={label.toLowerCase().replace(" ", "-")}
                  name={label.toLowerCase().replace(" ", "-")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={
                    label === "Full name"
                      ? "Precious Ojeh"
                      : label === "Username"
                      ? "@drey"
                      : label === "Mail"
                      ? "stanleydrey@urbanpay.com"
                      : "0906664773"
                  }
                  required
                />
              </div>
            )
          )}
          <div className="w-full my-7">
            <button
              onClick={openModal}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Update Successful"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="flex items-center justify-center text-center p-4">
          <div>
            <h1 className="my-3 font-bold text-md text-capitalize">
              Profile Update Successful
            </h1>
            <a
              href="home.html"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
              onClick={closeModal}
            >
              Go home
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
