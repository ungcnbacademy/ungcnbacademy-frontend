'use client';
import React, { useEffect, useState } from 'react';
import styles from './carousel.module.css';

export default function Carousel({
  slides = [],
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = false,
  pauseOnHover = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (autoPlay && !isPaused && slides.length > 1) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, interval, slides.length, isPaused]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Don't render anything if there are no slides
  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div
        className={styles.main}
        onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
        onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
        style={slides.length > 1 && showArrows ? {margin: '10px'} : {}}
      >
        {showArrows && slides.length > 1 && (
          <div className={styles.previousBtn} onClick={prevSlide}>
            &#10094;
          </div>
        )}
        <div className={styles.container}>
          {slides.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${index === activeIndex && styles.active }`}
            >
              {item}
            </div>
          ))}
        </div>

        {showArrows && slides.length > 1 && (
          <div className={styles.nextBtn} onClick={nextSlide}>
            &#10095;
          </div>
        )}
        {showDots && slides.length > 1 && (
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === activeIndex && styles.active}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}