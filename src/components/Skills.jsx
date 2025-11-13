import React, { useMemo, useEffect } from "react";
import coder from "/assets/github-dots.svg";
import { logos } from "../libs/logos";
import "../styles/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  const iconsArray = useMemo(
    () =>
      [
        logos.aws,
        logos.docker,
        logos.nextjs,
        logos.githubaction,
        logos.typescript,
        logos.nodejs,
        logos.react,
        logos.mongodb,
        logos.redux,
        logos.expressjs,
        logos.reactquery,
        logos.materialui,
        logos.javascript,
      ].filter(Boolean),
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // Animation only happens once
      mirror: false, // Don't animate again when scrolling back up
      offset: 100, // Trigger animation 100px from the bottom of viewport
    });
  }, []);

  return (
    <section>
      <div className="feature-div">
        <div className="coder">
          <img src={coder} alt="Coder illustration" />
        </div>
        <div
          className="techstack-div"
          
        >
          <h1>My Tech Stack</h1>
          <div className="tech-box">
            {iconsArray.map((icon, index) => (
              <div key={index} className="tech-stack">
                <h4 className="icon-label">{icon.label}</h4>
                <img src={icon?.logo} alt={icon?.label} className="icons-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
