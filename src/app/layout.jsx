import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
import { siteMetadata } from '@/utils/siteMetadata';
const inter = Inter({ subsets: ['latin'] });

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
