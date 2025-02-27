'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './toast.module.css';

export default function Toast({ text, variant = 'success', duration = 3000, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setVisible(false);

      // Add display none after fade out animation
      setTimeout(() => {
        setDisplay(false);
        if (onClose) {
          onClose();
        }
      }, 300); // Match this with CSS transition duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!mounted || !display) return null;

  return createPortal(
    <div className={`${styles.toast} ${styles[variant]} ${visible ? styles.visible : styles.hidden}`} role="alert">
      {text}
    </div>,
    document.body
  );
}
