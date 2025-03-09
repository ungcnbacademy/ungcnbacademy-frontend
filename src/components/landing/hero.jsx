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
              src="/assets/landing/hero/1.jpeg"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/2.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/3.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/4.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/5.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/6.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/7.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.box2}>
          <Image
              src="/assets/landing/hero/8.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/9.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/10.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/11.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/12.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/13.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
            <Image
              src="/assets/landing/hero/14.webp"
              alt="hero"
              width={300}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
