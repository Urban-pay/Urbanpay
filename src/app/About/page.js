"use client"
import React from 'react'
import { NavigationBar, Footer } from "../../components/index";
import { Button } from '../../components/index';
import welcome from '../../../assets/img/welcome.png';
import Image from 'next/image';
import Frame from '../../../assets/img/Frame.png'



const page = () => {
    return (
        <main>
            <NavigationBar />
            <div>
                <div
                    className="my-20 md:my-40 flex justify-center items-center text-center"
                >
                    <div className="w-full md:w-11/12 lg:w-10/12">
                        <h1 className="text-custom-color1 text-5xl tracking-wide leading-tight lg:text-8xl font-extrabold capitalize">
                            Simplifying payments to connect the world
                        </h1>
                        <p className="my-3 text-lg text-slate-800">
                            The team at UrbanPay is dedicated to move a step ahead to<br /> provide effortless payments for day-to-day activities and many<br /> more!
                        </p>
                        <button className="h-10 rounded-md bg-customGreen text-white border px-3">
                            Get in touch with us
                        </button>
                    </div>
                </div>


                <div
                    className="my-40 flex justify-center items-center text-center w-full"
                >
                    <div className="w-full md:w-11/12 lg:w-10/12">
                        <h1 className="text-black text-6xl md:text-7xl lg:text-8xl font-bold capitalize">
                            Our Partners
                        </h1>
                        <div className='mt-10 flex items-center justify-center'>
                            <Image src={Frame} alt='frame' width={800} height={100} />
                        </div>
                    </div>
                </div>


                <div
                    className="my-40 flex justify-center items-center text-center"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                >
                    <div className="w-full md:w-11/12 lg:w-10/12">
                        <h1 className="text-custom-color text-5xl font-bold my-9">Know what we&apos;re up to</h1>
                        <p className="text-lg text-slate-800 my-2">
                            Follow us on our various socials to always get the latest updates, news, and<br /> exclusive content from us. Stay connected and be the first to know about<br /> upcoming events, special promotions, and community highlights. Don&apos;t miss out!
                        </p>
                        <div className="flex justify-center items-center text-center space-x-4">
                            <a href="#" className="underline text-custom-color">Twitter</a>
                            <a href="#" className="underline text-custom-color">Instagram</a>
                            <a href="#" className="underline text-custom-color">Facebook</a>
                        </div>

                        <div className="bg-[#921DDA] flex flex-col-reverse md:flex-row justify-around items-center w-full  h-50 mt-20 py-10 rounded text-white" >
                            <div className='flex-col space-y-4 mx-10'>
                                <h2 className='md:text-4xl font-bold'>UrbanPay</h2>
                                <p className='font-medium'>
                                    Want to join us?
                                </p>
                                <p>
                                    The team at UrbanPay is dedicated to move a step ahead to<br /> provide effortless payments for day-to-day activities and many<br /> more!
                                </p>
                                <Button text="Apply for membership" style={{ backgroundColor: 'white', color: '#A020F0' }} />
                            </div>

                            <div>
                                <Image src={welcome} alt='welcome illustration' width={500}
                                    height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default page
