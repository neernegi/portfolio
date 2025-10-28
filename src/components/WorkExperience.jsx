import React from "react";
import {
  Briefcase,
  Code,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Bell,
  FileText,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";
import "../styles/work.css";
import Wave from "./Wave";

function WorkExperience() {
  const primaryProject = {
    title: "Callextreme's Dialer Software",
    subtitle: "Primary Project - Admin & Agent Portal",
    type: "Full-Stack MERN Application",
    impact: "Serving 50+ companies with 500+ concurrent agents",
    tech: ["MongoDB", "React.js", "Express.js", "Node.js", "Socket.IO", "JWT"],
    achievements: [
      {
        icon: Users,
        text: "Contributed to campaign management modules for Managers, Team Leads, and Agents",
      },
      {
        icon: Shield,
        text: "Implemented JWT-based authentication and role-based access control for Admin, Manager, TL, and Agent panels",
      },
      {
        icon: TrendingUp,
        text: "Built real-time monitoring dashboards for tracking call status and agent performance",
      },
      {
        icon: FileText,
        text: "Designed call disposition reporting with structured data stored in MongoDB",
      },
      {
        icon: Zap,
        text: "Reduced report generation time from 4 minutes to 30 seconds with Excel-ready export features",
      },
      {
        icon: Bell,
        text: "Implemented Socket.IO real-time chat & notifications between agents, admins, and customers",
      },
      {
        icon: Code,
        text: "Resolved 60+ production bugs, improving stability and reliability",
      },
      {
        icon: Briefcase,
        text: "Delivered 50+ production-ready client features with end-to-end backend functionalities",
      },
    ],
  };

  const additionalProjects = [
    {
      title: "Zutto",
      link: "http://deliveryboy.zotto.in",
      description: "Multi-role sanitary products platform",
      features: [
        "Developed backend for a multi-role sanitary products platform for customers, delivery boys, and admin panels.",
        "Implemented authentication, cart, and order management system",
        "Integrated Razorpay payment gateway for secure transactions",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay"],
      icon: "🛍️",
    },
    {
      title: "Mechanical App",
      link: "https://mechanical-admin-panel.netlify.app",
      description: "Mechanical products marketplace platform",
      features: [
        "Built authentication for suppliers and customers",
        "Developed product management, cart & order system",
        "Implemented real-time notifications using Socket.io",
        "Created Admin Banner Management System",
        "Integrated Razorpay payment gateway",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay"],
      icon: "🔧",
    },
    {
      title: "Neargud Clothing App",
      link: "https://neargud-admin.netlify.app",
      description:
        "E-commerce platform for clothing with admin panel and real-time features",
      features: [
        "Implemented secure authentication, and developed Order & Cart modules for order creation, and item management",
        "Developed a product reel system enabling sellers to upload and manage promotional reels",
        "Implemented real-time chat between sellers and customers using Socket.IO",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
      icon: "👕",
    },
    {
      title: "DukaanSe Web App",
      link: null,
      description: "E-commerce platform with comprehensive admin features",
      features: [
        "Developed admin-side authentication, and worked on the admin panel",
        "Built an Offer Management Model to create and manage offers",
        "Implemented Add to Cart and Order Management features",
        "Integrated the payment gateway using the Razorpay API",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay"],
      icon: "🛒",
    },

    {
      title: "Ride Booking Platform",
      link: null,
      description: "Complete ride booking solution",
      features: [
        "Developed backend for user, driver, and admin panels",
        "Built complete ride booking module with pickup/drop selection",
        "Implemented Driver Wallet system for earnings and rewards",
        "Integrated Razorpay payment gateway",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Razorpay"],
      icon: "🚗",
    },
  ];

  return (
    <div className="work-experience">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className="icon-wrapper">
              <Briefcase className="icon" />
            </div>
            <h1 className="title">Work Experience</h1>
            <p className="subtitle">
              Building scalable full-stack solutions with modern technologies
            </p>
          </div>
        </div>

        {/* Primary Project */}
        <div className="primary-project">
          <div className="project-badge">PRIMARY PROJECT</div>
          <div className="project-card main-project">
            <div className="project-header">
              <h2 className="project-title">{primaryProject.title}</h2>
              <p className="project-subtitle">{primaryProject.subtitle}</p>
              <p className="project-type">{primaryProject.type}</p>
              <div className="impact">
                <TrendingUp className="impact-icon" />
                <span>{primaryProject.impact}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="tech-stack">
              {primaryProject.tech.map((tech, index) => (
                <span key={index} className="tech-tag primary">
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="achievements">
              {primaryProject.achievements.map((achievement, index) => (
                <div key={index} className="achievement">
                  <div className="achievement-icon-wrapper">
                    <achievement.icon className="achievement-icon" />
                  </div>
                  <p className="achievement-text">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="additional-projects">
          <h2 className="section-title">Additional Backend Projects</h2>
          <div className="projects-grid">
            {additionalProjects.map((project, index) => (
              <div key={index} className="project-card secondary">
                <div className="project-header-secondary">
                  <div className="project-emoji">{project.icon}</div>
                  <div>
                    <h3 className="project-name">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} className="project-link">
                        <ExternalLink className="link-icon" />
                        Visit Project
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Features List - Always Visible Now */}
                <div className="features-section">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
