import React from 'react'
import styles from './tag.module.css'
import Spinner from '../spinner/spinner'
export default function Tag({children, variant = 'primary', loading = false}) {
  return (
    <div className={`${styles.main} ${styles[variant]}`}>{loading ? <Spinner size='15px'/> : children}</div>
  )
}
