"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../../components/Navigation";
import { Footer } from "../../components/footer";
import { allBooks, categories, getBooksByCategory, Book } from "../../data/books";
import { HiShoppingCart, HiEye, HiBookOpen, HiArrowLeft } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBooks = getBooksByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-literary-light dark:bg-literary-ink overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 to-gray-900 dark:from-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors mb-6"
            >
              <HiArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              My Books
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my complete collection of {allBooks.length} books spanning memoirs,
              poetry, spiritual reflections, and social commentary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 bg-literary-cream dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-accent-100 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
                {category.id !== "all" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({category.count})
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
              {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </motion.div>

          {/* Books Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredBooks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HiBookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No books found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in bulk orders, book signings, or have questions about my works?
              I&apos;d love to hear from you.
            </p>
            <Link href="/contact">
              <button className="btn-primary">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <motion.div variants={itemVariants} className="group">
      <div className="book-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
        {/* Book Cover */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Link href={`/book/${book.slug}`}>
                <button className="w-full mb-3 px-4 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center justify-center space-x-2">
                  <HiEye className="w-5 h-5" />
                  <span>View Details</span>
                </button>
              </Link>
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full px-4 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors flex items-center justify-center space-x-2">
                  <HiShoppingCart className="w-5 h-5" />
                  <span>Buy on Amazon</span>
                </button>
              </a>
            </div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-800 dark:text-gray-200 rounded-full capitalize">
              {book.category.replace("-", " ")}
            </span>
          </div>
          {/* Language Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-accent-600 text-white text-xs font-medium rounded-full">
              {book.language}
            </span>
          </div>
        </div>

        {/* Book Info */}
        <div className="p-5 h-[200px] flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-accent-600 dark:text-accent-400 font-medium">
              {book.year}
            </span>
            {book.pages && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {book.pages} pages
              </span>
            )}
          </div>
          <h3 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors min-h-[48px]">
            {book.title}
          </h3>
          {book.subtitle ? (
            <p className="text-xs text-accent-600 dark:text-accent-400 mb-2 line-clamp-1 h-4">
              {book.subtitle}
            </p>
          ) : (
            <div className="h-4 mb-2" />
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
            {book.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
