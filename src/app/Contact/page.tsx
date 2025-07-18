"use client";

import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Footer } from "../../components/footer";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative min-h-screen">
        {/* Background text overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10">
          <span className="text-[30vw] font-bold text-gray-200 dark:text-gray-700 select-none">
            CONTACT
          </span>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="fixed top-4 right-2 md:top-8 md:right-10 flex items-center gap-4 z-50">
            <ThemeToggle />
            <Link href="/">
              <button
                type="button"
                className="border-2 text-lg justify-center w-28 items-center flex h-10 rounded-lg text-gray-900 dark:bg-yellow-500 font-bold text-black shadow-lg hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors"
              >
                <BiArrowBack className="mr-1" />
                Home
              </button>
            </Link>
          </div>

          <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-yellow-400 mb-12">
              GET IN TOUCH
            </h1>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              DON&apos;T BE SHY
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl">
              Connect with Jyotindra Nath Prasad for literary discussions, publications, or media inquiries.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium text-xl">
                      Mail me
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      info@mail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-yellow-600 dark:text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  
                </div>
              </div>

              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-6 py-4 text-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors"
                />

                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-6 py-4 text-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors"
                />

                <textarea
                  placeholder="Enter your message"
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 px-6 py-4 text-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors resize-none"
                ></textarea>

                

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 dark:bg-yellow-400 text-white dark:text-black text-lg font-semibold rounded-lg hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
