import React from 'react';
import styles from './message.module.css';
import Spinner from '../spinner/spinner';
export default function Message({ text = '', type = 'error', loading = false }) {
	return <div className={`${styles.message} ${styles[type]}`}>{loading ?<Spinner/>: text}</div>;
}
