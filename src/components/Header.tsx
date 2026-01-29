import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            <span className="font-black">TestMu AI</span>
          </div>
          <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-400'}`}>
            Formerly LAMBDATEST
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Platform ▼
          </button>
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Solutions ▼
          </button>
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Resources ▼
          </button>
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            AI Agents ▼
          </button>
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Pricing
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Login
          </button>
          <button className={`text-sm px-4 py-2 rounded ${isScrolled ? 'text-gray-700 border border-gray-300' : 'text-white border border-white'}`}>
            Book a Demo
          </button>
          <button className="text-sm px-4 py-2 bg-black text-white rounded">
            Get Started Free
          </button>
        </div>
      </div>
    </header>
  );
}
