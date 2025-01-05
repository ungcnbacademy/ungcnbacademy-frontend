'use client';
import Loading from '@/app/loading';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Logout() {
	useEffect(() => {
		const userDetails = JSON.parse(localStorage.getItem('user'));
		if (userDetails) {
			localStorage.removeItem('user');
			setTimeout(() => {
				redirect('/');
			}, 1000);
		} else {
			redirect('/');
		}
	}, []);

	return (
		<div style={{ height: '80vh' }}>
			<Loading />
		</div>
	);
}
