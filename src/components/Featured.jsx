import React, { useMemo } from "react";
import "../styles/featuredproject.css";
import Wave from "./Wave";
import { projects } from "../libs/Projects";
import live from "/assets/icons/external-link.png";
import github from "/assets/icons/githubicon.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Featured() {
  const projectsArray = useMemo(
    () =>
      [
        projects.devgram,
        projects.manlydapper,
        projects.tictactoe,
        projects.fashioncart,
        projects.todo,
      ].filter(Boolean),
    []
  );

  // Function to parse and highlight words between ** **
  const highlightText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} style={{ color: "#c6ff00", fontWeight: "bold" }}>
            {part.replace(/\*\*/g, "")}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="featured-section">
      <h1 className="featured-heading">Featured Projects</h1>
      {projectsArray.map((project, index) => (
        <Wave color={index % 2 === 0 ? "#070422" : "#161625"} className="wave">
          <div
            className="project-card"
            style={{
              backgroundColor: index % 2 === 0 ? "#070422" : "#161625",
              marginTop: "-2rem",
            }}
          >
            <h1 className="project-name">{project?.title}</h1>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                justifyContent: "center",
              }}
              className="project-stack"
            >
              <div className="project-stack-box">
                {project.description.map((desc, idx) => (
                  <p key={idx} className="project-desc">
                    {highlightText(desc)}
                  </p>
                ))}

                <div className="projects-link">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      SOURCE CODE
                      <img
                        src={github}
                        style={{ width: "1.3rem" }}
                        alt="github"
                        className="link"
                      />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={`https://${project.links.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      LIVE PROJECT
                      <img src={live} alt="live" className="link" />
                    </a>
                  )}
                </div>
                <div className="project-techstack">
                  {project.stack.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo?.logo}
                      alt={logo?.label}
                      className="stack-icon"
                      title={logo?.label}
                    />
                  ))}
                </div>
              </div>
              {project.images && (
                <div className="project-img">
                  <img src={project.images} alt="" />
                </div>
              )}
              {project.media && (
                <div className="project-img">
                  <video width="600" height="360" autoPlay muted loop>
                    <source src={project.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </Wave>
      ))}
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Link to="/projects">
          <Button
            variant="outlined"
            sx={{
              color: "#c6ff00",
              border: "1px solid #c6ff00",
              textTransform: "none",

              padding: "8px 16px",
            }}
          >
            VIEW ALL PROJECTS
          </Button>
        </Link>
      </div> */}
    </section>
  );
}

export default Featured;
