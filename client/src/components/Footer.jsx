import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-id">
          <div>
            <small>
              &copy; 2019 HYF CodeBees <br /> #class2-project-group1
            </small>
          </div>
          <ul className="org_icons">
            <li className="org">
              {" "}
              <a href="# ">
                <img
                  className="open-knowledge-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Open_Knowledge_Belgium_logo_-_small.png"
                  alt="Open Knowledge Belgium Logo"
                />
              </a>
            </li>
          </ul>

          <ul className="social_icons">
            <li className="social">
              <a href="http://www.linkedin.com">
                <img
                  src="http://in-touchcoaching.com/img/linkedin.png"
                  alt="Linkedin Logo"
                />
              </a>
            </li>
            <li className="social">
              {" "}
              <a href="http://www.facebook.com">
                <img
                  src="http://cdn.redmondpie.com/wp-content/uploads/2011/08/Facebook.png "
                  alt="Facebook Logo"
                />
              </a>
            </li>
            <li className="social">
              {" "}
              <a href="http://www.twitter.com">
                <img
                  src="https://g.twimg.com/Twitter_logo_blue.png"
                  alt="Twitter Logo"
                />
              </a>
            </li>
            <li className="social">
              {" "}
              <a href="http://instagram.com">
                <img
                  src="http://pngimg.com/uploads/instagram/instagram_PNG1.png"
                  alt="Instagram Logo"
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
