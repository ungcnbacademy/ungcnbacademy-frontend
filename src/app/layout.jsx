import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
import { siteMetadata } from '@/utils/siteMetadata';
import ScrollToTop from '@/components/ui/scroll-to-top/scrollToTop';
const inter = Inter({ subsets: ['latin'] });

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>{children}</CartContextProvider>
        <ScrollToTop/>
      </body>
    </html>
  );
}
