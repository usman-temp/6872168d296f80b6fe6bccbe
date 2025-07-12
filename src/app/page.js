export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="w-full px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-[#111]">
        <h1 className="text-2xl font-bold text-indigo-400">PromptStack</h1>
        <span className="text-sm text-gray-500">v1.0 Beta</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">
            🚀 Ready to Build Something?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            PromptStack converts your plain English ideas into full websites. Just tell us what to build.
          </p>

          {/* Empty State Prompt Input (initial non-functional) */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-500 mb-4 text-sm">Start by entering a prompt:</p>
            <input
              type="text"
              placeholder="e.g., Build a SaaS landing page with pricing section and testimonials"
              disabled
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-500 cursor-not-allowed"
            />
            <button
              disabled
              className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 cursor-not-allowed"
            >
              Generate Website
            </button>
          </div>

          <p className="text-gray-600 mt-6 text-sm italic">
            PromptStack is in pre-alpha. Prompt generation will be live soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
        © 2025 PromptStack. Built with ♥ by developers for developers.
      </footer>
    </div>
  );

    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="w-full px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-[#111]">
        <h1 className="text-2xl font-bold text-indigo-400">PromptStack</h1>
        <span className="text-sm text-gray-500">v1.0 Beta</span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">
            🚀 Ready to Build Something?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            PromptStack converts your plain English ideas into full websites. Just tell us what to build.
          </p>

          {/* Empty State Prompt Input (initial non-functional) */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-500 mb-4 text-sm">Start by entering a prompt:</p>
            <input
              type="text"
              placeholder="e.g., Build a SaaS landing page with pricing section and testimonials"
              disabled
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-500 cursor-not-allowed"
            />
            <button
              disabled
              className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 cursor-not-allowed"
            >
              Generate Website
            </button>
          </div>

          <p className="text-gray-600 mt-6 text-sm italic">
            PromptStack is in pre-alpha. Prompt generation will be live soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
        © 2025 PromptStack. Built with ♥ by developers for developers.
      </footer>
    </div>
  );
}
import { motion } from 'framer-motion';
import Portfolio from './components/Portfolio';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 flex flex-col scroll-smooth">
      {' '}
      <header className="w-full px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-[#111] sticky top-0 z-50">
        {' '}
        <h1 className="text-2xl font-bold text-indigo-400">PromptStack</h1>{' '}
        <nav className="space-x-4 text-sm hidden md:block">
          {' '}
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>{' '}
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>{' '}
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>{' '}
        </nav>{' '}
      </header>{' '}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20"
      >
        {' '}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to My Portfolio
        </h2>{' '}
        <p className="text-lg text-gray-400 max-w-xl">
          {' '}
          Showcasing modern web designs, React/Next.js projects and UI/UX
          engineering expertise.{' '}
        </p>{' '}
      </motion.section>{' '}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        {' '}
        <h3 className="text-3xl font-semibold text-indigo-400 mb-4">
          About Me
        </h3>{' '}
        <p className="text-gray-300 leading-relaxed">
          {' '}
          I'm a passionate developer focused on building performant and
          accessible web applications using modern JavaScript frameworks like
          React and Next.js. I value elegant UI and seamless UX.{' '}
        </p>{' '}
      </motion.section>{' '}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 px-6 py-20"
      >
        {' '}
        <h3 className="text-3xl font-semibold text-center text-indigo-400 mb-10">
          My Projects
        </h3>{' '}
        <Portfolio />{' '}
      </motion.section>{' '}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        {' '}
        <h3 className="text-3xl font-semibold text-indigo-400 mb-6">
          Contact
        </h3>{' '}
        <p className="text-gray-300 mb-6">
          {' '}
          Interested in working together? Let's chat! Reach out via email or
          connect with me on LinkedIn.{' '}
        </p>{' '}
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          {' '}
          Say Hello{' '}
        </a>{' '}
      </motion.section>{' '}
      <footer className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
        {' '}
        2025 PromptStack. Built with by developers for developers.{' '}
      </footer>{' '}
    </div>
  );
}
