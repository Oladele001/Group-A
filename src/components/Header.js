'use client';

import Link from 'next/link';
import Image from "next/image";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-600/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/50' : 'bg-blue-600/95 backdrop-blur-xl border-b border-blue-500/50'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-3 text-2xl font-extrabold text-white font-jakarta group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                 <Image
                  src="/logo.jpeg"
                  alt="Group A Hospital Founder"
                  width={35}
                  height={35}
                  className="w-[35] h-[35] object-contain rounded-xl"
                  />
              </div>
              <span className="hidden sm:block text-white font-bold">Group A Hospital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link 
              href="/" 
              className="relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-105 font-jakarta text-white group shadow-sm hover:shadow-md"
            >
              <span className="relative z-10 text-white">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-blue-600/20"></div>
            </Link>
            <Link 
              href="/about" 
              className="relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-105 font-jakarta text-white group shadow-sm hover:shadow-md"
            >
              <span className="relative z-10 text-white">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-blue-600/20"></div>
            </Link>
            <Link 
              href="/services" 
              className="relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-105 font-jakarta text-white group shadow-sm hover:shadow-md"
            >
              <span className="relative z-10 text-white">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 rounded-2xl transition-all duration-300 group-hover:from-blue-500/20 group-hover:to-blue-600/20"></div>
            </Link>
            <Link 
              href="/contact" 
              className="relative px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl text-sm font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 font-jakarta shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <span className="relative z-10 text-white">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/30 rounded-2xl transition-all duration-300 group-hover:from-white/20 group-hover:to-white/40"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-2xl text-white hover:text-white hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
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
          <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-gray-700 shadow-2xl transform transition-all duration-300 ease-in-out origin-top-left animate-slideInLeft">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <Link 
                href="/" 
                className="block px-5 py-3 rounded-2xl text-base font-bold text-white hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-5 py-3 rounded-2xl text-base font-bold text-white hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-5 py-3 rounded-2xl text-base font-bold text-white hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block w-full mt-4 bg-blue-800 text-white px-6 py-3 rounded-2xl text-base font-bold hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
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
