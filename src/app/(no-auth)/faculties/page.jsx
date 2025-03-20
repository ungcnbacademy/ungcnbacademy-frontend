import React from 'react';
import styles from './page.module.css';
import Header from '@/components/atom/header';
import Carousel from '@/components/ui/carousel/carousel';
export const metadata = { title: 'All Faculties' };

export default function Faculties() {
  return (
    <div>
      <Header title={'All Faculties'} description={'All available faculties'} />
      <Carousel slides={[{ children: <div>qqq</div> }, { children: <div>asdfg</div> }, { children: <div>kjhgfds</div> }]} />
    </div>
  );
}
