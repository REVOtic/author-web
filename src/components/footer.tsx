import React from "react";
import Link from "next/link";
const CURRENT_YEAR = new Date().getFullYear();
export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-gray-300 italic">
            &ldquo;Knowledge is not just power - it&apos;s the light that guides
            us through the darkness of ignorance, illuminating paths yet
            undiscovered.&rdquo;
          </p>
        </div>
        <div className="flex justify-center space-x-8 mb-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/Books"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            Books
          </Link>
          <Link
            href="/Contact"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {CURRENT_YEAR} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
