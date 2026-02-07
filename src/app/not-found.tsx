"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Footer } from "../components/footer";
import { HiHome, HiBookOpen } from "react-icons/hi";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-literary-light dark:bg-literary-ink">
            <Navigation />

            <div className="pt-32 pb-20 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg max-w-md mx-4"
                >
                    <div className="w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HiBookOpen className="w-10 h-10 text-accent-600 dark:text-accent-400" />
                    </div>
                    <h1 className="font-serif text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                        404
                    </h1>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <button className="btn-primary flex items-center justify-center space-x-2">
                                <HiHome className="w-5 h-5" />
                                <span>Go Home</span>
                            </button>
                        </Link>
                        <Link href="/books">
                            <button className="btn-secondary flex items-center justify-center space-x-2">
                                <HiBookOpen className="w-5 h-5" />
                                <span>Browse Books</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
