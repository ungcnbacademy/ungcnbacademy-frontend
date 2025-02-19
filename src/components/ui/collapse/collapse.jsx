'use client';
import React, { useState } from 'react';
import styles from './collapse.module.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
export default function Collapse({
	variant = 'primary',
	data = [{ title: '', description: '', children }],
}) {
	const CollapseItem = ({ title, description, children }) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div className={`${styles.itemContainer} ${styles[variant]}`}>
				<div
					className={styles.header}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className={styles.iconContainer}>
						{isOpen ? (
							<IoIosArrowDown className={styles.icon} />
						) : (
							<IoIosArrowForward className={styles.icon} />
						)}
					</div>

					<p className={styles.title}>{title}</p>
				</div>

				<div className={`${styles.content} ${isOpen && styles.open}`}>
					<div className={styles.innerContainer}>
						{description && (
							<p className={styles.description}>{description}</p>
						)}
						{children && (
							<div className={styles.children}>{children}</div>
						)}
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			{data.map((item, i) => (
				<CollapseItem
					key={i}
					title={item.title}
					description={item.description}
					children={item.children}
				/>
			))}
		</div>
	);
}
