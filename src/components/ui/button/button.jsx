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
}) {
	//variants - primary, secondary, outLined
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[variant]} ${className}`}
			disabled={disabled}
			onClick={onClick}
			style={style}
		>
			{loading ? <div className={styles.loading}><Spinner size='15px' /> <span>loading</span> </div> : text}
		</button>
	);
}
