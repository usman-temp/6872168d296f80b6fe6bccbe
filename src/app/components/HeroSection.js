/* eslint-disable */
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white px-6 py-20 md:px-16">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
        >
          I'm a passionate developer crafting interactive experiences and beautiful UIs for the modern web.
        </motion.p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold shadow transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}