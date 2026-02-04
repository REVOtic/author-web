"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiBookOpen,
  HiMail,
  HiLocationMarker,
  HiArrowUp,
} from "react-icons/hi";

const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = {
  explore: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Books", href: "/#books-section" },
    { name: "Contact", href: "/contact" },
  ],
  books: [
    { name: "Yadon Ke Galiyare Se", href: "/book/yadon-ke-galiyare-se" },
    { name: "My Date With Editors", href: "/book/my-date-with-editors" },
    { name: "Phir Subah Hogi", href: "/book/phir-subah-hogi" },
    { name: "Raag-Viraag", href: "/book/raag-viraag" },
  ],
  connect: [
    {
      name: "Amazon",
      href: "https://www.amazon.in/stores/Jyotindra-Nath-Prasad/author/B07T58GRJW",
    },
    {
      name: "Kuku FM",
      href: "https://kukufm.com/explore?q=jyotindra",
    },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-950 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Links Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-2xl font-bold">
                  JN<span className="text-accent-400">.</span>Prasad
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A distinguished author and journalist from Bihar, India,
                dedicated to illuminating the human experience through
                literature.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.amazon.in/stores/Jyotindra-Nath-Prasad/author/B07T58GRJW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Amazon"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.582l.315-.158c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.045-.113z" />
                    <path d="M15.37 13.282c.885-.844 1.387-1.67 1.387-2.493 0-.645-.369-1.16-.985-1.516-.613-.355-1.455-.503-2.53-.503-1.268 0-2.47.22-3.617.503l-.36.09c-.345.088-.553.11-.636.09-.146-.044-.19-.188-.19-.537v-2.75c0-.366.044-.578.19-.645.146-.066.467-.11.913-.176 1.458-.247 2.86-.36 4.19-.36 1.898 0 3.35.39 4.39 1.178 1.03.787 1.537 1.79 1.537 3.04 0 .948-.323 1.837-.992 2.69-.67.851-1.673 1.694-3.023 2.538-1.213.754-2.37 1.325-3.463 1.72-.196.073-.39.11-.585.11-.217 0-.325-.133-.325-.4v-2.62c0-.31.023-.51.085-.59.064-.08.21-.156.452-.238.85-.278 1.62-.626 2.32-1.052.776-.466 1.41-.976 1.89-1.517z" />
                  </svg>
                </a>
                <a
                  href="https://kukufm.com/explore?q=jyotindra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Kuku FM"
                >
                  <HiBookOpen className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Explore Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg mb-6">Explore</h3>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Featured Books */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg mb-6">Featured Books</h3>
              <ul className="space-y-4">
                {footerLinks.books.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <HiLocationMarker className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Patna, Bihar, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <HiMail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <a
                    href="mailto:prasadjyotindra@gmail.com"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    prasadjyotindra@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {CURRENT_YEAR} Jyotindra Nath Prasad. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors"
              >
                <span className="text-sm">Back to top</span>
                <HiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
