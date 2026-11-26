/* Ameya Sharma - Personal Portfolio Configuration */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Ameya Sharma | Portfolio",
  description:
    "Full-Stack Software Engineer & AI Systems Developer specializing in real-time systems, scalable backend architectures, and AI-powered applications.",
  og: {
    title: "Ameya Sharma Portfolio",
    type: "website",
    url: "https://kolzo.in/",
  },
};

// Home Page
const greeting = {
  title: "Ameya Sharma",
  logo_name: "Ameya Sharma",
  nickname: "ameyasharma-ai",
  subTitle:
    "Full-Stack Software Engineer & AI Systems Developer building low-latency distributed systems, real-time voice AI, and scalable web platforms.",
  resumeLink: "Ameya_Sharma_Resume.pdf",
  portfolio_repository: "https://github.com/ameyasharma-ai/portfolio-alpha",
  githubProfile: "https://github.com/ameyasharma-ai",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ameyasharma-ai",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/ameyasharma999",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/ameyasharma999",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:sharmaameya999@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Real-Time AI & Voice Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Architecting sub-1.5s full-duplex speech-to-speech voice streaming pipelines integrating Groq Whisper STT and neural TTS",
        "⚡ Designing resilient multi-LLM failover routers across 10+ providers with hybrid RAG and long-term memory",
        "⚡ Developing real-time computer vision and spatial perception systems using YOLOv8, YOLOv4, and OpenCV",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#05998B",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "WebSockets",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#010101",
          },
        },
      ],
    },
    {
      title: "Full Stack & Collaborative Web",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive modern web applications with Next.js 15 (App Router), TypeScript, and TailwindCSS",
        "⚡ Engineering full-duplex collaborative editing workspaces with WebSocket message brokers and CodeMirror 6",
        "⚡ Creating high-performance interactive dependency graphs using React Flow handling 200+ nodes",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Distributed Systems & Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing scalable relational database schemas and sub-second caching layers in PostgreSQL and Supabase",
        "⚡ Orchestrating 24/7 autonomous worker daemons, headless browser scraping, and CI/CD pipelines",
        "⚡ Building microservices containerized with Docker and deployed across production cloud environments",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/ameyasharma-ai",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Patna (NIT Patna)",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "nitp_logo.svg",
      alt_name: "NIT Patna Logo",
      duration: "2023 - 2028 (Ongoing)",
      descriptions: [
        "⚡ Current Cumulative Grade Point Average (CGPA): 8.5 / 10.0.",
        "⚡ Active Software Development Contributor at Google Developer Student Clubs (GDSC) NIT Patna.",
        "⚡ Core coursework in systems engineering, control systems, robotics, algorithms, and software design.",
      ],
      website_link: "https://www.nitp.ac.in",
    },
    {
      title: "Indian Institute of Technology Patna (IIT Patna)",
      subtitle: "B.Tech. in Electrical Engineering (Dropped)",
      logo_path: "iitp_logo.svg",
      alt_name: "IIT Patna Logo",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Cumulative Grade Point Average (CGPA): 8.0 / 10.0.",
        "⚡ Studied electrical systems, foundational circuit theory, and computational logic before transitioning focus to software engineering.",
      ],
      website_link: "https://www.iitp.ac.in",
    },
    {
      title: "New Era Public School, Munger",
      subtitle: "Class XII (Senior Secondary - Science Stream)",
      logo_path: "new_era_logo.svg",
      alt_name: "New Era Public School Logo",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Scored 78.0% in Senior Secondary Board Examination (Physics, Chemistry, Mathematics).",
      ],
      website_link: "https://google.com",
    },
    {
      title: "Notre Dame Academy, Munger",
      subtitle: "Class X (Secondary School)",
      logo_path: "notre_dame_logo.svg",
      alt_name: "Notre Dame Academy Logo",
      duration: "2008 - 2021",
      descriptions: [
        "⚡ Graduated with 93.4% distinction in Class X Board Examination.",
      ],
      website_link: "https://google.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Next.js & Modern Web Development",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-NX-1259",
      color_code: "#0f172a",
    },
    {
      title: "Business Analytics",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-CR-1747",
      color_code: "#0284c7",
    },
    {
      title: "Machine Learning (ML)",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-ML-1635",
      color_code: "#10b981",
    },
    {
      title: "Artificial Intelligence Tools",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-AIT-1054",
      color_code: "#6366f1",
    },
    {
      title: "Data Analytics",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://tutedude694.s3.ap-south-1.amazonaws.com/Certificates/TD-AMEY-DA-1059.pdf",
      color_code: "#f59e0b",
    },
    {
      title: "Microsoft PowerBI",
      subtitle: "TuteDude Verified Certification",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-PB-2118",
      color_code: "#ec4899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships & Technical Leadership",
  description:
    "Hands-on experience developing real-time voice streaming architectures, collaborative development tools, and full-stack software applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships & Work",
      work: true,
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Pixalytix Digital Solutions LLP",
          company_url: "https://kolzo.in",
          logo_path: "legato_logo.png",
          duration: "Apr 2025 - Jun 2025",
          location: "Patna, Bihar, India",
          description:
            "Engineered full-stack features for client enterprise portals using React.js and Node.js. Optimized backend API endpoints and caching, improving responsiveness and system stability.",
          color: "#0879bf",
        },
        {
          title: "Software Development Contributor",
          company: "Google Developer Student Clubs (GDSC)",
          company_url: "https://www.nitp.ac.in",
          logo_path: "dsc_logo.png",
          duration: "Jan 2026 - Present",
          location: "NIT Patna, Bihar, India",
          description:
            "Built internal platform features for workflow automation and team management. Reduced API latency through database query optimization and clean API routing.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Real-world systems across real-time voice AI, collaborative web applications, and developer tooling. Built with modern stacks and sanitized production standards.",
  avatar_image_path: "projects_image.svg",
};

// Publications section cleanly disabled (avoids misleading pseudo-publications)
const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ameya_photo.jpg",
    description:
      "I am actively seeking Summer/Autumn 2026 Software Engineering & AI Engineer internships. Open to discussing real-time systems, full-stack development, and technical opportunities.",
  },
  blogSection: {
    title: "Open to Opportunities",
    subtitle:
      "Fast 24-hour response turnaround. Feel free to shoot me an email, ping me on X, or review my code on GitHub.",
    link: "mailto:sharmaameya999@gmail.com",
    avatar_image_path: "developerActivity.svg",
  },
  addressSection: {
    title: "Campus Location",
    subtitle:
      "National Institute of Technology Patna (NIT Patna), Ashok Rajpath, Mahendru, Patna, Bihar, India 800005",
    locality: "Patna",
    country: "India",
    region: "Bihar",
    postalCode: "800005",
    streetAddress: "Ashok Rajpath, Mahendru",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=National+Institute+of+Technology+Patna",
  },
  phoneSection: {
    title: "Direct Mobile",
    subtitle: "+91 9097999898",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
