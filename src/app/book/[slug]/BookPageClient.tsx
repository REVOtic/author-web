"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../../../components/Navigation";
import { Footer } from "../../../components/footer";
import {
  allBooks,
  getBookBySlug,
  getRelatedBooks,
  Book,
} from "../../../data/books";
import {
  HiArrowLeft,
  HiShoppingCart,
  HiCalendar,
  HiTag,
  HiBookOpen,
  HiShare,
  HiDocumentText,
} from "react-icons/hi";

export type { Book };
export { allBooks };

interface BookPageClientProps {
  slug: string;
}

export default function BookPageClient({ slug }: BookPageClientProps) {
  const book = getBookBySlug(slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-literary-light dark:bg-literary-ink">
        <Navigation />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg"
          >
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiBookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Book Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              The book you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
            <Link href="/">
              <button className="btn-primary">Return to Home</button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related books
  const relatedBooks = getRelatedBooks(book.id, 3);

  return (
    <div className="min-h-screen bg-literary-light dark:bg-literary-ink">
      <Navigation />

      {/* Breadcrumb & Back */}
      <div className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/books"
              className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <HiArrowLeft className="w-5 h-5" />
              <span>Back to Books</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-400/20 to-primary-500/20 rounded-3xl blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent-300 dark:border-accent-700 rounded-2xl" />

                {/* Main image */}
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                      <HiCalendar className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Published
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {book.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full">
                  <HiTag className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                  <span className="text-sm font-medium text-accent-800 dark:text-accent-300 capitalize">
                    {book.category.replace("-", " ")}
                  </span>
                </span>
                <span className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                  <HiDocumentText className="w-4 h-4" />
                  <span>{book.language}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {book.title}
              </h1>
              {book.subtitle && (
                <h2 className="font-serif text-xl sm:text-2xl text-accent-600 dark:text-accent-400 mb-6">
                  {book.subtitle}
                </h2>
              )}

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <HiCalendar className="w-4 h-4" />
                  <span>{book.year}</span>
                </div>
                {book.pages && (
                  <div className="flex items-center space-x-2">
                    <HiBookOpen className="w-4 h-4" />
                    <span>{book.pages} pages</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Extended Description */}
              <div className="prose prose-lg dark:prose-invert mb-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {book.extendedDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <HiShoppingCart className="w-5 h-5" />
                  <span>Buy on Amazon</span>
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: book.title,
                        text: `Check out "${book.title}" by Jyotindra Nath Prasad`,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <HiShare className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Author Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/author1.jpeg"
                      alt="Jyotindra Nath Prasad"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Jyotindra Nath Prasad
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Author & Journalist
                    </div>
                  </div>
                  <Link href="/about" className="ml-auto">
                    <button className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium text-sm">
                      View Profile &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
                More in{" "}
                {book.category.replace("-", " ").charAt(0).toUpperCase() +
                  book.category.replace("-", " ").slice(1)}
              </h2>
              <div className="section-divider" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBooks.map((relatedBook, index) => (
                <motion.div
                  key={relatedBook.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/book/${relatedBook.slug}`}>
                    <div className="group bg-literary-cream dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <Image
                          src={relatedBook.coverImage}
                          alt={relatedBook.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-accent-600 dark:text-accent-400 font-medium">
                          {relatedBook.year}
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mt-1 line-clamp-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                          {relatedBook.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
