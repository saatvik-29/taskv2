'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#2B63D9] text-white">

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-start space-x-2">
          <Image src="/CompanyLogo.svg" alt="Logo" width={130} height={130} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-start">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <div className="relative group">
            <button
              className="flex items-center space-x-1 hover:text-blue-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Our Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <ul className={`absolute left-0 top-8 bg-blue-700 rounded shadow-md py-2 px-4 space-y-1 text-sm transition-all duration-200 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
              <li><Link href="#">docs</Link></li>
            </ul>
          </div>
          <Link href="#" className="hover:text-blue-200">Resources</Link>
          <Link href="#" className="hover:text-blue-200">Contacts</Link>
        </nav>

        {/* Right Side Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="hover:text-blue-200 px-4 py-2 rounded-md text-white">Log in</Link>
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md text-white">Sign up</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-4">
          <Link href="/" className="block">Home</Link>

          <div>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Our Products</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="#">docs</Link>
                
              </div>
            )}
          </div>

          <Link href="#" className="block">Resources</Link>
          <Link href="#" className="block">Contacts</Link>
          <Link href="/login" className="block bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md text-center">Log in</Link>
          <Link href="/signup" className="block bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md text-center">Sign up</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
