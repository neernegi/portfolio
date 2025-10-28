import React, { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.mobile-menu-btn')) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-div">
        <h2 className="brand">{"<Neeraj />"}</h2>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <p><a href="#home" onClick={(e) => handleScroll(e, "home")}>HOME</a></p>
          <p><a href="#home" onClick={(e) => handleScroll(e, "work")}>WORK EXPERIENCE</a></p>
          <p><a href="#featured" onClick={(e) => handleScroll(e, "featured")}>FEATURED PROJECTS</a></p>
          <p><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>TOOLS AND SKILLS</a></p>
          <p><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>CONTACT ME</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;