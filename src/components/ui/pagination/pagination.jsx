import React from 'react';
import styles from './pagination.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function Pagination({ currentPage = 1, setCurrentPage = () => {}, totalPage = 1 }) {
	const onPreviousBtnClickHandler = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const onNextBtnClickHandler = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};
	return (
		<div className={styles.main}>
			<button
				disabled={currentPage === 1}
				className={styles.button}
				onClick={onPreviousBtnClickHandler}
			>
				<IoIosArrowBack className={styles.icon} />
			</button>

			{/* First page */}
			<button
				className={`${styles.button} ${
					currentPage === 1 && styles.active
				}`}
				onClick={() => setCurrentPage(1)}
			>
				1
			</button>

			{/* Ellipses before current page group */}
			{currentPage > 3 && <div className={styles.dots}>...</div>}

			{/* Pages around current page */}
			{Array.from({ length: totalPage }, (_, index) => index + 1)
				.filter(
					(page) =>
						page !== 1 && // Skip the first page (already rendered)
						page !== totalPage && // Skip the last page (render later)
						Math.abs(currentPage - page) <= 2 // Keep pages near current
				)
				.map((page) => (
					<button
						key={page}
						className={`${styles.button} ${
							page === currentPage && styles.active
						}`}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				))}

			{/* Ellipses after current page group */}
			{currentPage < totalPage - 2 && (
				<div className={styles.dots}>...</div>
			)}

			{/* Last page */}
			{totalPage > 1 && (
				<button
					className={`${styles.button} ${
						currentPage === totalPage && styles.active
					}`}
					onClick={() => setCurrentPage(totalPage)}
				>
					{totalPage}
				</button>
			)}

			<button
				disabled={currentPage === totalPage}
				onClick={onNextBtnClickHandler}
				className={styles.button}
			>
				<IoIosArrowForward className={styles.icon} />
			</button>
		</div>
	);
}
