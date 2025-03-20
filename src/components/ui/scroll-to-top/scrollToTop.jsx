'use client';
import React, { useEffect, useState } from 'react';
import styles from './scrollToTop.module.css';
import { FaAngleUp } from 'react-icons/fa6';
export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.main} style={{ display: showScroll ? 'block' : 'none' }}>
      <div className={styles.container} onClick={scrollToTop}>
        <FaAngleUp className={styles.icon} />
      </div>
    </div>
  );
}
