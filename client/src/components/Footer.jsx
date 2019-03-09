import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-id">
          <div class="copyright">
            <small>
              &copy; 2019 HYF CodeBees <br /> #class2-project-group1
            </small>
          </div>
          <ul class="org_icons">
            <li class="org">
              {" "}
              <a href="# ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Open_Knowledge_Belgium_logo_-_small.png" />
              </a>
            </li>
          </ul>

          <ul class="social_icons">
            <li class="social">
              <a href="http://www.linkedin.com">
                <img src="http://in-touchcoaching.com/img/linkedin.png" />
              </a>
            </li>
            <li class="social">
              {" "}
              <a href="http://www.facebook.com">
                <img src="http://cdn.redmondpie.com/wp-content/uploads/2011/08/Facebook.png " />
              </a>
            </li>
            <li class="social">
              {" "}
              <a href="http://www.twitter.com">
                <img src="https://g.twimg.com/Twitter_logo_blue.png " />
              </a>
            </li>
            <li class="social">
              {" "}
              <a href="http://instagram.com">
                <img src="http://pngimg.com/uploads/instagram/instagram_PNG1.png" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
