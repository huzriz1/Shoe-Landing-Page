"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './themeToggleButton'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-primar   top-0 w-full z-50 text-primary-foreground  flex justify-between items-center bg-white/0 backdrop-blur-md rounded-lg p-6 shadow-lg '>
      <div className="logo z-20">
        <h1 className='text-2xl font-extrabold'>Elysian <span className='font-bold'>Kicks</span></h1>
      </div>
      {/* Hamburger Icon */}
      <div className='md:hidden flex items-center gap-2'>
      <ModeToggle />
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        type="button"
      >
        <span className={`block h-1 w-6 bg-primary-foreground rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-1 w-6 bg-primary-foreground rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-1 w-6 bg-primary-foreground rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button></div>
      {/* Desktop Menu */}
      <ul className="items md:flex gap-5 hidden">
        <Link href={'/'}>Home</Link>
        <Link href={'#key-feature'}>Key Feature</Link>
        <Link href={'#cta'}>Call To Action</Link>
        <ModeToggle />
      </ul>
      {/* <div className="buttons md:flex gap-3 hidden">
        <Button>Sign up</Button>
        <Button>Login</Button>
        
      </div> */}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary bg-opacity-95 flex flex-col items-center justify-center gap-8 transition-all duration-300 z-10 ${
          menuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <ul className="flex flex-col gap-8 items-center">
          <Link href={'/'} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href={'#key-feature'} onClick={() => setMenuOpen(false)}>Key Feature</Link>
          <Link href={'#cta'} onClick={() => setMenuOpen(false)}>Call To Action</Link>
        </ul>
        <div className="flex flex-col gap-4 items-center w-full">
          <Button className={'w-full'} onClick={() => setMenuOpen(false)}>Sign up</Button>
          <Button className={'w-full'} onClick={() => setMenuOpen(false)}>Login</Button>
          
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar