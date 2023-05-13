import React, { useRef, useEffect } from "react";
import "./styles.css";
import { Button, Steps, Divider } from "antd";

import mypicture from "../../assets/mansi.jpg";

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

  return (
    <div className="home-wrapper">
      <section id="home">
        <div className="intro-section">
          <div className="left">
            <div className="side">
              <div className="greetings">Hey there, I am</div>
              <div className="name">Mansi Saini </div>
            </div>

           
           

            <div className="end"> <a href="#contact-me" className="link"><Button type={"default"} size={"large"} className="hire-me-btn"> Hire Me</Button> </a></div>

          </div>

          <div className="right">
            <div className="center">
              <div className="aboutme">
                <span style={{ fontWeight: "900" }}>
                  {" "}
                  Full Stack Developer{" "}
                </span>
                and engineering student based out of Hyderabad, India.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="main-links">
          <div className="view-projects">
            <div className="round-animated-btn">Projects</div>
          </div>

          <div className="contact">
            <div className="round-animated-btn">About Me</div>
          </div>
        </div> */}
      </section>

      <section id="about-me">
        <br />
        <div className="aboutme-title">About me</div>
        <div className="about-me-section">
          <div className="aboutme-bottom">
            <div className="aboutme-details">
              Hello there, I am a developer based out of Hyderabad. Currently, I
              am in my final year of engineering at JNTU Hyderabad.
              <div className="details">
                <div className="experience-title">Experience</div>
                <Steps
                  progressDot
                  current={5}
                  direction="vertical"
                  items={[
                    {
                      title: <div>True Beacon</div>,
                      description: (
                        <div>
                          Full Stack Intern - <em>Banglore</em>
                        </div>
                      ),
                    },
                    {
                      title: <div>Logarithm Technologies</div>,
                      description: (
                        <div>
                          Web Development Intern - <em>Banglore (Remote)</em>
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
                <br />
                <br />

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
            <div className="image">
              <img src={mypicture} className="img-si" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects-sec">
        <div className="main">
          <div className="projects">
            <div className="experience-title">Projects </div>
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
                  <br /> <a href="https://scalabletictactoe.vercel.app/" style={{color:"white"}}>Click Here</a> to preview. <br />
                  <a href="https://github.com/mansi-done/tictactoe-api-with-sockets" style={{color:"white"}}>Click Here</a> for backend  GitHub <br /><a href="https://github.com/mansi-done/tictactoe-frontend" style={{color:"white"}}> Click Here </a> for front end 
                  GitHub
                </div>
              </div>
              <div className="scroll-image-ti"></div>
            </div>

            <div className="project">
              <div className="project-details">
                <div className="heading">CryptoDen</div>
                <div className="description">
                  A Cryptocurrency React Web Application with LIVE Crypto Data,
                  it provides Latest In-depth data about all Cryptocurrencies,
                  Statistics, News, Market Patterns et cetera. Built by ReactJS,
                  using Redux Tool Kit for API integration. <br />
                  <br />
                  <a href="https://cryptoden.netlify.app/" style={{color:"white"}}>Click Here </a>to preview.
                </div>
              </div>
              <div className="scroll-image-cr"></div>
            </div>

            <div className="project">
              <div className="project-details">
                <div className="heading">Scalable TicTacToe API</div>
                <div className="description">
                  API to play Tic Tac Toe with n*n board. Build by Node JS using
                  Express JS server.
                  <br />
                  <br /><a href="https://blog.mansisaini.online/post/scalable-tic-tac-toe-api" style={{color:"white"}}> Click Here </a> to preview.
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-details">
                <div className="heading">Web Scrapper for Amazon India API</div>
                <div className="description">
                  {" "}
                  API that returns LIVE product listings for amazon search
                  queries and complete in-depth product details to use in amazon
                  clones or just analysis. <br />
                  Build by Node JS using Express JS server (API on RapidAPI){" "}
                  <br /> <br /> <a href="https://rapidapi.com/mansisaini01/api/amazon-india-data-scrapper/" style={{color:"white"}}> Click Here </a> to preview.
                </div>
              </div>
            </div>
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
          <div className="contactnum">
           Phone :  +91 8106721687
          </div>

          </div>
          
          

        </div>
      </section>
    </div>
  );
};

export default Home;
