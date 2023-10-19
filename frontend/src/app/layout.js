import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import AccountStateProvider from '@/state/AccountState';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Cecure Intelligence Limited | Data Science Platform Project',
	description:
		'A Solution for Accessing, Analyzing, and Processing Social Media Data',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AccountStateProvider>
					{/* <Nav /> */}
					{children}
					{/* <Footer /> */}
				</AccountStateProvider>
			</body>
		</html>
	);
}
