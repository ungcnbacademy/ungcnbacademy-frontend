import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import styles from './checkMark.module.css';
export default function CheckMark({size = '12px'}) {
  return (

      <FaCircleCheck className={styles.icon} style={{fontSize: size, width: size}} />

  );
}
