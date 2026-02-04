"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Footer } from "../components/footer";
import FeaturedBooks from "./featured-books";
import { HiArrowDown, HiBookOpen, HiPencil } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen bg-literary-light dark:bg-literary-ink overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          />

          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 paper-texture" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6"
              >
                <HiPencil className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                <span className="text-sm font-medium text-accent-800 dark:text-accent-300">
                  Renowned Author & Journalist
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                Jyotindra
                <br />
                <span className="text-accent-600 dark:text-accent-400">
                  Nath Prasad
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                A distinguished voice in Hindi literature, weaving words that
                illuminate the human experience through memoirs, poetry, and
                profound social commentary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Link href="/about">
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Discover My Story</span>
                    <HiBookOpen className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/books">
                  <button className="btn-secondary">Explore Books</button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start space-x-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-accent-600 dark:text-accent-400">
                    25+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Books Published
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-accent-600 dark:text-accent-400">
                    40+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Years Writing
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-accent-600 dark:text-accent-400">
                    1000s
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    of Readers
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Author Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-400 to-primary-600 rounded-2xl opacity-20 blur-lg" />
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  <Image
                    src="/author1.jpeg"
                    alt="Jyotindra Nath Prasad"
                    fill
                    priority
                    className="object-cover rounded-2xl shadow-2xl"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                        <HiBookOpen className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Latest Release
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          Dainandini
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#featured-books"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <HiArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="quote-mark">&ldquo;</span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 italic leading-relaxed -mt-8">
              Words are the bridge between the seen and the unseen, the spoken
              and the felt. In every page I write, I seek to illuminate the
              corners of human experience that often go unnoticed.
            </blockquote>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-accent-400" />
              <cite className="text-gray-500 dark:text-gray-400 not-italic font-medium">
                Jyotindra Nath Prasad
              </cite>
              <div className="w-12 h-px bg-accent-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section id="featured-books">
        <FeaturedBooks />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 dark:from-gray-950 dark:to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">
              Begin Your Literary Journey
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl text-accent-400 mb-6">
              Start Your Reading Journey
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore a collection of books that inspire, inform, and transform.
              Each page is a step towards new perspectives. Discover memoirs,
              poetry, social commentary, and spiritual reflections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/books">
                <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Browse All Books
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
