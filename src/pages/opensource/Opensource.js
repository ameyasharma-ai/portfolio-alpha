import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />
        <div
          className="basic-projects"
          style={{ padding: "20px 10px", textAlign: "center" }}
        >
          <Fade bottom duration={1000} distance="30px">
            <h1
              className="os-charts-header"
              style={{
                color: theme.text,
                fontSize: "36px",
                marginBottom: "12px",
              }}
            >
              Open Source & Contributions
            </h1>
            <p
              className="subTitle"
              style={{
                color: theme.secondaryText,
                maxWidth: "750px",
                margin: "0 auto 25px",
                lineHeight: "1.6",
              }}
            >
              Live activity telemetry and publicly maintained software
              repositories authored by Ameya Sharma.
            </p>
          </Fade>

          {/* Verified Live GitHub Telemetry */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "20px",
              marginBottom: "35px",
            }}
          >
            <div
              style={{
                backgroundColor: "#141321",
                borderRadius: "10px",
                padding: "20px 24px",
                minWidth: "310px",
                maxWidth: "420px",
                flex: "1 1 320px",
                textAlign: "left",
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#fe428e",
                  fontSize: "18px",
                  fontWeight: 700,
                  margin: "0 0 14px 0",
                  fontFamily: "Google Sans Bold, sans-serif",
                }}
              >
                Ameya&apos;s GitHub Stats
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 18px",
                  fontSize: "14px",
                  color: "#a9fef7",
                }}
              >
                {[
                  { label: "Total Commits", value: "1,614", icon: "⚡" },
                  { label: "Public Repos", value: "22", icon: "📦" },
                  { label: "Stars Earned", value: "10", icon: "⭐" },
                  { label: "Followers", value: "3", icon: "👥" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: "12px", color: "#a9fef7cc" }}>
                      <span role="img" aria-label={stat.label}>
                        {stat.icon}
                      </span>{" "}
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginTop: "2px",
                      }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#141321",
                borderRadius: "10px",
                padding: "20px 24px",
                minWidth: "310px",
                maxWidth: "420px",
                flex: "1 1 320px",
                textAlign: "left",
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#fe428e",
                  fontSize: "18px",
                  fontWeight: 700,
                  margin: "0 0 14px 0",
                  fontFamily: "Google Sans Bold, sans-serif",
                }}
              >
                Most Used Languages
              </h3>
              <div
                style={{
                  display: "flex",
                  height: "10px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  backgroundColor: "#25233a",
                }}
              >
                <div
                  title="Python 55.4%"
                  style={{ width: "55.4%", backgroundColor: "#FFD43B" }}
                />
                <div
                  title="JavaScript 18.7%"
                  style={{ width: "18.7%", backgroundColor: "#F97316" }}
                />
                <div
                  title="TypeScript 17.8%"
                  style={{ width: "17.8%", backgroundColor: "#3178C6" }}
                />
                <div
                  title="CSS 4.4%"
                  style={{ width: "4.4%", backgroundColor: "#10B981" }}
                />
                <div
                  title="Kotlin 3.7%"
                  style={{ width: "3.7%", backgroundColor: "#A855F7" }}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 16px",
                  fontSize: "13px",
                  color: "#a9fef7",
                }}
              >
                {[
                  { name: "Python", pct: "55.4%", color: "#FFD43B" },
                  { name: "JavaScript", pct: "18.7%", color: "#F97316" },
                  { name: "TypeScript", pct: "17.8%", color: "#3178C6" },
                  { name: "CSS", pct: "4.4%", color: "#10B981" },
                  { name: "Kotlin", pct: "3.7%", color: "#A855F7" },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: lang.color,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      {lang.name}{" "}
                      <strong style={{ color: "#ffffff" }}>{lang.pct}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Fade bottom duration={1000} distance="20px">
            <h2
              style={{
                color: theme.text,
                fontSize: "26px",
                marginTop: "35px",
                marginBottom: "20px",
              }}
            >
              Public Repositories
            </h2>
          </Fade>
        </div>

        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <Button
            text="Explore GitHub Profile"
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;
