import React from 'react';
import styles from './card.module.css';
export default function Card({ title, data, icon }) {
  const Icon = icon;
  return (
    <div className={styles.main}>
      {icon && <Icon className={styles.icon} />}
      <p className={styles.data}>{data}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
