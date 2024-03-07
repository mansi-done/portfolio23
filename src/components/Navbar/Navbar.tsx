import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  MediumWorkmarkOutlined,
} from "@ant-design/icons";

const NavContent = () => {
  return (
    <div className="navcontent">
      <div className="nav">
        <ul className="nav-list">
          <li>
            <a href="#home" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="link">
              About
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
              href="https://blogmansi.vercel.app/"
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
  )
}

const Navbar = () => {
  // const mediaQuery = window.matchMedia("(max-width: 700px)");
  const [phoneRes, setPhoneRes] = useState(window.matchMedia("(max-width: 700px)").matches);
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleMediaQueryChange = (mq: any) => {
      setPhoneRes(mq.matches);
    };
    // Add the media query listener to directly check the matches property
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the media query listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleNavOpen = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true)
  }

  return (
    <div className="navbar-wrapper">
      {!phoneRes && (<NavContent />
      )}
    </div>
  );
};

export default Navbar;
