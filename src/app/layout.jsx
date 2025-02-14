import CartContextProvider from '@/context/cartContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
	title: 'ESG Education',
	description: 'Find the best ESG education resources',
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
