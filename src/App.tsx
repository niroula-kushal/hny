import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ConfettiButton } from './components/ConfettiButton';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div
        className={`text-center transform transition-all duration-1000 ${
          mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text">
            Happy New Year! 🎉
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-md">
            Wishing you all a year filled with knowledge, growth, and incredible
            achievements! ✨ 🌟 🎊
          </p>
          <ConfettiButton />
        </div>
      </div>
    </div>
  );
}

export default App;
