import React from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div
                className="portfolio-repo-btn-div"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <Link
                  to="/projects"
                  style={{
                    backgroundColor: theme.text,
                    color: theme.body,
                    border: `1px solid ${theme.text}`,
                    padding: "13px 22px",
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: "16px",
                    textDecoration: "none",
                    fontFamily: "Google Sans Medium, sans-serif",
                  }}
                >
                  Explore Case Studies →
                </Link>
                <Link
                  to="/resume"
                  style={{
                    backgroundColor: theme.highlight,
                    color: theme.text,
                    border: `1px solid ${theme.text}30`,
                    padding: "13px 22px",
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: "16px",
                    textDecoration: "none",
                    fontFamily: "Google Sans Medium, sans-serif",
                  }}
                >
                  <span role="img" aria-label="resume">
                    📃
                  </span>{" "}
                  View 1-Page Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
