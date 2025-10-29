import React from "react";
import programmer2 from "/assets/programmer2.svg";
import "../styles/hero.css";
import { logos } from "../libs/logos";
import resume from "/assets/icons/resume.png";
import arrow from "/assets/icons/arrow-circlesvg.svg";
import Skills from "./Skills";
import Featured from "./Featured";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
// import resumeurl from "/assets/resume.pdf"

function Hero() {
  const resumeUrl = "/resume.pdf";
  return (
    <section>
      <div className="hero" id="home">
        {" "}
        {/* Home Section */}
        <div className="hero-intro">
          <h1>
            Hi,<span>I'm Neeraj</span>
          </h1>
          <h2>A fullstack developer</h2>
          <p>
            Full Stack Developer 1.2 year of experience with expertise in
            front-end and back-end development. Builds scalable and user-centric
            web applications. Eager to contribute technical skills in a
            professional environment.
          </p>
          <div className="hero-icons">
            <a
              href="https://github.com/neernegi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logos.github.logo} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/neeraj-negi-a07008228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logos.linkdn.logo} alt="linkedin" />
            </a>
          </div>
          <div className="btn-div">
            <a
              href={resumeUrl}
              className="btn-anchor resume-anchor"
              //   download="Neeraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-anchor" src={resume} alt="" />
              RESUME
            </a>
            <a href="#work" className="btn-anchor work-anchor">
              <img
                className="img-anchor"
                src={arrow}
                style={{ color: "#c6ff00" }}
                alt="arrow"
              />
              SEE MY WORK
            </a>
          </div>
        </div>
        <div className="programmer-img">
          <img src={programmer2} alt="programmer image" />
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>{" "}
      <div id="work">
        <WorkExperience />
      </div>
      <div id="featured">
        <Featured />
      </div>{" "}
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}

export default Hero;
