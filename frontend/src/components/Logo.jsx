import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoRotationVariant } from "../data/animationConfig";
import { funeralservicelogo } from "../assets/images";
const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
    <motion.img
      alt="Blog Logo"
      src={funeralservicelogo}
      className=" w-[55px] h-[55px] rounded-full mt-8"
     
      variants={logoRotationVariant}
      animate="rotate"
      layout="position"
      
    />
  </NavLink>
  )
}

export default Logo