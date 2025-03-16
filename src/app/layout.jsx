import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'UNGCNB Academy',
    template: '%s | UNGCNB Academy',
  },
  description: 'Learn from top professionals and sustainability specialists to make your journey more sustainable.',
  openGraph: {
    title: 'UNGCNB Academy',
    description: 'Learn from top professionals and sustainability specialists to make your journey more sustainable.',
    images: [
      {
        url: 'https://esgeducation.netlify.app/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'USGCNB Academy',
      },
    ],
    siteName: 'USGCNB Academy',
    url: 'https://esgeducation.netlify.app',
    type: 'website',
    locale: 'en_US',
    icons: {
			icon: 'https://esgeducation.netlify.app/favicon.ico',
			apple: 'https://esgeducation.netlify.app/apple-icon.png',
		},
		logo: 'https://esgeducation.netlify.app/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
