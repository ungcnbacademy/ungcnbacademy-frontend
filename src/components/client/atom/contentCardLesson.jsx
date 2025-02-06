import React from 'react';
import styles from './contentCardLesson.module.css';
import { MdOutlineOndemandVideo } from "react-icons/md";
export default function ContentCardLesson({ title, order, hasVideo, totalAssets, videoDuration, onClick= () => {} }) {
	return (
		<div className={styles.main} onClick={onClick}>
      <div className={styles.check}></div>
			<div className={styles.container}>
				<p className={styles.title}>
					Lesson {order}: {title}
				</p>
        <div className={styles.subtitle}>
          {hasVideo && <MdOutlineOndemandVideo />}
          {videoDuration && <label>Duration {videoDuration} min,</label>}
          <label>Total Assets {totalAssets},</label>
        </div>
			</div>
		</div>
	);
}
