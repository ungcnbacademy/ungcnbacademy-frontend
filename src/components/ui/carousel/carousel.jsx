'use client';
import React, { useEffect, useState } from 'react';
import styles from './carousel.module.css';
import Button from '../button/button';

export default function Carousel({ data = [{ children }], autoPlay = true, interval = 1000, showDots = true }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, interval, data.length]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        <div className={styles.previousBtn} onClick={prevSlide}>
          &#10094;
        </div>
        {data.map((item, index) => (
          <div key={index} className={`${styles.item} ${index === activeIndex && styles.active}`}>
            {item.children}
          </div>
        ))}
        <div className={styles.nextBtn} onClick={nextSlide}>
          &#10095;
        </div>
        {showDots && (
          <div className={styles.dots}>
            {data.map((_, index) => (
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
