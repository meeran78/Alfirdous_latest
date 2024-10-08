import { useState } from 'react';
import routesConstants from '../constants/routeConstants';
import { Link } from 'react-router-dom';
import crecent from '../assets/images/crecent.jpeg';
// import { Icons } from '../assets/icons';

import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

const Header = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const toggleNavbar = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		// <header className="text-white flex flex-col relative
		// after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full
		// before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
		<header className='h-[80px] flex flex-row justify-between fixed top-0 left-0 right-0 bg-[rgba(153,119,8,0)] text-white z-[100]'>
			<div className='max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full '>
				<div className='flex flex-1 w-[300px] justift-start ml-[40px] items-center font-bold flex-direction:row flex-shrink-0 flex-wrap:no-wrap'>
					<Link to={routesConstants.ROOT}>
						<img src={crecent} alt='site logo' className='h-[80px] w-[80px] rounded-full mt-[10px] mr-[60px]' />
					</Link>
					<nav
						className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
							isNavbarOpen ? 'translate-x-0' : 'translate-x-full'
						}`}>
						<div className='flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out'>
							<button type='button' onClick={toggleNavbar}>
								<IoMdClose size={32} />
							</button>
						</div>
						<ul
							className={`flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center`}>
							<li>
								<Link
									to={routesConstants.HOME}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.SERVICES}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									Services
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.ABOUT}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									About
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.CEMETRIES}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									Cemetris
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.FORMS}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									Forms
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.FAQS}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									to={routesConstants.CONTACT}
									className='text-white text-base font-source-sans hover:opacity-90 transition-all ease-in-out duration-300 font-normal whitespace-nowrap'>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
                <div className='flex flex-1 max-w-[100px] items-center'></div>
                <div className='w-[250px] flex flex-row flex-shrink-0 mr-[40px] items-center'>

                </div>
				<button
					type='button'
					className='lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all'
					onClick={toggleNavbar}>
					<MdMenu size={32} />
				</button>
			</div>
		</header>
	);
};

export default Header;
