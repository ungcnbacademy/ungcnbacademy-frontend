import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { companyInfo } from '@/constants/constants';
export default function Footer() {
	return (
		<div className={styles.main}>
			<div className={styles.topContainer}>
				<Image
					src="/logoBlack.svg"
					alt="Logo"
					width={150}
					height={50}
					loading="lazy"
				/>
				<div>
					<FaFacebook className={styles.icon} />
					<RiInstagramFill className={styles.icon} />
					<FaTwitter className={styles.icon} />
				</div>
			</div>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consectetur non reiciendis maiores dolor enim quibusdam tempore
				voluptate. Voluptatibus, provident..
			</p>
			<div className={styles.container}>
				<Link className={styles.link} href="/privacy-policy">
					Privacy Policy
				</Link>
				<Link className={styles.link} href="/terms-of-use">
					Terms of use
				</Link>
				<Link className={styles.link} href="/cookie-policy">
					Cookie Policy
				</Link>
				<Link className={styles.link} href="/terms-of-sale">
					Terms of Service
				</Link>
			</div>

			<div className={styles.line}></div>
			<p className={styles.copyright}>
				By continuing past this page, you agree to our Terms of Service,
				Cookie Policy, Privacy Policy and Content Policies. All
				trademarks are properties of their respective owners.{' '}
				{new Date().getFullYear()} © {companyInfo.companyName}™ Ltd. All
				rights reserved. Developed by {companyInfo.developer.name}
			</p>
		</div>
	);
}
