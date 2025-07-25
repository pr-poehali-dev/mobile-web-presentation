import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Вайбкодинг",
      subtitle: "Новая эра разработки",
      content: "Создавай приложения через чувства и интуицию. Когда код живёт в гармонии с твоими идеями.",
      emoji: "✨",
      bgGradient: "from-orange-400 via-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Что такое вайбкодинг?",
      subtitle: "Определение",
      content: "Программирование через эмоции и эстетику. Когда каждая строка кода отражает твоё внутреннее состояние и создаёт нужную атмосферу.",
      emoji: "🎨",
      bgGradient: "from-blue-400 via-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "История успеха #1",
      subtitle: "Анна, фронтенд-разработчица",
      content: "Создала медитативное приложение за выходные. Использовала только плавные анимации и природные цвета. Приложение скачали 100К раз за месяц.",
      emoji: "🧘‍♀️",
      bgGradient: "from-green-400 via-blue-500 to-purple-500"
    },
    {
      id: 4,
      title: "История успеха #2",
      subtitle: "Макс, инди-разработчик",
      content: "Запустил игру с пиксель-артом, вдохновившись ностальгией по 90-м. Работал только ночами под лофи-музыку. Заработал $50К на Steam.",
      emoji: "🎮",
      bgGradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "История успеха #3",
      subtitle: "Лиза, дизайнер-программист",
      content: "Создала AI-помощника для креативных людей. Каждая функция вдохновлена синестезией. Получила $500К инвестиций от Y Combinator.",
      emoji: "🚀",
      bgGradient: "from-purple-400 via-pink-500 to-red-500"
    },
    {
      id: 6,
      title: "Заключение",
      subtitle: "Твоя очередь",
      content: "Вайбкодинг — это не просто трендт. Это революция в том, как мы создаём технологии. Начни программировать сердцем уже сегодня.",
      emoji: "💝",
      bgGradient: "from-pink-400 via-red-500 to-yellow-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.bgGradient} flex items-center justify-center p-6`}>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 max-w-md w-full text-center animate-fade-in">
                <div className="text-6xl mb-6">{slide.emoji}</div>
                <h1 className="text-3xl font-bold mb-2 text-white">{slide.title}</h1>
                <h2 className="text-lg font-medium mb-6 text-white/80">{slide.subtitle}</h2>
                <p className="text-white/90 leading-relaxed">{slide.content}</p>
              </Card>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <Button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
          size="icon"
          variant="outline"
        >
          <Icon name="ChevronLeft" size={20} />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
          size="icon"
          variant="outline"
        >
          <Icon name="ChevronRight" size={20} />
        </Button>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-white/60 text-sm">
          <Icon name="ArrowLeft" size={16} />
          <span>Свайп или используй стрелки</span>
          <Icon name="ArrowRight" size={16} />
        </div>
      </div>

      {/* Touch Navigation for Mobile */}
      <div 
        className="absolute inset-0 flex"
        onTouchStart={(e) => {
          const touchStartX = e.touches[0].clientX;
          const handleTouchEnd = (endEvent: TouchEvent) => {
            const touchEndX = endEvent.changedTouches[0].clientX;
            const diffX = touchStartX - touchEndX;
            
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
              if (diffX > 0) {
                nextSlide();
              } else {
                prevSlide();
              }
            }
            
            document.removeEventListener('touchend', handleTouchEnd);
          };
          
          document.addEventListener('touchend', handleTouchEnd);
        }}
      >
        <div className="w-1/3 h-full" onClick={prevSlide} />
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Index;