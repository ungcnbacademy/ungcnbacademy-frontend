'use client';
import React, { useEffect, useState } from 'react';
import styles from './contentCardModule.module.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
export default function ContentCardModule({ title, totalLesson, order, children, selected, progress = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (selected) {
      setIsOpen(true);
    }
  }, [selected]);

  return (
    <div className={styles.main}>
      <div className={`${styles.header} ${selected && styles.selected}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.container}>
          <p className={styles.title}>
            Module {order}: {title}
          </p>
          <div>
            <p className={styles.lessons}>
              {totalLesson} Lessons{progress != 0 && `, Progress: ${(Math.round(Number(progress) * 100) / 100).toFixed(2) || 0}%`}
            </p>
          </div>
        </div>
        <div className={styles.iconContainer}>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
      </div>
      {isOpen && <div className={styles.container}>{children}</div>}
    </div>
  );
}
