import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div
          className="cert-card"
          style={{
            border: `1px solid ${theme.text}20`,
            background: theme.body,
          }}
        >
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{
                  backgroundColor: certificate.color_code || "#007acc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 0",
                  minHeight: "90px",
                }}
              >
                <i
                  className="fas fa-certificate"
                  style={{
                    fontSize: "44px",
                    color: "#ffffff",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
                  }}
                ></i>
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: "#ffffff" }}>
                  Verify Credential &rarr;
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body" style={{ padding: "16px 14px 20px" }}>
            <h2
              className="cert-body-title"
              style={{ color: theme.text, fontSize: "19px", lineHeight: "1.3" }}
            >
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{
                color: theme.secondaryText,
                fontSize: "14px",
                marginTop: "6px",
              }}
            >
              {certificate.subtitle}
            </h3>
            <div style={{ marginTop: "14px" }}>
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "4px",
                  color: "#ffffff",
                  backgroundColor: certificate.color_code || "#007acc",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                View Certificate &rarr;
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
