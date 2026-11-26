# 🚀 Ameya's Portfolio

> **Full-Stack Software Engineer & AI Systems Developer**  
> _NIT Patna | B.Tech. in Mechanical Engineering (CGPA: 8.5 / 10.0)_

[![Production Deployment](https://img.shields.io/badge/Production-Live-success?style=for-the-badge&logo=vercel)](https://www.ameyasharma.me)
[![GitHub Profile](https://img.shields.io/badge/GitHub-ameyasharma--ai-181717?style=for-the-badge&logo=github)](https://github.com/ameyasharma-ai)
[![X / Twitter](https://img.shields.io/badge/X-@ameyasharma999-000000?style=for-the-badge&logo=x)](https://x.com/ameyasharma999)

---

## 🧭 Overview

Welcome to the official repository for **Ameya's Portfolio**, a modern, responsive React web application highlighting production software engineering projects, low-latency real-time voice streaming architectures, autonomous backend systems, open-source telemetry, and academic credentials.

- **🌐 Live Production URL**: [https://www.ameyasharma.me](https://www.ameyasharma.me)
- **👤 Personal Domain**: [https://ameyasharma.me](https://ameyasharma.me)
- **📧 Contact**: [sharmaameya999@gmail.com](mailto:sharmaameya999@gmail.com) | `+91 9097999898`
- **📍 Location**: Patna, Bihar, India (NIT Patna Campus)

---

## 🛠️ Architecture & Tech Stack

| Layer                  | Technologies & Frameworks                                                   |
| :--------------------- | :-------------------------------------------------------------------------- |
| **Frontend Framework** | React.js, React Router, BaseWeb UI, Styletron, Styled Components            |
| **Animations & UI**    | React-Reveal (Fade & Slide), Anime.js, FontAwesome 6, Iconify               |
| **Document Rendering** | React-PDF vector canvas with Mozilla PDF.js worker                          |
| **Typography**         | Agustina Regular (Cursive signature header), Google Sans, Apple System Font |
| **Deployment & CI/CD** | Vercel Edge Network, GitGuardian automated vulnerability safeguards         |

---

## 🏆 Featured Engineering Projects

1. **[Groot OS — Voice-Reactive AI Interface](https://groot-frontend-orpin.vercel.app)**  
   _Python, FastAPI, Groq Whisper v3-turbo, OpenRouter Multi-LLM Routing, Edge-TTS, WebSockets_

   - Sub-1.5s full-duplex speech-to-speech voice streaming with real-time waveform visualization.
   - Multi-provider fallback router across Groq and OpenRouter ensuring zero dropped conversations.
   - Streaming neural sentence chunking with instant client-side audio barge-in interruption.

2. **[InLine — Real-Time Collaborative Web Code Editor](https://inline-frontend.vercel.app)**  
   _TypeScript, React.js, Node.js, Express, Socket.io, Monaco Editor, CodeMirror 6_

   - "Google Docs for software engineers" featuring multi-user cursor presence, live room sync, and Monaco syntax highlighting.
   - Sub-20ms broadcast latency between connected peers via full-duplex Socket.io room events.

3. **[Arclane Pipeline — Autonomous Business Acquisition Engine](https://github.com/ameyasharma-ai/arclane-autonomous-acquisition-engine)**  
   _Node.js, Puppeteer, Docker, Vercel REST API, Telegram Bot API_

   - 24/7 autonomous worker engine orchestrating geographic grid hopping across Indian SMB commercial hubs.
   - Stealth headless scraping, coordinate jittering, automated lead qualification, and programmatic Vercel deployments.

4. **[CodeGraph — Interactive AST Visualizer](https://codegraph-eight.vercel.app)**  
   _Next.js App Router, TypeScript, React Flow, Supabase PostgreSQL_
   - Parses GitHub repository ASTs and ES module import statements into dynamic interactive dependency graphs with animated path tracing.

---

## 🎓 Academic Qualifications

- **National Institute of Technology Patna (NIT Patna)**: B.Tech. in Mechanical Engineering (_2023 – 2028, Ongoing_) — **8.5 / 10.0 CGPA**  
  _Active Software Development Contributor at Google Developer Student Clubs (GDSC) NIT Patna._
- **Indian Institute of Technology Patna (IIT Patna)**: B.Tech. in Electrical Engineering (_2024 – 2025, Dropped_) — **8.0 / 10.0 CGPA**
- **New Era Public School, Munger**: Class XII CBSE Senior Secondary (Science Stream, _2021 – 2023_) — **78.0%**
- **Notre Dame Academy, Munger**: Class X ICSE Secondary School (_2008 – 2021_) — **93.4% Distinction**

---

## 📜 Verified Certifications (TuteDude)

- [Next.js & Modern Web Development](https://upskill.tutedude.com/certificate/TD-AMEY-NX-1259) — `TD-AMEY-NX-1259`
- [Business Analytics](https://upskill.tutedude.com/certificate/TD-AMEY-CR-1747) — `TD-AMEY-CR-1747`
- [Machine Learning (ML)](https://upskill.tutedude.com/certificate/TD-AMEY-ML-1635) — `TD-AMEY-ML-1635`
- [Artificial Intelligence Tools](https://upskill.tutedude.com/certificate/TD-AMEY-AIT-1054) — `TD-AMEY-AIT-1054`
- [Data Analytics](https://tutedude694.s3.ap-south-1.amazonaws.com/Certificates/TD-AMEY-DA-1059.pdf) — `TD-AMEY-DA-1059`
- [Microsoft PowerBI](https://upskill.tutedude.com/certificate/TD-AMEY-PB-2118) — `TD-AMEY-PB-2118`

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/ameyasharma-ai/portfolio-alpha.git
cd portfolio-alpha

# Install dependencies with legacy peer dependency resolution
npm install --legacy-peer-deps

# Start the local development server
npm start
```

The application will run on [http://localhost:3000](http://localhost:3000).

---

## 📦 Production Build

```bash
npm run build
```

The optimized static production bundle will be generated in `build/`.

---

## 🛡️ Security & Hygiene Protocol

- **Strict Environment Separation**: All production secrets and API keys are stored in Vercel environment variables or local untracked `.env` files.
- **Automated Guardrails**: Monitored via GitGuardian API with pre-commit hooks and strict `.gitignore` rules against credential exposure.
