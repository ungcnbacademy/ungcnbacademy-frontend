import React from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';

export default function Modal() {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.main}></div>
    </div>,
    document.body
  );
}
