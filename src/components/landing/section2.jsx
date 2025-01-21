import React from 'react';
import Button from '../ui/button/button';
import styles from './section2.module.css';
export default function Section2() {
	return (
		<div className={styles.main}>
			<div className={styles.left}></div>
			<div className={styles.right}>
				<div className={styles.container}>
					<h1 className={styles.title}>You set the goal. We'll mark the path.</h1>
					<p className={styles.description}>
          Career progress isn't always linear. So when your industry evolves or your plans change, edX is the education destination that works as hard as you. Explore thousands of job-relevant online courses that empower you to ramp up, reroute, or start fresh. We'll be with you every step of the way.
					</p>
					<br />
					<Button text="Try Now" variant="secondary" />
				</div>
			</div>
		</div>
	);
}
