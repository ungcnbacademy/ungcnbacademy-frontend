import styles from './loadingDots.module.css';
export default function LoadingDots() {
	return (
		<div className={styles.main}>
			<div className={styles.ellipsis}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
