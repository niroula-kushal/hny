import React from 'react';
import { PartyPopper } from 'lucide-react';
import { triggerRandomConfetti } from '../utils/confetti';

export const ConfettiButton: React.FC = () => {
  return (
    <button
      onClick={triggerRandomConfetti}
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full 
        font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all
        flex items-center gap-2"
    >
      <PartyPopper className="w-6 h-6" />
      Celebrate!
    </button>
  );
};