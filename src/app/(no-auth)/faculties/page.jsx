import React from 'react';
import styles from './page.module.css';
import Header from '@/components/atom/header';
export const metadata = { title: 'All Faculties' };

export default function Faculties() {
  return (
    <div>
      <Header title={'All Faculties'} description={'All available faculties'} />
    </div>
  );
}
