import React from 'react'
import styles from './header.module.css'

export default function Header({title, description, height = '60vh', image = '/assets/about/bg.webp'}) {
  return (
    <div className={styles.main}  style={{backgroundImage: `url(${image})`, height: height}}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{description}</p>
    </div>
  )
}
