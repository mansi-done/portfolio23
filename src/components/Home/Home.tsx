import React, { useRef, useEffect } from "react";
import "./styles.css";
import { Button, Steps, Divider } from "antd";

import mypicture from "../../assets/mansi.jpg";
import { Link } from 'react-router-dom';



import { ParallaxBanner } from 'react-scroll-parallax';
import Rellax from "rellax";


interface SectionProps {
  id?: string;
}

const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;

    if (!div) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          div.classList.add("fade-in");
        } else {
          div.classList.remove("fade-in");
        }
      });
    });

    observer.observe(div);
    return () => observer.unobserve(div);
  }, []);

  useEffect(() => {
    new Rellax(".leftimganimate", { // <---- Via class name
      speed: 10,
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".rightimganimate", {
      speed: 3,
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".lines", {
      speed: 5,
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".contact", {
      speed: -1,
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);


  return (
    <div className="home-wrapper">
      <section id="home">
        <div className="intro-section">
          <div className="left">
            <div className="side">
              <div className="name">Mansi Saini </div>
            </div>
            <div className="end"> <a href="#contact-me" className="link"><Button type={"default"} size={"large"} className="hire-me-btn"> Get in touch</Button> </a></div>
          </div>

          {/* <div className="right">
            <div className="center">
              <div className="aboutme">
                I'm a Software Engineer based out of Hyderabad, India.
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="main-links">
          <div className="view-projects">
            <div className="round-animated-btn">Projects</div>
          </div>

          <div className="contact">nnn
            <div className="round-animated-btn">About Me</div>
          </div>
        </div> */}
      </section>

      <section id="about-me">
        <br />
        {/* <div className="aboutme-title">About me</div> */}
        <div className="about-me-section">
          <div className="aboutme-bottom">
            <div className="aboutme-details">
              I'm a Software Engineer based out of Hyderabad, India.
              <div className="details">
                <div className="exp">
                  <div className="experience-title">Experience</div>
                  <Steps
                    className="steps"
                    progressDot
                    current={5}
                    direction="vertical"
                    items={[
                      {
                        title: <div style={{ zIndex: 10 }}>Adqura</div>,
                        description: (
                          <div>
                            Software Engineer - <em>Hyderabad,India</em>
                          </div>
                        ),
                      },
                      {
                        title: <div>True Beacon</div>,
                        description: (
                          <div>
                            Full Stack Engineering Intern - <em>Banglore,India</em>
                          </div>
                        ),
                      },
                      {
                        title: <div>Logarithm Technologies</div>,
                        description: (
                          <div>
                            Web Development Intern - <em>Banglore,India (Remote)</em>
                          </div>
                        ),
                      },
                      {
                        title: <div>Helping Hand International</div>,
                        description: (
                          <div>
                            Web Development Intern - <em> Remote</em>
                          </div>
                        ),
                      },
                    ]}
                  />





                </div>

                <div className="edu">
                  <div className="experience-title">Education</div>
                  <Steps
                    progressDot
                    current={5}
                    direction="vertical"
                    items={[
                      {
                        title: (
                          <div>
                            Jawaharlal Nehru Technological University, Hyderabad
                          </div>
                        ),
                        description: (
                          <div>
                            2019-2023 <br />
                            Bachelor's of Technology -{" "}
                            <em>Electronics and Communication Engineering</em>
                          </div>
                        ),
                      },
                    ]}
                  />

                </div>
              </div>
              <div style={{ fontSize: "0.9rem" }}>
                Throughout college I focused on modern web technologies like React, NodeJs and Serverless computing etc. Most of my projects are in MERN Stack with occasional GoLang or Python backend API's. However I love to deep dive into classic technologies, languages and most importantly the concepts. When I'm not developing I try to enhance my problem solving abilities by solving DSA problems. <br /> <br />
                I try to frquently post at my <a href="https://blogmansi.vercel.app/" style={{ color: "rgb(191, 165, 255)" }}>Blog</a>, rather than a place to give advice, Its more of me documenting my learning process in software industry {":')"} <br />
                If you want to collaborate or discuss anything, feel free to  <a href="#contact-me" style={{ color: "rgb(191, 165, 255)" }}>get in touch</a> with me.
                <br />
                <br />
                Below you will find some of my personal projects I built.
              </div>
            </div>

          </div>
        </div>
      </section>






      {/* <div className="image leftimganimate">
              <img src={mypicture} className="img-si" />
            </div> */}

      <section id="projects-sec">
        <div className="main">
          <div className="projects">
            <div className="experience-title">Projects </div>
            <div className="experience-title" style={{ fontSize: "1.2rem" }}>Games </div>

            <Link to="https://drawboard.gameyy.online/"  target="_blank">
              <div className="project">
                <div className="project-details">
                  <div className="heading">Drawboard</div>
                  <div className="description">
                    Online Whiteboard to draw and sketch
                    <br /> <a href="https://drawboard.gameyy.online/" style={{ color: "white" }}>Click Here</a> to preview. <br />
                    <a href="https://github.com/mansi-done/whiteboard-app" style={{ color: "white" }}>Click Here</a> for GitHub 
                  </div>
                </div>
                <div className="scroll-image-dr"></div>
              </div>
            </Link>


            <Link to="https://tictactoe.gameyy.online/"  target="_blank">
              <div className="project">
                <div className="project-details">
                  <div className="heading">Real-time Tic Tac Toe</div>
                  <div className="description">
                    Real time scalable Tic Tac Toe app to play with friends.{" "}
                    <br />
                    Includes real time gameplay and live chat. Backend API built
                    with ExpressJS using Socket.io Frontend Built on ReactJS with
                    TypeScript.
                    <br />
                    <br /> <a href="https://tictactoe.gameyy.online/" style={{ color: "white" }}>Click Here</a> to preview. <br />
                    <a href="https://github.com/mansi-done/tictactoe-api-with-sockets" style={{ color: "white" }}>Click Here</a> for backend  GitHub <br /><a href="https://github.com/mansi-done/tictactoe-frontend" style={{ color: "white" }}> Click Here </a> for front end
                    GitHub
                  </div>
                </div>
                <div className="scroll-image-ti"></div>
              </div>
            </Link>


            <Link to="https://unscramble.gameyy.online/"  target="_blank">

              <div className="project">
                <div className="project-details">
                  <div className="heading">Unscramble</div>
                  <div className="description">
                    Just a fun word game to Unscramble jumbled words <br />
                    <br />
                    <a href="https://unscramble.gameyy.online/" style={{ color: "white" }}>Click Here </a>to preview.
                  </div>
                </div>
                <div className="scroll-image-un"></div>
              </div>

            </Link>


            <div className="experience-title" style={{ fontSize: "1.2rem" }}>Frontend </div>


            <Link to="https://cryptoden.netlify.app/"  target="_blank">


            <div className="project">
              <div className="project-details">
                <div className="heading">CryptoDen</div>
                <div className="description">
                  A Cryptocurrency React Web Application with LIVE Crypto Data,
                  it provides Latest In-depth data about all Cryptocurrencies,
                  Statistics, News, Market Patterns et cetera. Built by ReactJS,
                  using Redux Tool Kit for API integration. <br />
                  <br />
                  <a href="https://cryptoden.netlify.app/" style={{ color: "white" }}>Click Here </a>to preview.
                </div>
              </div>
              <div className="scroll-image-cr" ></div>
            </div>

            </Link>



            <div className="experience-title" style={{ fontSize: "1.2rem" }}>API's/Backend </div>

            <Link to="https://blogmansi.vercel.app/post/scalable-tic-tac-toe-api"  target="_blank">

            <div className="project">
              <div className="project-details">
                <div className="heading">Scalable TicTacToe API</div>
                <div className="description">
                  API to play Tic Tac Toe with n*n board. Build by Node JS using
                  Express JS server.
                  <br />
                  <br /><a href="https://blogmansi.vercel.app/post/scalable-tic-tac-toe-api" style={{ color: "white" }}> Click Here </a> to preview.
                </div>
              </div>
            </div>

            </Link>

            <Link to="https://rapidapi.com/mansisaini01/api/amazon-india-data-scrapper/"  target="_blank">
            

            <div className="project">
              <div className="project-details">
                <div className="heading">Web Scrapper for Amazon India API</div>
                <div className="description">
                  {" "}
                  API that returns LIVE product listings for amazon search
                  queries and complete in-depth product details to use in amazon
                  clones or just analysis. <br />
                  Build by Node JS using Express JS server (API on RapidAPI){" "}
                  <br /> <br /> <a href="https://rapidapi.com/mansisaini01/api/amazon-india-data-scrapper/" style={{ color: "white" }}> Click Here </a> to preview.
                </div>
              </div>
            </div>
            </Link>

          </div>
        </div>
      </section>

      <section id="contact-me">
        <div className="contact-wrapper">
          <div className="contact-title">Contact</div>
          <div className="con-details">
            <div className="named">
              Name : Mansi Saini
            </div>
            <div className="mail"> Mail : mansi.saini01@gmail.com</div>
            {/* <div className="contactnum">
              Phone :  +91 8106721687
            </div> */}

          </div>



        </div>
      </section>
    </div>
  );
};

export default Home;
