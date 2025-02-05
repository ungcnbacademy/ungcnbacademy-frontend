import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './dotsInfo.module.css';
export default function DotsInfo() {
	return (
		<div className={styles.main}>
			<BsThreeDotsVertical className={styles.threeDots} />
			<div className={styles.container}>
				<p className={styles.button}>Download</p>
				<p className={styles.button}>Download</p>
			</div>
		</div>
	);
}
