"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from './themeToggleButton'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="top-0 w-full z-50 text-primary-foreground flex justify-between items-center bg-primary p-6 shadow-lg fixed">
      {/* Logo */}
      <div className="logo z-20">
        <h1 className="text-2xl font-extrabold">Elysian <span className="font-bold">Kicks</span></h1>
      </div>

      {/* Desktop Links */}
      <ul className="md:flex gap-8 hidden items-center">
        <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link href="#key-feature" className="hover:text-yellow-400 transition">Key Feature</Link>
        <Link href="#cta" className="hover:text-yellow-400 transition">Call To Action</Link>
        <ModeToggle />
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <button
          className="flex flex-col justify-center items-center w-8 h-8 z-30"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
          type="button"
        >
          <span className="block h-1 w-6 bg-primary-foreground rounded transition-all duration-300 mb-1"></span>
          <span className="block h-1 w-6 bg-primary-foreground rounded transition-all duration-300 mb-1"></span>
          <span className="block h-1 w-6 bg-primary-foreground rounded transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay with Tailwind Animation */}
      <div
        className={`
          fixed inset-0 z-50 bg-primary flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        {/* Top bar with logo and close button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-primary-foreground/10">
          <span className="text-2xl font-extrabold">Elysian <span className="font-bold">Kicks</span></span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold"
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>
        {/* Menu links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-xl font-semibold hover:text-yellow-400 transition">Home</Link>
          <Link href="#key-feature" onClick={() => setMenuOpen(false)} className="text-xl font-semibold hover:text-yellow-400 transition">Key Feature</Link>
          <Link href="#cta" onClick={() => setMenuOpen(false)} className="text-xl font-semibold hover:text-yellow-400 transition">Call To Action</Link>
          <button className="mt-4 px-6 py-2 rounded-md bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/80 transition">Sign up</button>
          <button className="px-6 py-2 rounded-md bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/80 transition">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar