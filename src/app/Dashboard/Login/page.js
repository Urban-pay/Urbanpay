import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="p-6 w-80">
        <div className="mb-12 pt-12">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome Back!</h1>
          <p className="text-sm text-gray-500">
            Enter the following detail to login into your UrbanPay account
          </p>
        </div>

        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="text-sm">
                <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Login
            </button>
            <p className="mt-10 text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link href="/create-account" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
