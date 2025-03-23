'use client';
import React, { useState } from 'react';
import styles from './tabs.module.css';

export default function Tabs({ items = [{ title: '', content: '' }], activeTab = 0 }) {
  const [active, setActive] = useState(activeTab);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className={styles.main}>
      <div className={styles.tabs}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.tab} ${index === active && styles.active}`} onClick={() => handleClick(index)}>
            {item.title}
          </div>
        ))}
      </div>
      {items[active].content && <div className={styles.content}>{items[active].content}</div>}
      {!items[active].content && (
        <div className={styles.noContent}>
          <p>No content found</p>
        </div>
      )}
    </div>
  );
}
