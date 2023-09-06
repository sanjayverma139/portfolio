import React, { useContext } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import gym from "../../img/gym.png";
import voxverse from "../../img/voxverse.png";
import icecream from "../../img/icecream.png";

import { themeContext } from "../../Context";

// Initialize Swiper navigation
SwiperCore.use([Navigation]);

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const isMobile = window.innerWidth <= 768; // Mobile breakpoint
  const isTablet = window.innerWidth <= 1024; // Tablet breakpoint

  return (
    <div className="portfolio" id="projects">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={isTablet ? 140 : isMobile ? 70 : 30}
        slidesPerView={isMobile ? 2 : isTablet ? 2 : 3}
        grabCursor={true}
        className="portfolio-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => {
          if (swiper.realIndex === swiper.slides.length - 1) {
            swiper.slideTo(1); // Slide back to the first slide if last slide is reached
          }
        }}
      >
        <SwiperSlide>
          <a href="https://github.com/sanjayverma139/FitBody-Gym-Website">
            <img src={gym} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/sanjayverma139/voxverse">
            <img src={voxverse} alt="" style={{ height: "10.6rem" }} />
          </a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://github.com/sanjayverma139/fruit-ice">
            <img src={icecream} alt="" style={{ height: "10.8rem" }} />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
