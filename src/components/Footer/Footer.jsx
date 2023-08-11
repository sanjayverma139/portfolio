import React, { useContext } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div class="pg-footer">
      <footer class="footer">
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            style={{ background: darkMode ? "black" : "" }}
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div class="footer-logo ">
            <a href="https://www.linkedin.com/in/sanjay1393/" target="_blank">
              <FaGithub size={60} />
            </a>

            <a href="https://github.com/sanjayverma139/" target="_blank">
              <FaLinkedinIn size={60} />
            </a>

            <a
              href="https://www.instagram.com/sanjayverma1393/"
              target="_blank"
            >
              <BsInstagram size={60} />
            </a>
          </div>
          <div className="copyright">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self">
                ©2023. | Designed By:Sanjay Kumar | All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
