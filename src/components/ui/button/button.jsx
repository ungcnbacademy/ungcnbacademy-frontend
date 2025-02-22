'use client';
import React from 'react';
import styles from './button.module.css';
import Spinner from '../spinner/spinner';
export default function Button({
  text = 'Submit',
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick = () => {},
  loading = false,
  className = '',
  style = {},
  icon = null,
}) {
  //variants - primary, secondary, outLined, danger, dangerOutLined
  const renderBtnText = () => {
    return (
      <div className={styles.textContainer}>
        {icon && <div className={styles.icon}>{icon}</div>} <span>{text}</span>
      </div>
    );
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {loading ? (
        <div className={styles.loading}>
          <Spinner size="15px" /> <span>loading...</span>{' '}
        </div>
      ) : (
        renderBtnText()
      )}
    </button>
  );
}
