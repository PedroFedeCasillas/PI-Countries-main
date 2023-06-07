import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Proyecto individual Henry (PI)</p>

      <ul>
        <li>
          <a
            href="https://github.com/PedroFedeCasillas"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>&nbsp;&nbsp;&nbsp;Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pedro-fede-casillas-b73778165/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>&nbsp;&nbsp;&nbsp;Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
