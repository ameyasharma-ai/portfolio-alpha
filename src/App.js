import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function preloadPortfolioAssets() {
  const imageModules = [
    require("./assets/images/ameya_photo.jpg"),
    require("./assets/images/nitp_logo.svg"),
    require("./assets/images/iitp_logo.svg"),
    require("./assets/images/new_era_logo.svg"),
    require("./assets/images/notre_dame_logo.svg"),
    require("./assets/images/legato_logo.png"),
    require("./assets/images/dsc_logo.png"),
  ];

  imageModules.forEach((src) => {
    const img = new Image();
    img.src = typeof src === "string" ? src : src.default || "";
  });

  // Warm browser cache for resume PDF so /resume opens instantaneously
  const resumeUrl = (process.env.PUBLIC_URL || "") + "/Ameya_Sharma_Resume.pdf";
  fetch(resumeUrl).catch(() => {});
}

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preloadPortfolioAssets);
      } else {
        setTimeout(preloadPortfolioAssets, 300);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
