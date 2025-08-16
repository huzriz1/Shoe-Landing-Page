"use client"
import React from 'react'

const CallToAction = () => {
  return (
    <div id='cta' className="bg-primary text-primary-foreground p-8 mt-10 rounded-lg shadow-lg h-[70vh] flex items-center justify-center">
      <div className="bg-white/0 backdrop-blur-md rounded-lg p-6 shadow-lg w-full max-w-xl mx-auto">
        <h2
          className="
            text-3xl font-bold mb-4 text-center
            transition-all duration-300
            hover:text-transparent
            hover:bg-clip-text
            hover:bg-gradient-to-r
            hover:from-yellow-400
            hover:via-pink-500
            hover:to-red-500
            cursor-pointer
          "
        >
          Ready to upgrade your footwear?
        </h2>
        <p className="text-center mb-6 text-base md:text-lg">
          Join our mailing list for exclusive deals and latest updates.
        </p>
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/80 transition"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default CallToAction
