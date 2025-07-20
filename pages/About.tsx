import React from "react";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { Footer } from "../src/components/footer";
import { ThemeToggle } from "../src/components/ThemeToggle";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Jyotindra Nath Prasad
          </h1>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-800 dark:text-white font-medium">
              About
            </span>
            <Link
              href="/#books-section"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Books
            </Link>
            <Link
              href="/Contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-16">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto overflow-hidden rounded-full shadow-xl border-4 border-white">
              <Image
                src="/author1.jpeg"
                alt="Jyotindra Nath Prasad"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jyotindra Nath Prasad
          </h1>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-6 text-gray-600 dark:text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                6+
              </div>
              <div className="text-sm">Books</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                40+
              </div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                1000+
              </div>
              <div className="text-sm">Readers</div>
            </div>
          </div>

          {/* Bio Summary */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            A distinguished author and journalist from Bihar, India, who
            believes in the power of words to shape our world, inspire change,
            and connect communities through thought-provoking narratives.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="/#books-section">
              <button className="bg-gray-900 dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                View Books
              </button>
            </Link>
            <Link href="/Contact">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Detailed Biography */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About the Author
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              <strong>Jyotindra Nath Prasad</strong> was born on May 9, 1955, in
              the village of Enkhaun in Dulhin Bazar, Bihta, in the Patna
              district of Bihar province, India. His journey into the world of
              literature and journalism began with his graduation in English
              from Patna College, Patna University, in 1976.
            </p>

            <p className="mb-6">
              As a dedicated journalist and litterateur, Prasad has made
              significant contributions to the field of journalism, having
              served as a staff reporter for the prestigious Hindustan Times.
              His journalistic background has enriched his literary works,
              bringing authenticity and depth to his narratives.
            </p>

            <p className="mb-6">
              Prasad is a family man, married with one son and one daughter, and
              continues to reside in Patna. His literary works, including the
              notable titles <em>&apos;Fashionwad Zindabad&apos;</em> and{" "}
              <em>&apos;Phir Subah Hogi&apos;</em>, are available as podcasts on
              Kuku FM Radio, making literature accessible to a broader audience
              through audio format.
            </p>

            <p>
              Beyond his published books, Prasad actively contributes his
              insights on contemporary issues to various journals and magazines.
              His literary pieces frequently appear in Hindi magazines,
              showcasing his versatility and deep understanding of both social
              issues and literary expression.
            </p>
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Professional Background
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Former Staff Reporter at Hindustan Times
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Graduate in English from Patna College, Patna University (1976)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Regular contributor to Hindi magazines and journals
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Contemporary issues analyst and commentator
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Literary Achievements
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Multiple published books in Hindi literature
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Audio books available on Kuku FM Radio platform
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Recognized for thought-provoking narratives
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Bridge between journalism and literature
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Explore My Literary World</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Discover the complete collection of books and audio narratives that
            explore contemporary social issues and cultural heritage.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/Books">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                Browse Books
              </button>
            </Link>
            <a
              href="https://kuku.fm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
            >
              Listen on Kuku FM
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
