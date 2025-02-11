import styles from './loadingDots.module.css';
export default function LoadingDots({ color = '#37373763' }) {
	return (
		<div className={styles.main}>
			<div className={styles.ellipsis}>
				<div style={{ background: color }}></div>
				<div style={{ background: color }}></div>
				<div style={{ background: color }}></div>
				<div style={{ background: color }}></div>
			</div>
		</div>
	);
}
