import React from 'react';
import Navbar from '../components/client/navbar/navbar';
import styles from './page.module.css';
import Banner from '@/components/client/landing/banner';
import Footer from '@/components/client/footer/footer';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/client/landing/hero/hero';
import CardContainer from '@/components/client/landing/cardContainer/cardContainer';
const Card = dynamic(() => import('@/components/client/atom/card'));

export default function Home() {
	return (
		<div className={styles.main}>
			<Navbar variant="transparent" />
			<HeroSection />
			<div className={styles.container}>
				<Banner />
				<h2 className={styles.title}>Popular Restaurants</h2>
				<CardContainer />
				<h2 className={styles.title}>Sweets</h2>
				<CardContainer />
			</div>
			<Footer />
		</div>
	);
}
