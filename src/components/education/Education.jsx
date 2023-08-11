import React, { useContext } from "react";
import "./education.css";
import Data from "./Data";
import Card from "./Card";
import { themeContext } from "../../Context";

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="resume" id="education">
      <div>
        <h2 className="title">Education</h2>

        <div
          className="resume_container "
          style={{ background: darkMode ? "black" : "" }}
        >
          <div
            className="timeline grid"
            style={{ background: darkMode ? "black" : "" }}
          >
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
