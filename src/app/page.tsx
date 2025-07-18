"use client";

import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "../components/footer";
import FeaturedBooks from "./featured-books";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Jyotindra Nath Prasad
          </h1>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-gray-800 dark:text-white font-medium">
              Home
            </span>
            <Link
              href="/About"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative py-16 flex items-center justify-center">
            <div className="text-center max-w-lg mx-auto">
              <Image
                src="/author1.jpeg"
                alt="Jyotindra Nath Prasad"
                width={180}
                height={180}
                priority
                className="rounded-full border-4 border-yellow-600 dark:border-yellow-400 mx-auto mb-8 shadow-xl"
              />
              <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Jyotindra Nath Prasad
              </h1>
              <h2 className="text-2xl text-yellow-600 dark:text-yellow-400 mb-8">
                Author & Journalist
              </h2>
              <div className="flex justify-center gap-4">
                <Link href="/About">
                  <button className="bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
                <a href="#books-section">
                  <button className="border-2 border-yellow-600 dark:border-white text-yellow-600 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200">
                    View Books
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <FeaturedBooks />

      <Footer />
    </div>
  );
}
