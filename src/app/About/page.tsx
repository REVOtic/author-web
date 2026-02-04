"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import { Footer } from "../../components/footer";
import {
  HiBookOpen,
  HiNewspaper,
  HiAcademicCap,
  HiHeart,
  HiLocationMarker,
  HiCalendar,
  HiDownload,
} from "react-icons/hi";

const milestones = [
  {
    year: "1955",
    title: "Birth",
    description:
      "Born on May 9, 1955, in the village of Enkhaun in Dulhin Bazar, Bihta, Patna district, Bihar.",
    icon: HiCalendar,
  },
  {
    year: "1976",
    title: "Education",
    description:
      "Graduated in English from Patna College, Patna University, laying the foundation for a literary career.",
    icon: HiAcademicCap,
  },
  {
    year: "1977",
    title: "Journalism Career Begins",
    description:
      "Started professional journey in journalism, eventually joining Hindustan Times as a Staff Reporter.",
    icon: HiNewspaper,
  },
  {
    year: "2006",
    title: "First Book Published",
    description:
      "Published 'My Date with Editors', a professional autobiography spanning 40 years in journalism.",
    icon: HiBookOpen,
  },
  {
    year: "2010s",
    title: "Literary Expansion",
    description:
      "Published multiple works including 'Fashionwad Zindabad', 'Phir Subah Hogi', and 'Yaadon Ke Satrein'.",
    icon: HiBookOpen,
  },
  {
    year: "2022",
    title: "Prolific Year",
    description:
      "Published numerous diary entries and memoirs, marking a significant period of literary output.",
    icon: HiBookOpen,
  },
];

const achievements = [
  {
    icon: HiBookOpen,
    title: "17+ Books",
    description: "Published works spanning multiple genres and themes",
  },
  {
    icon: HiNewspaper,
    title: "40+ Years",
    description: "Distinguished career in journalism and literature",
  },
  {
    icon: HiAcademicCap,
    title: "1000s of Readers",
    description: "Touching lives through words across generations",
  },
  {
    icon: HiHeart,
    title: "Multiple Formats",
    description: "Available in print, ebook, and audio (Kuku FM)",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-literary-light dark:bg-literary-ink">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-400 to-primary-600 rounded-3xl opacity-20 blur-lg" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/authorr.jpeg"
                    alt="Jyotindra Nath Prasad"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                      <HiLocationMarker className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Based in
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        Patna, Bihar
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
                <HiBookOpen className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                <span className="text-sm font-medium text-accent-800 dark:text-accent-300">
                  About the Author
                </span>
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                The Journey of a
                <span className="text-accent-600 dark:text-accent-400 block">
                  Lifelong Storyteller
                </span>
              </h1>

              <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Jyotindra Nath Prasad
                  </strong>{" "}
                  was born on May 9, 1955, in the village of Enkhaun in Dulhin
                  Bazar, Bihta, in the Patna district of Bihar. His journey into
                  the world of literature and journalism began with his
                  graduation in English from Patna College, Patna University, in
                  1976.
                </p>
                <p>
                  As a dedicated journalist and litterateur, Prasad has made
                  significant contributions to the field of journalism, having
                  served as a staff reporter for the prestigious{" "}
                  <em>Hindustan Times</em>. His journalistic background has
                  enriched his literary works, bringing authenticity and depth
                  to his narratives.
                </p>
                <p>
                  Prasad is a family man, married with one son and one daughter,
                  and continues to reside in Patna. His literary works are
                  available as podcasts on Kuku FM Radio, making literature
                  accessible to a broader audience through audio format.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/#books-section">
                  <button className="btn-primary flex items-center space-x-2">
                    <HiBookOpen className="w-5 h-5" />
                    <span>Explore Books</span>
                  </button>
                </Link>
                <a
                  href="https://kuku.fm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-secondary flex items-center space-x-2">
                    <HiDownload className="w-5 h-5" />
                    <span>Listen on Kuku FM</span>
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-literary-cream dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-literary-cream dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Life Journey
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Key milestones that shaped a remarkable literary career
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      } max-w-md`}
                    >
                      <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-bold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <milestone.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Background
              </h3>
              <ul className="space-y-4">
                {[
                  "Former Staff Reporter at Hindustan Times",
                  "Graduate in English from Patna College, Patna University (1976)",
                  "Regular contributor to Hindi magazines and journals",
                  "Contemporary issues analyst and commentator",
                  "Expert in political and social commentary",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Literary Achievements
              </h3>
              <ul className="space-y-4">
                {[
                  "17+ published books in Hindi and English literature",
                  "Audio books available on Kuku FM Radio platform",
                  "Recognized for thought-provoking narratives",
                  "Bridge between journalism and literature",
                  "Voice for social change and awareness",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary-900 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="quote-mark text-white/30">&ldquo;</span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-white italic leading-relaxed -mt-8">
              Literature is a penance, in which writers bare their souls to the
              world. Every word written is a step towards understanding the
              intricate tapestry of human existence.
            </blockquote>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-accent-400" />
              <cite className="text-gray-400 not-italic font-medium">
                Jyotindra Nath Prasad
              </cite>
              <div className="w-12 h-px bg-accent-400" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
