'use client';
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

import { legalMenu, MainMenu, serviceMenu } from '@/constants/menuList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { companyInfo } from '@/constants/constants';

export default function Footer() {
	const pathParam = usePathname();

	return (
		<div className={styles.main}>
			{/* <Image
				src="/logo.svg"
				alt="CrediLink Logo"
				width={140}
				height={70}
				loading="lazy"
			/> */}
			<div className={styles.top}>
				<div className={styles.card}>
					<h2 className={styles.title}>Contact Us</h2>
					<div className={styles.contactInfo}>
						<a href={`tel:${companyInfo.phone}`}>
							<div className={styles.phoneContainer}>
								<IoCallSharp className={styles.icon} />
								<span className={styles.span}>
									{companyInfo.phone}
								</span>
							</div>
						</a>
						<a href={`mailto:${companyInfo.email}`}>
							<div className={styles.emailContainer}>
								<MdEmail className={styles.icon} />
								<span className={styles.span}>
									{companyInfo.email}
								</span>
							</div>
						</a>
						<a href={companyInfo.googleMapAddress} target="_blank">
							<div className={styles.addressContainer}>
								<FaLocationDot className={styles.icon} />
								<span className={styles.span}>
									{companyInfo.address}
								</span>
							</div>
						</a>
					</div>

				</div>
				<div className={styles.card}>
					<h2 className={styles.title}>Company</h2>

					{
						<ul>
							{MainMenu.map((item, index) => (
								<li key={index}>
									<Link
										href={item.link}
										{...{
											className:
												pathParam === item.link
													? 'text-action'
													: 'hover:text-action',
										}}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					}
				</div>
				<div className={styles.card}>
					<h2 className={styles.title}>Legal</h2>
					<ul>
						{legalMenu.map((item, index) => (
							<li key={index}>
								<Link
									href={item.link}
									{...{
										className:
											pathParam === item.link
												? 'text-action'
												: 'hover:text-action',
									}}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.card}>
				<h2 className={styles.title}>Follow us on</h2>
					<div className={styles.social}>
						<FaFacebookSquare
							className={styles.icon}
							onClick={() =>
								window.open(companyInfo.socials.facebook)
							}
						/>
						<IoLogoYoutube
							className={styles.icon}
							onClick={() =>
								window.open(companyInfo.socials.youtube)
							}
						/>
						<RiInstagramFill
							className={styles.icon}
							onClick={() =>
								window.open(companyInfo.socials.instagram)
							}
						/>
						<FaLinkedin
							className={styles.icon}
							onClick={() =>
								window.open(companyInfo.socials.linkedin)
							}
						/>
						<IoLogoWhatsapp
							className={styles.icon}
							onClick={() => {
								window.open(companyInfo.socials.whatsapp);
							}}
						/>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.line}></div>
				<p>
					© Copyright {new Date().getFullYear()} All Rights Reserved,
					developed by{' '}
					<span
						className={styles.developer}
						onClick={() =>
							window.open(companyInfo.developer.website)
						}
					>
						{companyInfo.developer.company}
					</span>
				</p>
			</div>
		</div>
	);
}
