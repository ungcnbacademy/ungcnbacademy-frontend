import React from 'react';
import styles from './infoSection.module.css';
import { LuMessagesSquare } from 'react-icons/lu';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { BsBoundingBoxCircles } from 'react-icons/bs';
export default function InfoSection() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<LuMessagesSquare className={styles.icon} />
				<h1>We are here for you! Just ask and get answers.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam nihil sapiente cupiditate atque accusantium, quis deserunt vel excepturi optio?
				</p>
			</div>
			<div className={styles.container}>
				<HiOutlineDevicePhoneMobile className={styles.icon} />
				<h1>Have any questions? Reach us by phone.</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nihil dolores nisi minus explicabo neque sed possimus doloribus esse itaque!
				</p>
			</div>
			<div className={styles.container}>
				<BsBoundingBoxCircles className={styles.icon} />
				<h1>Get more info quickly. Most popular help topics.</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe deleniti inventore accusantium eius. Minus velit temporibus vitae cumque animi.
				</p>
			</div>
		</div>
	);
}
