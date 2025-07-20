import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Footer } from "../../src/components/footer";
import { ThemeToggle } from "../../src/components/ThemeToggle";
import { allBooks } from "../../src/components/featured-books";

// Helper function to properly encode image URLs
const getImageUrl = (url: string) => {
  // If URL already starts with http, return it as is
  if (url.startsWith("http")) {
    return url;
  }
  // Otherwise, ensure proper encoding for local files
  return url.replace(/ /g, "%20");
};

export default function BookPage() {
  const router = useRouter();
  const { slug } = router.query;
  const book = allBooks.find((book: any) => book.slug === slug);

  if (!book || !slug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
                Jyotindra Nath Prasad
              </h1>
            </Link>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Book not found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The book you are looking for does not exist or has been removed.
            </p>
            <Link href="/">
              <button className="px-6 py-3 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors">
                Return Home
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
              Jyotindra Nath Prasad
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
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

      {/* Book Content */}
      <div className="flex-grow bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Book Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-full max-w-[300px] h-[450px] shadow-xl rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={getImageUrl(book.imageUrl)}
                    alt={book.title}
                    style={{ objectFit: "contain" }}
                    fill
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {book.title}
              </h1>
              <div className="flex items-center mb-6">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl">
                  {book.year}
                </span>
              </div>
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  {book.description ||
                    "No description available yet. This section will be updated soon with detailed information about this book."}
                </p>
              </div>

              <div className="mt-10 flex space-x-4">
                <Link href="/">
                  <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Back to Books
                  </button>
                </Link>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg font-medium hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                  Purchase on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books section could be added here in the future */}

      <Footer />
    </div>
  );
}
