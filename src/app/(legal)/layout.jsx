import Footer from '@/components/client/footer/footer';
import Navbar from '@/components/client/navbar/navbar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar variant="accentColor" />
			{children}
			<Footer />
		</>
	);
}
