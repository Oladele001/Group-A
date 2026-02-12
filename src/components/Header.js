'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-3 text-2xl font-extrabold gradient-text font-jakarta"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                GA
              </div>
              <span className="hidden sm:block">Group A Hospital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-50 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-50 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-50 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 font-jakarta btn-primary"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Theme Toggle - Bottom Right Corner */}
          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-xl hover:scale-110 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
              title="Toggle dark/light mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg text-center font-jakarta btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
