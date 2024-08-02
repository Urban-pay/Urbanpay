"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={() => router.back()}
          className="mb-6 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="Fullname" className="block text-sm font-medium leading-6 text-gray-900">
              Fullname
            </label>
            <div className="mt-2">
              <input
                id="Fullname"
                name="Fullname"
                type="text"
                autoComplete="Fullname"
                required
                placeholder="Enter your Fullname"
                className="w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder-gray-400 sm:text-sm sm:leading-6 px-4"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder-gray-400 sm:text-sm sm:leading-6 px-4"
              />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Create Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Enter your username"
                className="w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder-gray-400 sm:text-sm sm:leading-6 px-4"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Create Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Enter your password"
                className="w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder-gray-400 sm:text-sm sm:leading-6 px-4"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <button
                id="dropdown-phone-button"
                data-dropdown-toggle="dropdown-phone"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                type="button"
              >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.678711" width="19.6429" height="19.6429" rx="2" fill="white" />
                  <path d="M13.75 0.678711H19C19.5523 0.678711 20 1.12643 20 1.67871V19.3216C20 19.8739 19.5523 20.3216 19 20.3216H13.75V0.678711Z" fill="#3E8051" />
                  <path d="M0 1.67871C0 1.12643 0.447715 0.678711 1 0.678711H6.25V20.3216H1C0.447715 20.3216 0 19.8739 0 19.3216V1.67871Z" fill="#3E8051" />
                </svg>
                (+234) <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              <div id="dropdown-phone" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-phone-button">
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <div className="inline-flex items-center">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.678711" width="19.6429" height="19.6429" rx="2" fill="white" />
                          <path d="M13.75 0.678711H19C19.5523 0.678711 20 1.12643 20 1.67871V19.3216C20 19.8739 19.5523 20.3216 19 20.3216H13.75V0.678711Z" fill="#3E8051" />
                          <path d="M0 1.67871C0 1.12643 0.447715 0.678711 1 0.678711H6.25V20.3216H1C0.447715 20.3216 0 19.8739 0 19.3216V1.67871Z" fill="#3E8051" />
                        </svg>
                        Nigeria (+234)
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only">Phone number:</label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue
            </button>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" href="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
