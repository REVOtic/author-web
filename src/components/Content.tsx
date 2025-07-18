import React from "react";
import Image from "next/image";
import Link from "next/link";

function Content() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
      {/* Text Content */}
      <div className="lg:w-1/2 text-gray-900 dark:text-white mb-8 lg:mb-0">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">
          Jyotindra Nath Prasad
        </h1>
        <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Author & Journalist
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/About">
            <button className="bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-200 text-lg">
              Learn More
            </button>
          </Link>
          <Link href="/Books">
            <button className="border-2 border-yellow-600 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors duration-200 text-lg">
              View Books
            </button>
          </Link>
        </div>
      </div>

      {/* Author Image */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-600 dark:border-yellow-400 shadow-2xl shadow-yellow-600/30 dark:shadow-yellow-400/30">
            <Image
              src="/image/avatar1.jpg"
              alt="Jyotindra Nath Prasad"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-yellow-600 dark:bg-yellow-400 text-white dark:text-black px-6 py-3 rounded-full font-semibold text-lg">
            Author
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
