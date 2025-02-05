import React from "react";
import "../styles/header.css";

function Header() {
  // Function to handle smooth scrolling
  const handleScroll = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="header-div">
        <h2>{"<Neeraj />"}</h2>
        <div className="navbar">
          <p><a href="#home" onClick={(e) => handleScroll(e, "home")}>HOME</a></p>
          <p><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>TOOLS AND SKILLS</a></p>
          <p><a href="#featured" onClick={(e) => handleScroll(e, "featured")}>FEATURED PROJECTS</a></p>
          {/* <p><a href="#allprojects" onClick={(e) => handleScroll(e, "allprojects")}>ALL PROJECTS</a></p> */}
          <p><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>CONTACT ME</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
