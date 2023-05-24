import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <p>Proyecto individual Henry (PI)</p>

        <Link to="https://github.com/PedroFedeCasillas">
          <ul>
            <li>
              <a href="https://github.com/PedroFedeCasillas" target="_blank">
                <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;Github
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/pedro-fede-casillas-b73778165/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>&nbsp;&nbsp;&nbsp;Linkedin
              </a>
            </li>
          </ul>
        </Link>
      
    </div>
  );
}

export default Footer;
