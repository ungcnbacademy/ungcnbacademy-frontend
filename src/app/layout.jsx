import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'UNGCNB Academy',
    template: '%s | UNGCNB Academy',
  },
  description: "Learn from top professionals and sustainability specialists to make your journey more sustainable.",
  openGraph: {
		title: 'UNGCNB Academy',
		description: "Learn from top professionals and sustainability specialists to make your journey more sustainable.",
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
