/* eslint-disable */
'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          My Work & Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-center mb-10"
        >
          A selection of projects that reflect my experience, interests, and creativity.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">Project Title {item}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Brief description of the project. Highlight technologies, goals, and results.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}