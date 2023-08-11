import React, { useContext } from "react";
import "./certification.css";
import ceh from "../../img/ceh.png";
import cnd from "../../img/cnd.png";
import ecss from "../../img/ecss.png";
import ccna from "../../img/ccna.png";
import soc from "../../img/soc.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Certifications = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="Certifications">
      {/* left side */}
      <div className="w-left">
        <div className="container">
          <h2 className="title">Certifications</h2>
          <p>
            As a certified professional, I've had the privilege of collaborating
            with a diverse range of brands and clients. My certifications in
            cybersecurity, networking, and more have enabled me to contribute to
            their success
          </p>
          <div>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button s-button">Hire Me</button>
            </Link>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={cnd} className="cnd" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ecss} className="ecss" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ceh} className="ceh" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={ccna} className="ccna" alt="" />
          </div>
          <div className="w-secCircle">
            <a href="https://www.udemy.com/certificate/UC-4603fd26-c744-4efa-9e69-80b162a17a12/">
              <img src={soc} className="soc" alt="" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Certifications;
