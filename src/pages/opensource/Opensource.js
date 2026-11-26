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

          {/* Real-time GitHub Analytics */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "18px",
              marginBottom: "35px",
            }}
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=ameyasharma-ai&show_icons=true&theme=radical&hide_border=true"
              alt="Ameya's GitHub Stats"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
              }}
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ameyasharma-ai&layout=compact&theme=radical&hide_border=true"
              alt="Top Languages"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
              }}
            />
            <img
              src="https://streak-stats.demolab.com/?user=ameyasharma-ai&theme=radical&hide_border=true"
              alt="GitHub Streak"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
              }}
            />
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
