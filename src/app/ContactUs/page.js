import React from 'react'
import { NavigationBar } from '../../components/index'

const page = () => {
    return (
        <main>
            <NavigationBar />
            <div className='bg-[#E0D5F7]'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='md:text-5xl font-bold text-customPurple mt-4'>Contact Us</h2>
                    <p className='mt-4 font-semibold '>We guarantee fast feedback for all your UrbanPay<br /> needs</p>
                </div>
                <form className="max-w-lg mx-auto p-6 rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="enter your Full Name"
                                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <input
                                type="tel"
                                placeholder="enter Phone Number"
                                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="enter  Email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <textarea
                            placeholder="Type a message here"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none "
                        >
                            Send a Message
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default page
