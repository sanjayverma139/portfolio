import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Education from "./components/education/Education";
import AboutBox from "./components/about/AboutBox";
import Blog from "./components/blog/Blog";
import Certifications from "./components/certifications/Certifications";
import Projects from "./components/projects/Projects";



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Education/>
      <AboutBox/>
      <Projects />
      <Blog/>
      <Certifications />
      
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
