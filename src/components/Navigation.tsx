import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          JN Prasad
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/Books"
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
        >
          Books
        </Link>
        <Link
          href="/Contact"
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile menu button and theme toggle */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white dark:text-white hover:text-yellow-400"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Books"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              href="/Contact"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
