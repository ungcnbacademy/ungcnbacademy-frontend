import React from 'react';
import Hero from './hero';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

export default function Landing() {
	return (
		<div>
			<Navbar variant='transparent'/>
			<Hero />
			<Section1/>
			<Section2/>
			<Section3/>
			<Section4/>
			<Section5/>
			<Footer/>
		</div>
	);
}
