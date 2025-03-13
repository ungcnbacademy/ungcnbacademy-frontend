import React from 'react';
import TopSection from '@/components/no-auth/contactUs/topSection';
import InfoSection from '@/components/no-auth/contactUs/infoSection';
export const metadata = { title: 'Contact Us' };
export default function ContactUs() {
  return (
    <div>
      <TopSection />
      <InfoSection />
    </div>
  );
}
