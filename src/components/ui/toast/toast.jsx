'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './toast.module.css';

export default function Toast({ text, variant = 'success', duration = 3000, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);
  const prevTextRef = useRef('');

  // Reset the component when text changes
  useEffect(() => {
    // Only trigger reset if we already had a previous text (not first render)
    if (prevTextRef.current && prevTextRef.current !== text) {
      // Reset states to create the "new toast" effect
      setVisible(true);
      setDisplay(true);
    }
    prevTextRef.current = text;
  }, [text]);

  // Handle mounting and auto-dismiss
  useEffect(() => {
    if (!text) return;
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
  }, [duration, onClose, text]); // Adding text as dependency so it resets timer when text changes

  if (!mounted || !display) return null;

  // Make sure createPortal is only used in browser environment
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className={`${styles.toast} ${styles[variant]} ${visible ? styles.visible : styles.hidden}`} role="alert">
      {text}
    </div>,
    document.body
  );
}
