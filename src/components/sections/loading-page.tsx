"use client";

import { useState, useEffect } from 'react';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage = ({ onComplete }: LoadingPageProps) => {
  const [stage, setStage] = useState<'vantablack' | 'line' | 'symbol' | 'question' | 'options' | 'charging' | 'complete'>('vantablack');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [chargingText, setChargingText] = useState('');

  const chargingSequence = [
    "Charging your Aura…",
    "Entering the Auraverse…", 
    "Calculating your Aura based on your choice…"
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('line'), 1000);
    const timer2 = setTimeout(() => setStage('symbol'), 2000);
    const timer3 = setTimeout(() => setStage('question'), 3500);
    const timer4 = setTimeout(() => setStage('options'), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setStage('charging');
    
    let textIndex = 0;
    const showChargingText = () => {
      if (textIndex < chargingSequence.length) {
        setChargingText(chargingSequence[textIndex]);
        textIndex++;
        setTimeout(showChargingText, 1500);
      } else {
        setTimeout(() => {
          setStage('complete');
          setTimeout(onComplete, 500);
        }, 1000);
      }
    };
    
    setTimeout(showChargingText, 500);
  };

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Vantablack Background */}
      <div className="absolute inset-0 bg-black" />

      {/* White Line Animation */}
      {stage !== 'vantablack' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`bg-white transition-all duration-1000 ease-out ${
              stage === 'line' 
                ? 'w-32 h-0.5' 
                : stage === 'symbol'
                ? 'w-24 h-24 rounded-full border-2 border-white bg-transparent'
                : 'w-24 h-24 rounded-full border-2 border-white bg-transparent opacity-20'
            }`}
          >
            {/* Aurameter Symbol */}
            {(stage === 'symbol' || stage === 'question' || stage === 'options' || stage === 'charging') && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">A</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Question */}
      {stage === 'question' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mt-32 animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              ARE YOU READY FOR AURA FARMING?
            </h1>
            <p className="text-white/60 text-sm">(Choose wisely.)</p>
          </div>
        </div>
      )}

      {/* Options */}
      {stage === 'options' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              ARE YOU READY FOR AURA FARMING?
            </h1>
            <p className="text-white/60 text-sm">(Choose wisely.)</p>
          </div>
          
          <div className="space-y-4 animate-slide-up">
            <button
              onClick={() => handleOptionClick(1)}
              className="block w-64 py-4 px-8 bg-white/10 border border-white/20 text-white font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              1. Yeah.
            </button>
            <button
              onClick={() => handleOptionClick(2)}
              className="block w-64 py-4 px-8 bg-white/10 border border-white/20 text-white font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              2. Hell Yeah.
            </button>
          </div>
        </div>
      )}

      {/* Charging Text */}
      {stage === 'charging' && (
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="animate-glitch">
            <p className="text-xl md:text-2xl font-bold text-white glitch-text">
              {chargingText}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(2px); }
          30% { transform: translateX(-1px); }
          40% { transform: translateX(1px); }
          50% { transform: translateX(-2px); }
          60% { transform: translateX(2px); }
          70% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          90% { transform: translateX(-2px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
        
        .glitch-text {
          text-shadow: 
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;