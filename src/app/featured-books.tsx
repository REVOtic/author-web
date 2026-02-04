"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { allBooks, Book } from "../data/books";
import { HiShoppingCart, HiEye, HiArrowRight } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

// Featured books - select 4 representative books from different categories
const featuredBookIds = [2, 4, 10, 16]; // My Chequered Life, Diary: Gossip, El Dorado, Raag-Viraag

export default function FeaturedBooks() {
  const featuredBooks = allBooks.filter((book) =>
    featuredBookIds.includes(book.id),
  );

  return (
    <section className="py-24 bg-literary-cream dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
            <span className="text-sm font-medium text-accent-800 dark:text-accent-300">
              Featured Collection
            </span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Books
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my most celebrated works across different genres.
            Explore my complete library of {allBooks.length} books.
          </p>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/books">
            <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <span>View All {allBooks.length} Books</span>
              <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
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
