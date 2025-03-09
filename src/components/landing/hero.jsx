import React from 'react';
import styles from './hero.module.css';
import Button from '../ui/button/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          YOUR ACADEMY. <br /> YOUR IMPACT.
        </h1>
        <p className={styles.description}>
          Learn from top professionals and sustainability specialists to make your journey more sustainable.
        </p>
        <Link href="/courses" className={styles.link}>
          <Button variant="outLined" className={styles.button} text="Try Now" />
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <div className={styles.box1}>
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfDF8MHx8fDI%3D"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfDF8MHx8fDI%3D"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1587554801471-37976a256db0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3xlbnwwfDF8MHx8fDI%3D"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfDF8MHx8fDI%3D"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1541560052-5e137f229371?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1530977875151-aae9742fde19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.box2}>
            <Image
              src="https://images.unsplash.com/photo-1529767203443-a617595c8825?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1554325139-bbd006cd3e5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1536148935331-408321065b18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfDF8MHx8fDI%3D"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
            <Image
              src="https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmt8ZW58MHwxfDB8fHwy"
              alt="hero"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
