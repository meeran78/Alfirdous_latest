import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    mobileNavContainerVariant,
    mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const activeClassName = "selected navlink";
    const isActive = true
    const activeStyleCallback =  isActive ? activeClassName : "navlink";
const NavLinks = () => {
    return (
      <>
        <NavLink to="/" className={activeStyleCallback}>
          Home
        </NavLink>
  
        <NavLink to="/blog" className={activeStyleCallback}>
          Blog
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
      <nav className="flex flex-[1] items-center justify-end overflow-hidden text-primary">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="w-[75px]">
          {/* <ThemeToggle /> */}
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden text-primary"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps} >
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/contactus" className={activeStyleCallback}>
                Blog
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    )
};

export default Navbar;
