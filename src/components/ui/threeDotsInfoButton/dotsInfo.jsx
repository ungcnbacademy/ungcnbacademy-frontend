import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './dotsInfo.module.css';
export default function DotsInfo({
	data = [{ title: '', function: () => {} }],
}) {
	return (
		<div className={styles.main}>
			<BsThreeDotsVertical className={styles.threeDots} />
			<div className={styles.container}>
				{data.map((item, index) => (
					<div key={index} className={styles.buttonContainer}>
						{item.icon && item.icon}
						<p className={styles.button} onClick={item.function}>
							{item.title}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
