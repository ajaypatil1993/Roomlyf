import React from "react";
import Logo from "../../assets/Logo.png";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animation";

const Footer = () => {
  return (
    <motion.footer
    variants={SlideLeft(0.2)}
    initial="initial"
    whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="logo" className="w-6" />
              <p className="text-xl font-semibold">RoomLyf</p>
            </div>
            <p>625 E Franklin Ave, MN 55404, USA</p>
            <p>&copy; 2024 RoomLyf. All rights reserved.</p>
          </div>

          {/* Footer link section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftsmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care guide</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact info section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">++ 1253 211 523</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMessage />
                <a href="#">hello@roomlyf.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom section */}
        <p className="text-center text-sm font-semibold mt-5 border-t-2 pt-5">
          &copy; 2024 RoomLyf. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
