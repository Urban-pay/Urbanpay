import React from 'react'
import BackBtn from '../../../../components/BackBtn';

const page = () => {
    return (
        <div className=" flex items-center justify-center h-screen text-center" style={{ height: '100vh' }}>
            <div className="p-3" style={{ height: '100%', width: '400px' }}>
                <div>
                    <div className="flex justify-start pt-12 mb-12">
                        <div className="flex justify-start items-start text-start mt-3">
                            <BackBtn />
                        </div>
                        <div className="w-full flex justify-center text-center items-center">
                            <div>
                                <h1 className="w-full my-2 font-bold text-2xl">Scan QR Code</h1>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-3 rounded-lg m-3" style={{ backgroundColor: '#F6E9FE' }}>
                            <p className="mb-3 text-sm text-gray-400">
                                Tap the button below to scan and send
                            </p>
                            <div className="my-4 text-start flex justify-center align-items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <path d="M111.111 200V177.778H133.333V200H111.111ZM88.8889 177.778V122.222H111.111V177.778H88.8889ZM177.778 144.444V100H200V144.444H177.778ZM155.556 100V77.7778H177.778V100H155.556ZM22.2222 122.222V100H44.4444V122.222H22.2222ZM0 100V77.7778H22.2222V100H0ZM100 22.2222V0H122.222V22.2222H100ZM13.8889 52.7778H52.7778V13.8889H13.8889V52.7778ZM0 66.6667V0H66.6667V66.6667H0ZM13.8889 186.111H52.7778V147.222H13.8889V186.111ZM0 200V133.333H66.6667V200H0ZM147.222 52.7778H186.111V13.8889H147.222V52.7778ZM133.333 66.6667V0H200V66.6667H133.333ZM155.556 200V166.667H133.333V144.444H177.778V177.778H200V200H155.556ZM111.111 122.222V100H155.556V122.222H111.111ZM66.6667 122.222V100H44.4444V77.7778H111.111V100H88.8889V122.222H66.6667ZM77.7778 66.6667V22.2222H100V44.4444H122.222V66.6667H77.7778ZM25 41.6667V25H41.6667V41.6667H25ZM25 175V158.333H41.6667V175H25ZM158.333 41.6667V25H175V41.6667H158.333Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
