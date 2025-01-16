import React from 'react';
import styles from './hero.module.css';
import Button from '../ui/button/button';

export default function Hero() {
	return (
		<div className={styles.main}>
			<video autoPlay muted loop playsInline className={styles.video}>
				<source src="/video.mp4" type="video/mp4" />
			</video>
			<div className={styles.overlay}>
				<div className={styles.container}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur. Massa risus
						scelerisque etiam vulputate iaculis volutpat.
					</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur. Massa risus
						scelerisque etiam vulputate iaculis volutpat.
					</p>
					<Button
						variant="outLined"
						className={styles.button}
						text="Try Now"
					/>
				</div>
			</div>
		</div>
	);
}
