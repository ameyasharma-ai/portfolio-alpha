import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              GitHub Contributions & Stats
            </h1>
          </Fade>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=ameyasharma-ai&show_icons=true&theme=radical&hide_border=true"
            alt="Ameya's GitHub Stats"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ameyasharma-ai&layout=compact&theme=radical&hide_border=true"
            alt="Top Languages"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
          <img
            src="https://streak-stats.demolab.com/?user=ameyasharma-ai&theme=radical&hide_border=true"
            alt="GitHub Streak"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <IssueChart />
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
