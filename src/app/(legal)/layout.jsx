import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar variant="transparent" />
			{children}
			<Footer />
		</>
	);
}
