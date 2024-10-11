import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Header />
			<main className='relative z-0'>
				<Outlet></Outlet>
			</main>
			<Footer />
		</div>
	);
};

export default LayoutContainer;
