/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur shadow-sm"
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between p-4 md:px-8"
        aria-label="Main navigation"
      >
        <Link href="#" className="text-2xl font-bold text-black dark:text-white">
          MyPortfolio
        </Link>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}