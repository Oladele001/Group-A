'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' : 'bg-transparent'} dark:bg-gray-900/95 dark:border-gray-800/50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-3 text-2xl font-extrabold gradient-text font-jakarta group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  <path fill="white" d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <span className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-bold">Group A Hospital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link 
              href="/" 
              className="relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 hover:scale-105 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/10 group-hover:to-blue-600/10"></div>
            </Link>
            <Link 
              href="/about" 
              className="relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 hover:scale-105 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/10 group-hover:to-blue-600/10"></div>
            </Link>
            <Link 
              href="/services" 
              className="relative px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 hover:scale-105 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/10 group-hover:to-blue-600/10"></div>
            </Link>
            <Link 
              href="/contact" 
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 font-jakarta shadow-lg group"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 rounded-2xl transition-all duration-300 group-hover:from-white/20 group-hover:to-white/30"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-2xl dark:bg-gray-900/98 dark:border-gray-800">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 font-jakarta dark:text-gray-300 dark:hover:text-blue-400 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block w-full mt-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-3 rounded-2xl text-base font-semibold transition-all duration-300 hover:shadow-xl text-center font-jakarta shadow-lg"
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
