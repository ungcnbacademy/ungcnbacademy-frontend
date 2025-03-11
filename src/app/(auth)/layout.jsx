import styles from './layout.module.css';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar variant="transparentBlack" />
      <div className={styles.main}>
        <div className={styles.left}></div>
        <div className={styles.right}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
