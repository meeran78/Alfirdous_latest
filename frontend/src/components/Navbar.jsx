import { NavLink, useLocation } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	mobileNavContainerVariant,
	mobileNavListVariant,
	mobileNavExitProps,
} from '../data/animationConfig';
import routesConstants from '../constants/routeConstants';

const activeClassName = 'selected navlink';
const isActive = true;
const activeStyleCallback = isActive ? activeClassName : 'navlink';
const NavLinks = () => {
	return (
		<>
			<NavLink to={routesConstants.HOME} className={activeStyleCallback}>
				Home
			</NavLink>

			<NavLink to={routesConstants.SERVICES} className={activeStyleCallback}>
				Services
			</NavLink>
			<NavLink to={routesConstants.ABOUT} className={activeStyleCallback}>
				About
			</NavLink>
			<NavLink to={routesConstants.CEMETRIES} className={activeStyleCallback}>
				Cemetries
			</NavLink>
			<NavLink to={routesConstants.FAQS} className={activeStyleCallback}>
				FAQs
			</NavLink>
			<NavLink to={routesConstants.CONTACT} className={activeStyleCallback}>
				Contact
			</NavLink>
			<NavLink to={routesConstants.DOCUMENTS} className={activeStyleCallback}>
				Documents
			</NavLink>
		</>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<>
			<nav className='flex flex-[1] items-center justify-end overflow-hidden text-primary'>
				<div className='hidden justify-end md:flex'>
					<NavLinks />
				</div>
				<div className='w-[75px]'>{/* <ThemeToggle /> */}</div>
				<div className='flex w-[75px] justify-end md:hidden mb-2'>
					<button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
				</div>
			</nav>
			<AnimatePresence mode='wait'>
				{isOpen && (
					<motion.div
						layout='position'
						key='nav-links'
						variants={mobileNavContainerVariant}
						initial='hidden'
						animate='show'
						className='mt-4 basis-full md:hidden text-primary'>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.HOME}
								className={activeStyleCallback}>
								Home
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.SERVICES}
								className={activeStyleCallback}>
								Services
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.ABOUT}
								className={activeStyleCallback}>
								About
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.CEMETRIES}
								className={activeStyleCallback}>
								Cemetries
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.FAQS}
								className={activeStyleCallback}>
								FAQs
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.CONTACT}
								className={activeStyleCallback}>
								Contact
							</NavLink>
						</motion.div>
						<motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
							<NavLink
								to={routesConstants.DOCUMENTS}
								className={activeStyleCallback}>
								Documents
							</NavLink>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
