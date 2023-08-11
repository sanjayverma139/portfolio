import React, { useContext } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
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
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
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
        // navigation={{
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // }}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
