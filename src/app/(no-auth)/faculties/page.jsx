import React from 'react';
import styles from './page.module.css';
import Header from '@/components/atom/header';
import Carousel from '@/components/ui/carousel/carousel';
export const metadata = { title: 'All Faculties' };

export default function Faculties() {
  return (
    <div>
      <Header title={'All Faculties'} description={'All available faculties'} />
      <div style={{ width: '100%', height: '500px' }}>
        <Carousel
          slides={[
            <div className="slide-content">
              <h2>Slide 1</h2>
              <p>Custom content for slide 1</p>
            </div>,
            <div className="slide-content">
              <h2>Slide 2</h2>
              <p>Custom content for slide 2</p>
            </div>,
          ]}
          autoPlay={true}
          interval={5000}
          showDots={true}
          showArrows={true}
          transitionDuration={500}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
