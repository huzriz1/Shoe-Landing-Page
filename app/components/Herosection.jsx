"use client";
// components/HeroSection.js
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only animate when the section is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far the section is from the top of the viewport
        const scrollY = Math.max(0, windowHeight - rect.top);
        setOffset(scrollY * 0.15); // Adjust 0.15 for more/less movement
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        
        style={{ '--primary-foreground': 'white' }}
        ref={sectionRef}
        className="relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-center overflow-hidden"
      >
        {/* Parallax Image */}
        <div className="absolute inset-0 z-0 h-full w-full will-change-transform">
          <div
            style={{
              transform: `translateY(${offset}px)`,
              transition: 'transform 0.1s linear',
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <Image
              src="/hero-section-shoe-image.jpg"
              alt="Hero Background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-primary-foreground text-center p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl tracking-tight leading-tight font-bold mb-4 mt-6 typing-animation w-fit">Step into Style.</h1>
          <p className="text-lg md:text-xl mb-8">Experience the perfect blend of comfort and modern design.</p>
          <button className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg text-primary-foreground hover:bg-white/50 transition-colors duration-300">
            Explore Collection
          </button>
          <div className='flex  items-center mt-8 justify-center gap-8 border-b-2 border-primary-foreground '>
          <p className="text-lg font-bold md:text-xl mb-4">100% relaible</p>
          {/* SVG Icon */}
          <div className="w-16 h-16  mb-4">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="quality-4" transform="translate(-2 -2)"> <path id="secondary" fill="#2c0000" d="M12,3a7,7,0,1,0,7,7,7,7,0,0,0-7-7Zm1.24,8.75L12,11.15l-1.24.6L11,10.48l-1-.89,1.38-.19L12,8.25l.62,1.15L14,9.59l-1,.89Z"></path> <path id="primary" d="M5.79,13.57,3,17.56l3.03.9L7.91,21l2.88-4.11" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-2" data-name="primary" d="M18.21,13.57,21,17.56l-3.03.9L16.09,21l-2.88-4.11" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path id="primary-3" data-name="primary" d="M12.62,9.4,14,9.59l-1,.89.24,1.27L12,11.15l-1.24.6L11,10.48l-1-.89,1.38-.19L12,8.25ZM12,3a7,7,0,1,0,7,7,7,7,0,0,0-7-7Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g></svg>
          </div>
          </div>
        </div>
      </section>
      {/* Temporary spacer for scroll */}
      
    </>
  );
}