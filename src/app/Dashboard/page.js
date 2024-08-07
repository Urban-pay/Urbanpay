'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';


const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <main className='min-h-screen flex flex-col justify-center items-center text-center'>
            <Carousel />
            <div className="my-12" style={{ height: "20%" }}>
                <h1 className="text-3xl font-semibold">
                    Seamless transactions<br /> and even more
                </h1>
                <p className="text-sm mt-2">
                    Dive yourself into a versatile app that excels in <br /> efficient transactions and beyond
                </p>
            </div>
            <div className='flex flex-col space-y-3'>
                <button className="px-5  md:px-10 py-2 bg-[#632FD9] text-white rounded">
                    <Link href="/Dashboard/CreateAccount" className="block">Get Started</Link>
                </button>
                <button className="px-5 md:px-10 py-2 border border-[#632FD9] text-[#632FD9] rounded">
                    <Link href="/Dashboard/Login" className="block">Get Login</Link>
                </button>
            </div>
        </main>
    );
}

export default Page;
