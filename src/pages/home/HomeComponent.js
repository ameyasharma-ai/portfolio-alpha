import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ProjectsData from "../../shared/opensource/projects.json";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    const featuredProjects = ProjectsData.data.slice(0, 4);

    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />
        <Skills theme={theme} />

        {/* Featured Case Studies Bridge */}
        <div
          className="main"
          style={{
            width: "90%",
            margin: "40px auto 20px",
            textAlign: "center",
          }}
        >
          <Fade bottom duration={1500} distance="20px">
            <h1
              className="skills-header"
              style={{ color: theme.text, marginBottom: "12px" }}
            >
              Featured Engineering & Case Studies
            </h1>
            <p
              className="subTitle"
              style={{
                color: theme.secondaryText,
                maxWidth: "760px",
                margin: "0 auto 30px",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Production systems shipped across real-time voice AI,
              collaborative tooling, AST analysis, and autonomous web deployment
              — click any card for the full architecture breakdown.
            </p>
          </Fade>

          <div
            className="repo-cards-div-main"
            style={{ marginLeft: 0, marginRight: 0, marginTop: "20px" }}
          >
            {featuredProjects.map((repo) => (
              <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "36px",
              marginBottom: "20px",
            }}
          >
            <Link
              to="/projects"
              style={{
                backgroundColor: theme.text,
                color: theme.body,
                padding: "13px 26px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                fontFamily: "Google Sans Medium, sans-serif",
              }}
            >
              View All {ProjectsData.data.length} Case Studies →
            </Link>
            <Link
              to="/contact"
              style={{
                backgroundColor: theme.highlight,
                color: theme.text,
                padding: "13px 26px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                fontFamily: "Google Sans Medium, sans-serif",
              }}
            >
              Hire / Contact Me
            </Link>
          </div>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
