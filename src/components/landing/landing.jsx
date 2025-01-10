import React from 'react';
import Hero from './hero';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function Landing() {
	return (
		<div>
			<Navbar variant='transparent'/>
			<Hero />
			<Footer/>
		</div>
	);
}
