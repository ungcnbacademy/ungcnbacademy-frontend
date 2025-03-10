'use client';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { userRoles } from '@/constants/constants';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Layout({ children }) {
	useLayoutEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user'));
		if (userData?.data?.role !== userRoles.client.role) {
			redirect('/');
		}
	}, []);

	return (
		<>
			<Navbar variant="white" />
			{children}
			<Footer />
		</>
	);
}
