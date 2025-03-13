'use client';
import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';

export default function Modal({ children, title = '', closeFunction = () => {}, footerRender, size = 'md', position = 'top' }) {
  // position can be 'top', 'center'
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
      closeFunction();
    }, 600);
  };

  useEffect(() => {
    setMounted(true); // Indicate that the component is now mounted on the client
    return () => setMounted(false); // Cleanup
  }, []);

  if (!mounted) return null;

  const modalSize = {
    sm: '30vw',
    md: '65vw',
    lg: '90vw',
  };

  return createPortal(
    <>
      {isVisible && (
        <div className={`${styles.main} ${isOpen && styles.close}`}>
          <div className={styles.overlay} onClick={closeModal}>
            <div className={`${styles.modal} ${styles[position]}`} style={{ width: modalSize[size] }}>
              <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <IoCloseSharp onClick={closeModal} className={styles.icon} />
              </div>
              <div className={styles.children}>{children}</div>
              {footerRender && <div className={styles.footer}>{footerRender()}</div>}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
