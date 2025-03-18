import Header from '@/components/atom/header';
import Info from '@/components/no-auth/aboutUs/info';
import Mission from '@/components/no-auth/aboutUs/mission';
import Section1 from '@/components/no-auth/aboutUs/section1';
import Section2 from '@/components/no-auth/aboutUs/section2';
import Team from '@/components/no-auth/aboutUs/team';
import Vision from '@/components/no-auth/aboutUs/vision';
import React from 'react';
export const metadata = { title: 'About Us' };

export default function AboutUs() {
  return (
    <div>
      <Header
        title={'About UNGCNB Academy'}
        description={
          'The UNGCNB Academy represents the education and training portfolio of the Bangladesh Network of the United Nations Global Compact.'
        }
      />
      <Info />
      <Mission />
      <Vision />
      <Section1 />
      <Team />
      <Section2 />
    </div>
  );
}
