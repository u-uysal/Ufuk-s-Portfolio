import React from "react";

export default function Footer() {
  return (
    <footer className="mt-3 ">
      <div id="contact" className="bottom h-100">
        <div className="text-center contact-social-icons">
          <ul className="">
            <a href="mailto:ufuk.uysl5@gmail.com" target="_blank">
              <li className="text-effect">
                <i className="fa fa-envelope"></i>Gmail
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/ufuk-uysal-7044111a6/"
              target="_blank"
            >
              <li className="text-effect">
                <i className="fa fa-linkedin-square"></i> LinkedIn
              </li>
            </a>
            <a href="https://github.com/u-uysal" target="_blank">
              <li className="text-effect">
                <i className="fa fa-github"></i> Github
              </li>
            </a>
            <a href="https://www.freecodecamp.org/ufuk_uysal" target="_blank">
              <li className="text-effect">
                (<i className="fa fa-fire"></i>) FreeCodeCamp
              </li>
            </a>
            <a
              href="https://www.youtube.com/channel/UCm1tKKCDpcynlZYu-wVO36w"
              target="_blank"
            >
              <li className="text-effect">
                <i className="fa fa-youtube"></i> Youtube
              </li>
            </a>
            <a href="https://twitter.com/ufuk_kodman" target="_blank">
              <li className="text-effect">
                <i className="fa fa-twitter"></i> Twitter
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
