import React from "react";
import { useHistory } from "react-router-dom";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const history = useHistory();

  function handleCardClick() {
    if (repo.slug) {
      history.push(`/projects/${repo.slug}`);
    } else if (repo.url) {
      const win = window.open(repo.url, "_blank");
      if (win) win.focus();
    }
  }

  function openExternal(e, url) {
    e.stopPropagation();
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight, cursor: "pointer" }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={handleCardClick}>
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{
                color: theme.secondaryText,
                fontSize: "12.5px",
                margin: "4px 0",
              }}
            >
              <span role="img" aria-label="calendar">
                🗓️
              </span>{" "}
              <strong>First Commit:</strong>{" "}
              {repo.firstCommitFormatted || repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "14px",
              paddingTop: "10px",
              borderTop: `1px solid ${theme.text}18`,
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            {repo.slug ? (
              <span style={{ color: theme.text }}>Read Case Study →</span>
            ) : (
              <span />
            )}
            <span
              onClick={(e) =>
                openExternal(e, repo.liveUrl || repo.githubUrl || repo.url)
              }
              style={{
                color: theme.secondaryText,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {repo.liveUrl ? "Live Demo ↗" : "GitHub ↗"}
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
