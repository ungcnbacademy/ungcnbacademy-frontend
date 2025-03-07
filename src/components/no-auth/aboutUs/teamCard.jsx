import React from 'react';
import styles from './teamCard.module.css';
import Image from 'next/image';
export default function TeamCard({ image, name, role }) {
  return (
    <div className={styles.main}>
      <Image src={image} alt="team" width={500} height={500} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
