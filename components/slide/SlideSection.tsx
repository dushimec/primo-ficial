'use client';

import React, { useState, useEffect, useRef, TouchEvent } from 'react';

interface Slide {
  url: string;
  title: string;
}

const images: Slide[] = [
  {
    url: 'https://via.placeholder.com/1200x400?text=Image+1',
    title: 'Slide 1 Caption',
  },
  {
    url: 'https://via.placeholder.com/1200x400?text=Image+2',
    title: 'Slide 2 Caption',
  },
  {
    url: 'https://via.placeholder.com/1200x400?text=Image+3',
    title: 'Slide 3 Caption',
  },
  {
    url: 'https://via.placeholder.com/1200x400?text=Image+4',
    title: 'Slide 4 Caption',
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative w-full h-96 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image.url}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-md text-sm md:text-base">
            {image.title}
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full z-20"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full z-20"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full border border-white ${
              index === currentIndex ? 'bg-white' : 'bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* Autoplay toggle */}
      <button
        onClick={() => setAutoplay((prev) => !prev)}
        className="absolute top-4 right-4 bg-white/90 text-sm px-3 py-1 rounded z-20"
      >
        {autoplay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Slider;
