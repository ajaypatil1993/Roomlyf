import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    name: "About",
    link: "#",
  },
  {
    id: 2,
    name: "Services",
    link: "#",
  },
  {
    id: 3,
    name: "Project",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold">RoomLyf</span>
        </div>

        {/* Link Section */}
        <div className="hidden md:block">
          {NavLinks.map((link) => (
            <a
              href={link.link}
              className="inline-block mx-8 text-lg font-serif hover:font-bold duration-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Button section */}
        <div>
          <button className="primary-btn">Try For Free</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
