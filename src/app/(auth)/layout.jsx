import styles from './layout.module.css';
export default function Layout({ children }) {
	return (
		<div className={styles.main}>
			<div className={styles.left}></div>
			<div className={styles.right}>{children}</div>
		</div>
	);
}
