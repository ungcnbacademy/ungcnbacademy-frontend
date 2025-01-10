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
			<Image
				src="/logoBlack.svg"
				alt="Logo"
				width={150}
				height={50}
				loading="lazy"
			/>
			<div className={styles.container}>
				<section className={styles.section}>
					<h4 className={styles.title}>ABOUT FOOD STREET</h4>
					<Link className={styles.link} href="/">
						Home
					</Link>
					<Link className={styles.link} href="/about">
						About us
					</Link>
					<Link className={styles.link} href="/report-fraud">
						Report Fraud
					</Link>
					<Link className={styles.link} href="/contact">
						Contact us
					</Link>
				</section>
				<section className={styles.section}>
					<h4 className={styles.title}>FOR RESTAURANTS</h4>
					<Link className={styles.link} href="/partner-with-us">
						Partner with us
					</Link>
					<Link className={styles.link} href="/apps-for-you">
						Apps for you
					</Link>
					<Link className={styles.link} href="/admin/dashboard">
						Admin
					</Link>
					<Link className={styles.link} href="/login/admin">
						Admin Login
					</Link>

				</section>
				<section className={styles.section}>
					<h4 className={styles.title}> LEGAL</h4>
					<Link className={styles.link} href="/privacy-policy">
						Privacy Policy
					</Link>
					<Link className={styles.link} href="/terms-of-use">
						Terms of use
					</Link>
					<Link className={styles.link} href="/cookie-policy">
						Cookie Policy
					</Link>
				</section>
				<section className={styles.section}>
					<h4 className={styles.title}>SOCIAL LINKS</h4>
					<div>
						<FaFacebook className={styles.icon} />
						<RiInstagramFill className={styles.icon} />
						<FaTwitter className={styles.icon} />
					</div>
				</section>
			</div>
			<br />
			<div className={styles.line}></div>
			<p className={styles.copyright}>
				By continuing past this page, you agree to our Terms of Service,
				Cookie Policy, Privacy Policy and Content Policies. All
				trademarks are properties of their respective owners.{' '}
				{new Date().getFullYear()} © Food street™ Ltd. All rights
				reserved. Developed by {companyInfo.developer.name}
			</p>
		</div>
	);
}
