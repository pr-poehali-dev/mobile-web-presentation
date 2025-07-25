import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #e6e9f0 0%, #d1d8e8 50%, #b8c4db 100%)'
    }}>
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-10 left-20 w-24 h-24 text-gray-400 transform rotate-12" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
        <svg className="absolute top-32 right-16 w-16 h-16 text-gray-300 transform -rotate-45" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-20 left-10 w-20 h-20 text-gray-400 transform rotate-45" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 Q20 20 50 20 Q80 20 80 50 Q80 80 50 80 Q20 80 20 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Decorative leaves */}
        <div className="relative mb-8">
          {/* Top leaf */}
          <svg className="absolute -top-16 -left-8 w-24 h-32 transform -rotate-12" viewBox="0 0 100 120" fill="none">
            <path 
              d="M50 10 Q30 30 35 60 Q40 90 50 110 Q60 90 65 60 Q70 30 50 10 Z" 
              fill="#9eb842" 
              stroke="#2d3748" 
              strokeWidth="3"
              className="drop-shadow-sm"
            />
            <path d="M50 15 Q45 35 50 55 Q55 75 50 95" stroke="#2d3748" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Right leaf */}
          <svg className="absolute -top-12 -right-6 w-20 h-28 transform rotate-24" viewBox="0 0 100 120" fill="none">
            <path 
              d="M50 10 Q30 30 35 60 Q40 90 50 110 Q60 90 65 60 Q70 30 50 10 Z" 
              fill="#9eb842" 
              stroke="#2d3748" 
              strokeWidth="3"
              className="drop-shadow-sm"
            />
            <path d="M50 15 Q45 35 50 55 Q55 75 50 95" stroke="#2d3748" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Bottom left leaf */}
          <svg className="absolute -bottom-8 -left-12 w-22 h-30 transform rotate-45" viewBox="0 0 100 120" fill="none">
            <path 
              d="M50 10 Q30 30 35 60 Q40 90 50 110 Q60 90 65 60 Q70 30 50 10 Z" 
              fill="#9eb842" 
              stroke="#2d3748" 
              strokeWidth="3"
              className="drop-shadow-sm"
            />
            <path d="M50 15 Q45 35 50 55 Q55 75 50 95" stroke="#2d3748" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Main content card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-lg text-center border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 transform -rotate-1 handwritten-fancy" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Добро пожаловать!
            </h1>
            
            <div className="relative mb-8">
              <p className="text-lg text-gray-700 leading-relaxed transform rotate-1 handwritten">
                Здесь живут самые креативные идеи и волшебные проекты ✨
              </p>
              
              {/* Handwritten style underline */}
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4" viewBox="0 0 200 20" fill="none">
                <path 
                  d="M10 15 Q50 5 100 12 Q150 8 190 14" 
                  stroke="#e91e63" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </div>

            <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transform hover:scale-110 transition-all duration-200 border-3 border-gray-800 kidsy">
              Начать творить! 🎨
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-16 left-1/4">
          <svg className="w-16 h-16 text-purple-600 transform -rotate-12" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" stroke="#2d3748" strokeWidth="3" rx="8"/>
            <circle cx="35" cy="35" r="3" fill="white"/>
            <circle cx="65" cy="35" r="3" fill="white"/>
            <path d="M40 60 Q50 70 60 60" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Handwritten notes */}
        <div className="absolute top-24 right-20 transform rotate-12">
          <p className="text-pink-500 text-lg handwritten-fancy" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            # твой космос
          </p>
          <p className="text-pink-500 text-base mt-1 handwritten-fancy">
            для идей
          </p>
        </div>

        <div className="absolute bottom-32 right-16 transform -rotate-6">
          <p className="text-blue-600 text-sm kidsy">
            poehali.dev ✈️
          </p>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{
        animationDelay: '0.5s'
      }}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{
        animationDelay: '1s'
      }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{
        animationDelay: '1.5s'
      }}></div>
    </div>
  );
};

export default Index;