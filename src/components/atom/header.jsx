import React from 'react'
import styles from './header.module.css'
import { companyInfo } from '@/constants/constants';
export default function Header({title, description}) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{description}</p>
    </div>
  )
}
