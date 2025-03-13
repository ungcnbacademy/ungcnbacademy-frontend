import React from 'react';
import styles from './avatar.module.css';
import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';
export default function Avatar({ name, image, icon, size = 32, className='' }) {
	return (
		<div className={`${styles.main} ${className}`} >
			{image && (
				<div className={styles.imageWrapper}>
					<Image
						src={image}
						alt='avatar'
						width={size}
						height={size}
						className={styles.image}
					/>
				</div>
			)}
			{!image && icon && (
				<div className={styles.iconWrapper}>
					<HiUser className={styles.icon} />
				</div>
			)}
			{!image && name && <span className={styles.initials}>{name.charAt(0).toUpperCase()}</span>}
		</div>
	);
}
