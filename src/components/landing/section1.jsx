import React from 'react';
import styles from './section1.module.css';
import Button from '../ui/button/button';
export default function Section1() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.container}>
					<h1 className={styles.title} >Bring you goals into focus</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur. Gravida neque a
						quis dolor accumsan auctor vestibulum ultricies.
					</p>
          <br />
					<Button text="Try Now" variant="secondary" />
				</div>
			</div>
			<div className={styles.right}></div>
		</div>
	);
}
