import Image from 'next/image';
import React from 'react';
import styles from './empty.module.css';
export default function Empty({style}) {
	return (
		<div className={styles.main} style={style}>
			<Image
				src="/assets/error/empty.png"
				alt="Empty"
				width={50}
				height={50}
			/>
			<p className={styles.text}>No item available</p>
		</div>
	);
}
