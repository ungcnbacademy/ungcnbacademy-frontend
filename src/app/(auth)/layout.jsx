'use client';
import styles from './layout.module.css';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();
  let backgroundImageUrl = '/assets/auth-bg.webp';

  if (pathname === '/signup') {
    backgroundImageUrl = '/assets/signup-bg.webp';
  } else if (pathname === '/passwordReset') {
    backgroundImageUrl = '/assets/passwordReset-bg.webp';
  }

  return (
    <>
      <Navbar variant="transparentBlack" />
      <div className={styles.main}>
        <div className={styles.left} style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
        <div className={styles.right}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
