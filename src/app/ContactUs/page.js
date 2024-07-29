import React from 'react'
import { NavigationBar } from '../../components/index'

const Page = () => {
    return (
        <main>
            <NavigationBar />
            <div className='bg-[#E0D5F7] py-8'>
                <div className='flex flex-col items-center justify-center px-4'>
                    <h2 className='text-3xl md:text-5xl font-bold text-customPurple mt-4 text-center'>
                        Contact Us
                    </h2>
                    <p className='mt-4 text-lg md:text-xl font-semibold text-center'>
                        We guarantee fast feedback for all your UrbanPay<br /> needs
                    </p>
                </div>
                <form className="max-w-lg mx-auto p-6 rounded-lg  shadow-md">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <input
                                type="text"
                                placeholder="Enter your Full Name"
                                className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <textarea
                            placeholder="Type a message here"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-purple-700"
                        >
                            Send a Message
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Page
