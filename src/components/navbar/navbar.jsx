'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
export default function Navbar({ variant = 'transparent' }) {
	//const variant = ['transparent', 'accentColor', 'white'];
	const pathParam = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [userDetails, setUserDetails] = useState();

	// Check scroll position to update navbar background
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userData = JSON.parse(localStorage.getItem('user'));
			setUserDetails(userData);
		}
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const logoForDifferentVariants = {
		transparent: '/logo.svg',
		accentColor: '/logoWhite.svg',
		white: '/logoBlack.svg',
		scrolled: '/logoWhite.svg',
	};

	const nonAuthLinks = [
		{
			name: 'Home',
			link: '/',
			active: pathParam === '/',
		},
		{
			name: 'Courses',
			link: '/courses',
		},
		{
			name: 'Login',
			link: '/login',
			active: pathParam.startsWith('/login'),
		},
		{
			name: 'Signup',
			link: '/signup',
			active: pathParam === '/signup',
		},
	];
	const authCustomerLinks = [
		{
			name: 'Home',
			link: '/',
			active: pathParam === '/',
		},
		{
			name: 'Courses',
			link: '/courses',
		},
		{
			name: 'Profile',
			link: '/client/profile',
			active: pathParam === '/client/profile',
		},
		{
			name: 'Learning',
			link: '/client/my-courses',
			active: pathParam === '/client//my-courses',
		},
		{
			name: 'Logout',
			link: '/logout',
			active: pathParam === '/logout',
		},
	];

	const authAdminLinks = [
		{
			name: 'Home',
			link: '/',
			active: pathParam === '/',
		},
		{
			name: 'Courses',
			link: '/courses',
		},
		{
			name: 'Dashboard',
			link: '/admin/dashboard',
			active: pathParam === '/admin/dashboard',
		},
		{
			name: 'Logout',
			link: '/logout',
			active: pathParam === '/logout',
		},
	];
	const authLinks =
		userDetails?.data?.role === 'user' ? authCustomerLinks : authAdminLinks;
	const links = userDetails ? authLinks : nonAuthLinks;
	return (
		<nav
			className={`${styles.navbar} ${
				scrolled && variant === 'transparent' ? styles.scrolled : ''
			} ${styles[variant]}`}
		>
			<div className={styles.logoWrapper}>
				<Link href="/" className={styles.logoLink}>
					<Image
						src={
							scrolled && variant === 'transparent'
								? logoForDifferentVariants.scrolled
								: logoForDifferentVariants[variant]
						}
						alt="Logo"
						width={150}
						height={40}
						priority={true}
					/>
				</Link>
			</div>
			<div className={styles.linkContainer}>
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.link}
						className={`${styles.link} ${
							link.active ? styles.active : ''
						}`}
					>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
