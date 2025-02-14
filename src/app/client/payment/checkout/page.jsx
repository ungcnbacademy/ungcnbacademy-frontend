'use client';
import React, { useContext } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import { CartContext } from '@/context/cartContext';
import { getAmountsWithCommas } from '@/utils/utils';
export default function Checkout() {
	const { globalCart } = useContext(CartContext);

	const addressFormRender = () => {
		return (
			<div className={styles.formContainer}>
				<h3 className={styles.title}>Shipping Address</h3>
				<form className={styles.form}>
					<label>Phone (ex: 01700000000)</label>
					<Input
						type="tel"
						placeholder="Enter your phone"
						variant="secondary"
						required
					/>
					<label>Address</label>
					<Input
						type="text"
						placeholder="Enter your address"
						variant="secondary"
						name="address"
						required
					/>
					<label>City</label>
					<Input
						type="text"
						placeholder="Enter your city"
						variant="secondary"
						name="city"
						required
					/>
					<label>Country</label>
					<Input
						type="text"
						placeholder="Enter your country"
						variant="secondary"
						name="country"
						required
					/>
					<Button
						variant="secondary"
						text="Checkout"
						className={styles.button}
					/>
				</form>
			</div>
		);
	};
	const coursePaymentInfoRender = () => {
		return (
			<div className={styles.infoWrapper}>
				<h2 className={styles.title}>Course Details</h2>
				<div className={styles.infoContainer}>
					<h1 className={styles.title}>
						{globalCart?.courseTitle || ''}
					</h1>
					{globalCart?.moduleTitle && (
						<p>
							Module {globalCart?.moduleOrder}:{' '}
							{globalCart?.moduleTitle || ''}
						</p>
					)}
					{globalCart?.allModules && (
						<div className={styles.allModules}>
							{globalCart?.allModules?.map((module) => (
								<p key={module?._id}>
									Module {module?.order}:{' '}
									{module?.title || ''}
								</p>
							))}
						</div>
					)}
					<p>Type: {globalCart?.type || ''}</p>
					<p className={styles.price}>
						Price:{' '}
						{getAmountsWithCommas(
							globalCart?.price || globalCart?.modulePrice || ''
						)}
					</p>
				</div>
			</div>
		);
	};
	return (
		<div className={styles.overlay}>
			<div className={styles.header}>
				<h3 className={styles.title}>Checkout</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.left}>{addressFormRender()}</div>
				<div className={styles.right}>{coursePaymentInfoRender()}</div>
			</div>
		</div>
	);
}
