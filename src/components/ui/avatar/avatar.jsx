import React from 'react';
import styles from './avatar.module.css';
import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';
export default function Avatar({ name, image, icon }) {
	return (
		<div className={styles.main}>
			{image && (
				<div className={styles.imageWrapper}>
					<Image
						src={image}
						alt={name}
						width={28}
						height={28}
						className={styles.image}
					/>
				</div>
			)}
			{icon && (
				<div className={styles.iconWrapper}>
					<HiUser className={styles.icon} />
				</div>
			)}
			{name && <span className={styles.initials}>{name.charAt(0).toUpperCase()}</span>}
		</div>
	);
}
