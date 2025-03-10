import React from 'react';
import styles from './section1.module.css';
import Button from '../ui/button/button';
import Link from 'next/link';
export default function Section1() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.container}>
          <h1 className={styles.title}>Education for All</h1>
          <p className={styles.description}>
            Learn from experts in sustainable development and join a global community of people committed to making lasting
            change.
          </p>
          <br />
          <Link href="/courses" className={styles.link}>
            <Button text="Start Learning" />
          </Link>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
