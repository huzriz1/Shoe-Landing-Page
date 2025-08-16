import React from 'react'
import Link from 'next/link'

const socialLinks = [
	{
		href: 'https://facebook.com',
		label: 'Facebook',
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
				<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
			</svg>
		),
	},
	{
		href: 'https://instagram.com',
		label: 'Instagram',
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.388 3.678 1.369c-.98.98-1.238 2.092-1.297 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.317 2.393 1.297 3.373.98.98 2.092 1.238 3.373 1.297C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.317 3.373-1.297.98-.98 1.238-2.092 1.297-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.317-2.393-1.297-3.373-.98-.98-2.092-1.238-3.373-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
			</svg>
		),
	},
	{
		href: 'https://twitter.com',
		label: 'Twitter',
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
				<path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
			</svg>
		),
	},
]

const Footer = () => {
	return (
		<footer className="bg-primary text-primary-foreground px-6 py-8 mt-10">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
				{/* Brand Logo */}
				<div className="mb-4 md:mb-0">
					<span className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
						Elysian <span className="font-bold">Kicks</span>
					</span>
				</div>
				{/* Social Icons */}
				<div className="flex gap-6 mb-4 md:mb-0">
					{socialLinks.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className="text-primary-foreground hover:text-yellow-400 transition-colors duration-300"
						>
							{icon}
						</Link>
					))}
				</div>
				{/* Links */}
				<div className="flex flex-col items-center md:items-end gap-2">
					<div className="flex gap-4 mb-2">
						<Link
							href="#"
							className="hover:underline hover:text-yellow-400 transition-colors duration-300"
						>
							Contact Us
						</Link>
						<Link
							href="#"
							className="hover:underline hover:text-yellow-400 transition-colors duration-300"
						>
							Privacy Policy
						</Link>
					</div>
					<span className="text-xs opacity-70">
						&copy; {new Date().getFullYear()} Elysian Kicks. All rights reserved. Made by Huzaifa.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
