'use client';
import React, { useState } from 'react';
import styles from './drawer.module.css';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../button/button';
import { createPortal } from 'react-dom';
export default function Drawer({
	children,
	title = '',
	closeFunction = () => {},
	footerRender,
	size = 'md',
}) {
	const [isOpen, setIsOpen] = useState(true);
	const [isVisible, setIsVisible] = useState(true);

	const closeDrawer = () => {
		setIsOpen(false);
		setTimeout(() => {
			setIsVisible(false);
			closeFunction();
		}, 600);
	};

	return createPortal(
		<>
		{isVisible && (
			<div className={`${styles.main} ${!isOpen && styles.close}`}>
				<div className={styles.overlay} onClick={closeDrawer}></div>
				<div className={`${styles.drawer} ${styles[size]}`}>
					<div className={styles.header}>
						<h3 className={styles.title}>{title}</h3>
						<IoCloseSharp
							onClick={closeDrawer}
							className={styles.icon}
						/>
					</div>
					<div className={styles.children}>{children}</div>
					{footerRender && (
						<div className={styles.footer}>{footerRender()}</div>
					)}
				</div>
			</div>
		)}
		</>,
		document.body
	);
}
