'use client';
import React, { useState } from 'react';
import styles from './contentCardModule.module.css';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
export default function ContentCardModule({
	title,
	totalLesson,
	order,
	children,
	selected
}) {
	const [isOpen, setIsOpen] = useState(selected ? true : false);

	return (
		<div className={styles.main}>
			<div className={`${styles.header} ${selected && styles.selected}`} onClick={() => setIsOpen(!isOpen)}>
        <div>
        <p className={styles.title}>
					Module {order}: {title}
				</p>
				<p className={styles.lessons}>{totalLesson} Lessons</p>
        </div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
			</div>
			{isOpen && <div className={styles.container}>{children}</div>}
		</div>
	);
}
