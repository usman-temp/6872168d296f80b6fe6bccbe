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
}
