import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './dotsInfo.module.css';
export default function DotsInfo({
	data = [{ title: '', icon: null, function: () => {} }],
}) {
	const positionRef = useRef(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = () => {
			if (positionRef.current) {
				const rect = positionRef.current.getBoundingClientRect();

				// Get position relative to the viewport
				const viewportX = rect.left;
				const viewportY = rect.top;

				// Get position relative to the page (including scroll)
				const pageX = viewportX + window.scrollX;
				const pageY = viewportY + window.scrollY;

				setPosition({ x: pageX, y: pageY });
			}
		};

		// Initial position
		updatePosition();

		// Update position on scroll and resize
		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', updatePosition);
		};
	}, []);

	return (
		<div className={styles.main}>
			<BsThreeDotsVertical
				className={styles.threeDots}
				ref={positionRef}
			/>
			<div
				className={styles.container}
				style={{ top: position.y, left: position.x }}
			>
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
