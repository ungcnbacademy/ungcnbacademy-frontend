import Header from '@/components/atom/header';
import Profile from '@/components/client/profile';
import React from 'react';

export default function MyProfile() {
  return (
    <>
      <Header
        title={'My Profile'}
        description={'Passionate about transforming education through innovative technology solutions.'}
      />
      <Profile />
    </>
  );
}
