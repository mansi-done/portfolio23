import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  MediumWorkmarkOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="nav">
        <ul className="nav-list">
          <li>
            <a href="#home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects-sec" className="link">
              Projects
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://blog.mansisaini.online/"
              className="link"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1-2uNmZp99_Cn5TE8FFAV4mFW9l9C_x3J/view"
              className="link"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#about-me" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#contact-me" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="links-wrapper">
        <ul className="links-list">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mansi-saini-096323154/"
              className="contact-link"
            >
              {" "}
              <LinkedinOutlined />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/mansi-done"
              className="contact-link"
            >
              <GithubOutlined />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://medium.com/@mansi.saini01"
              className="contact-link"
            >
              {" "}
              <MediumWorkmarkOutlined />
            </a>
          </li>

          <li>
            <a
              href="mailto:mansi.saini01@gmail.com"
              className="contact-link"
            >
              <MailOutlined />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
