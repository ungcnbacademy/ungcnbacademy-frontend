import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'UNGCNB Academy',
    template: '%s | UNGCNB Academy',
  },
  description: "Educational resources from the world's leading experts on sustainable development",
  openGraph: {
		title: 'UNGCNB Academy',
		description: "Educational resources from the world's leading experts on sustainable development",
		images: [
			{
				url: 'https://esgeducation.netlify.app/ogimage.png',
				width: 851,
				height: 312,
				alt: 'USGCNB Academy',
			},
		],
		siteName: 'USGCNB Academy',
		url: 'https://esgeducation.netlify.app',
		type: 'website',
	}
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
