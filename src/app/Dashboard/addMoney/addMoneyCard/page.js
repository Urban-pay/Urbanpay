"use client"
import React, { useState } from 'react';
import BackBtn from '../../../../components/BackBtn';

const AddMoney = () => {
  const [tab, setTab] = useState('home');

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const copyLink = () => {
    const copyText = document.getElementById('acct');
    copyText.select();
    document.execCommand('copy');
    alert("Copied the text: " + copyText.value);
  };

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div className="p-3 h-full w-[400px]">
        <div>
          <div className="flex justify-start pt-12 mb-12">
            <div className="flex items-start justify-start mt-3 text-start">
              <BackBtn />
            </div>
            <div className="flex items-center justify-center w-full text-center">
              <h1 className="w-full my-2 text-2xl font-bold">Enter Amount</h1>
            </div>
          </div>

          <div className={tab === 'home' ? '' : 'hidden'} id="home">
            <div className="space-y-6">
              <div className="my-2">
                <label
                  htmlFor="amount"
                  className="block mb-2 font-medium  text-start text-md text-white"
                >
                  Enter Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="₦ enter amount"
                  required
                />
              </div>

              <div className="w-full my-7">
                <button
                  onClick={() => handleTabChange('profile')}
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className={tab === 'profile' ? '' : 'hidden'} id="profile">
            <div className="space-y-6">
              <div className="my-2">
                <label
                  htmlFor="cardNumber"
                  className="block mb-2 font-medium text-gray-900 text-start text-md dark:text-white"
                >
                  Enter card number
                </label>
                <input
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="12345 6789 34567 234"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="my-2 col-span-1">
                  <label
                    htmlFor="Expiry"
                    className="block mb-2 font-medium text-gray-900 text-start text-md dark:text-white"
                  >
                    Expiry date
                  </label>
                  <input
                    type="date"
                    id="Expiry"
                    name="Expiry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="my-2 col-span-1 hidden md:block"></div>
                <div className="my-2 col-span-1">
                  <label
                    htmlFor="cvv"
                    className="block mb-2 font-medium text-gray-900 text-start text-md dark:text-white"
                  >
                    CVV
                  </label>
                  <input
                    type="number"
                    id="cvv"
                    name="cvv"
                    maxLength="3"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="my-2">
                <label
                  htmlFor="pin"
                  className="block mb-2 font-medium text-gray-900 text-start text-md dark:text-white"
                >
                  Pin
                </label>
                <input
                  type="number"
                  id="pin"
                  name="pin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="1234"
                  required
                />
              </div>

              <div className="w-full my-7">
                <button
                  onClick={() => window.location.href = 'verify.html'}
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
