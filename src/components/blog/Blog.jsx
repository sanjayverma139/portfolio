import React, { useContext } from "react";
import blog1 from "../../img/blog1.svg";
import blog2 from "../../img/blog2.svg";
import blog3 from "../../img/blog3.svg";
import { themeContext } from "../../Context";
import "./blog.css";

const Blog = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="blog " id="blogs">
      <div>
        <h2 className="section_title section_title_mobile">Blogs</h2>
      </div>
      <div>
        <div className="blog_container ">
          <div className="blog_card">
            <div className="blog_thumb">
              <div>
                <span className="blog_category">Knowledge</span>
              </div>

              <a href="https://adrinotech.blogspot.com/2021/09/check-whether-apps-are-fake-or-real-in.html">
                <img src={blog1} alt="" className="blog_img" />
              </a>
            </div>
            <div
              className="blog_details"
              style={{ background: darkMode ? "transparent" : "" }}
            >
              <a href="https://adrinotech.blogspot.com/2021/09/check-whether-apps-are-fake-or-real-in.html">
                <h3 className="blog_title">
                  Check whether apps are fake or real in easy way
                </h3>
              </a>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <span className="blog_category">Blogging</span>

              <a href="https://adrinotech.blogspot.com/2021/06/How-Use-Google-Trends-Keyword-Planner.html">
                <img src={blog3} alt="" className="blog_img" />
              </a>
            </div>
            <div
              className="blog_details"
              style={{ background: darkMode ? "transparent" : "" }}
            >
              <a href="https://adrinotech.blogspot.com/2021/06/How-Use-Google-Trends-Keyword-Planner.html">
                <h3 className="blog_title">
                  How Use Google Trends Keyword Planner
                </h3>
              </a>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <span className="blog_category">Tech</span>

              <a href="https://adrinotech.blogspot.com/2021/09/create-own-cryptocurrency-exchange.html">
                <img src={blog2} alt="" className="blog_img" />
              </a>
            </div>
            <div
              className="blog_details"
              style={{ background: darkMode ? "transparent" : "" }}
            >
              <a href="https://adrinotech.blogspot.com/2021/09/create-own-cryptocurrency-exchange.html">
                <h3 className="blog_title">
                  Create own cryptocurrency exchange platform
                </h3>
              </a>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <div>
                <span className="blog_category">Knowledge</span>
              </div>

              <a href="https://adrinotech.blogspot.com/2021/09/check-whether-apps-are-fake-or-real-in.html">
                <img src={blog1} alt="" className="blog_img" />
              </a>
            </div>
            <div
              className="blog_details"
              style={{ background: darkMode ? "transparent" : "" }}
            >
              <a href="https://adrinotech.blogspot.com/2021/09/check-whether-apps-are-fake-or-real-in.html">
                <h3 className="blog_title">
                  Check whether apps are fake or real in easy way
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
