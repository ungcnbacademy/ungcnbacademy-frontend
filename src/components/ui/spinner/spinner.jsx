import React from 'react';
import styles from './spinner.module.css';
export default function Spinner({ size = '22px' }) {
  const spinnerStyle = {
    width: size,
    height: size,
  }
	return (
		<div className={styles.loader} style={spinnerStyle}>
			<div style={spinnerStyle}></div>
			<div style={spinnerStyle}></div>
			<div style={spinnerStyle}></div>
			<div style={spinnerStyle}></div>
		</div>
	);
}
