import Mission from '@/components/no-auth/aboutUs/mission';
import Section1 from '@/components/no-auth/aboutUs/section1';
import Section2 from '@/components/no-auth/aboutUs/section2';
import Team from '@/components/no-auth/aboutUs/team';
import TopSection from '@/components/no-auth/aboutUs/topSection';
import Vision from '@/components/no-auth/aboutUs/vision';
import React from 'react';

export default function AboutUs() {
	return <div>
		<TopSection/>
		<Mission/>
		<Vision/>
		<Section1/>
		<Team/>
		<Section2/>
	</div>;
}
