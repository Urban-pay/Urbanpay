import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <main className='min-h-screen flex flex-col justify-center items-center text-center'>
            <div className="mb-12" style={{ height: "20%" }}>
                <h1 className="text-3xl font-semibold">
                    Seamless transactions and even more
                </h1>
                <p className="text-sm mt-2">
                    Dive yourself into a versatile app that excels in efficient transactions and beyond
                </p>
            </div>
            <div className='flex flex-col space-y-3'>
                <button className="md:w-full px-5 py-2 bg-[#632FD9] text-white rounded">
                    <Link href="/Dashboard/CreateAccount" className="block">Get Started</Link>
                </button>
                <button className="md:w-full px-5 py-2 border border-[#632FD9] text-[#632FD9] rounded">
                    <Link href="/Dashboard/Login" className="block">Get Login</Link>
                </button>
            </div>
        </main>
    );
}

export default Page;
