import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import ProjectsData from "../../shared/opensource/projects.json";
import "./ProjectCaseStudy.css";

class ProjectCaseStudy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const theme = this.props.theme;
    const slug = this.props.match.params.slug;
    const projects = ProjectsData.data;
    const index = projects.findIndex((p) => p.slug === slug);
    const project = index >= 0 ? projects[index] : null;

    if (!project) {
      return (
        <div
          className="case-study-main"
          style={{ backgroundColor: theme.body }}
        >
          <Header theme={theme} />
          <div
            className="case-study-container"
            style={{ textAlign: "center", padding: "80px 24px" }}
          >
            <h1 style={{ color: theme.text }}>Case Study Not Found</h1>
            <p style={{ color: theme.secondaryText, marginBottom: "24px" }}>
              The requested project case study does not exist.
            </p>
            <Link
              to="/projects"
              className="case-study-action-btn"
              style={{
                backgroundColor: theme.text,
                color: theme.body,
              }}
            >
              ← Back to All Projects
            </Link>
          </div>
          <Footer theme={theme} onToggle={this.props.onToggle} />
        </div>
      );
    }

    const cs = project.caseStudy || {};
    const prevProject = index > 0 ? projects[index - 1] : null;
    const nextProject =
      index < projects.length - 1 ? projects[index + 1] : null;

    return (
      <div className="case-study-main" style={{ backgroundColor: theme.body }}>
        <Header theme={theme} />
        <div className="case-study-container">
          <Link
            to="/projects"
            className="case-study-back"
            style={{
              color: theme.text,
              backgroundColor: theme.highlight,
            }}
          >
            ← Back to Projects
          </Link>

          <Fade bottom duration={1200} distance="25px">
            <div
              className="case-study-hero"
              style={{
                backgroundColor: theme.highlight,
                border: `1px solid ${theme.text}18`,
              }}
            >
              {cs.badge && (
                <span
                  className="case-study-badge"
                  style={{
                    backgroundColor: theme.text,
                    color: theme.body,
                  }}
                >
                  {cs.badge}
                </span>
              )}
              <h1 className="case-study-title" style={{ color: theme.text }}>
                {project.name}
              </h1>
              <p
                className="case-study-meta"
                style={{ color: theme.secondaryText }}
              >
                <span role="img" aria-label="calendar">
                  🗓️
                </span>{" "}
                <strong>First Commit:</strong>{" "}
                {project.firstCommitFormatted ||
                  project.createdAt.split("T")[0]}
              </p>
              <p className="case-study-lead" style={{ color: theme.text }}>
                {cs.overview || project.description}
              </p>

              <div style={{ marginBottom: "18px" }}>
                <ProjectLanguages logos={project.languages} />
              </div>

              <div className="case-study-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-action-btn"
                    style={{
                      backgroundColor: theme.text,
                      color: theme.body,
                    }}
                  >
                    Live Deployment ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-action-btn"
                    style={{
                      backgroundColor: theme.body,
                      color: theme.text,
                      border: `1.5px solid ${theme.text}40`,
                    }}
                  >
                    GitHub Repository ↗
                  </a>
                )}
              </div>
            </div>
          </Fade>

          {cs.highlights && cs.highlights.length > 0 && (
            <Fade bottom duration={1200} distance="20px">
              <div className="case-study-metrics-grid">
                {cs.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="case-study-metric-card"
                    style={{
                      backgroundColor: theme.highlight,
                      border: `1px solid ${theme.text}15`,
                    }}
                  >
                    <div
                      className="case-study-metric-val"
                      style={{ color: theme.text }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="case-study-metric-label"
                      style={{ color: theme.secondaryText }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          )}

          {cs.problem && (
            <Fade bottom duration={1200} distance="20px">
              <section
                className="case-study-section"
                style={{
                  backgroundColor: theme.body,
                  border: `1px solid ${theme.text}18`,
                }}
              >
                <h2
                  className="case-study-section-title"
                  style={{ color: theme.text }}
                >
                  <span role="img" aria-label="target">
                    🎯
                  </span>{" "}
                  Problem & Motivation
                </h2>
                <p
                  className="case-study-paragraph"
                  style={{ color: theme.secondaryText }}
                >
                  {cs.problem}
                </p>
              </section>
            </Fade>
          )}

          {cs.architecture && cs.architecture.length > 0 && (
            <Fade bottom duration={1200} distance="20px">
              <section
                className="case-study-section"
                style={{
                  backgroundColor: theme.body,
                  border: `1px solid ${theme.text}18`,
                }}
              >
                <h2
                  className="case-study-section-title"
                  style={{ color: theme.text }}
                >
                  <span role="img" aria-label="architecture">
                    ⚙️
                  </span>{" "}
                  System Architecture
                </h2>
                <ul
                  className="case-study-list"
                  style={{ color: theme.secondaryText }}
                >
                  {cs.architecture.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            </Fade>
          )}

          {cs.challenges && cs.challenges.length > 0 && (
            <Fade bottom duration={1200} distance="20px">
              <section
                className="case-study-section"
                style={{
                  backgroundColor: theme.body,
                  border: `1px solid ${theme.text}18`,
                }}
              >
                <h2
                  className="case-study-section-title"
                  style={{ color: theme.text }}
                >
                  <span role="img" aria-label="wrench">
                    🛠️
                  </span>{" "}
                  Key Engineering Decisions
                </h2>
                <ul
                  className="case-study-list"
                  style={{ color: theme.secondaryText }}
                >
                  {cs.challenges.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            </Fade>
          )}

          <div
            className="case-study-nav-footer"
            style={{ borderTop: `1px solid ${theme.text}18` }}
          >
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="case-study-nav-card"
                style={{
                  backgroundColor: theme.highlight,
                  border: `1px solid ${theme.text}15`,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: theme.secondaryText,
                    marginBottom: "4px",
                  }}
                >
                  ← Previous Case Study
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: theme.text,
                  }}
                >
                  {prevProject.name}
                </div>
              </Link>
            ) : (
              <div style={{ flex: "1 1 260px" }} />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="case-study-nav-card"
                style={{
                  backgroundColor: theme.highlight,
                  border: `1px solid ${theme.text}15`,
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: theme.secondaryText,
                    marginBottom: "4px",
                  }}
                >
                  Next Case Study →
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: theme.text,
                  }}
                >
                  {nextProject.name}
                </div>
              </Link>
            ) : (
              <div style={{ flex: "1 1 260px" }} />
            )}
          </div>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectCaseStudy;
