/* Ameya Sharma - Personal Portfolio Configuration */

// Website related settings
const settings = {
  isSplash: false, // Clean direct load
};

// SEO Related settings
const seo = {
  title: "Ameya Sharma's Portfolio",
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
  logo_name: "AmeyaSharma",
  nickname: "ameyasharma-ai",
  subTitle:
    "Full-Stack Software Engineer & AI Systems Developer building low-latency distributed systems, real-time voice AI, and scalable web platforms.",
  resumeLink: "Ameya_Sharma_Resume.pdf",
  portfolio_repository: "https://github.com/ameyasharma-ai",
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
      logo_path: "iiitk_logo.png",
      alt_name: "NIT Patna",
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
      logo_path: "iu_logo.png",
      alt_name: "IIT Patna",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Cumulative Grade Point Average (CGPA): 8.0 / 10.0.",
        "⚡ Studied electrical systems, foundational circuit theory, and computational logic before choosing to focus on software engineering.",
      ],
      website_link: "https://www.iitp.ac.in",
    },
    {
      title: "New Era Public School, Munger",
      subtitle: "Class XII (Senior Secondary - Science Stream)",
      logo_path: "google_logo.png",
      alt_name: "New Era Public School",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Passed with 78.0% in Senior Secondary Board Examination (Physics, Chemistry, Mathematics).",
      ],
      website_link: "https://google.com",
    },
    {
      title: "Notre Dame Academy, Munger",
      subtitle: "Class X (Secondary School)",
      logo_path: "stanford_logo.png",
      alt_name: "Notre Dame Academy",
      duration: "2008 - 2021",
      descriptions: [
        "⚡ Passed with 93.4% distinction in Class X Board Examination.",
      ],
      website_link: "https://google.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning (ML)",
      subtitle: "- TuteDude Certified",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-ML-1635",
      alt_name: "TuteDude ML",
      color_code: "#00000099",
    },
    {
      title: "Artificial Intelligence Tools (AI Tools)",
      subtitle: "- TuteDude Certified",
      logo_path: "google_logo.png",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-AIT-1054",
      alt_name: "TuteDude AI Tools",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Analytics",
      subtitle: "- TuteDude Certified",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://tutedude694.s3.ap-south-1.amazonaws.com/Certificates/TD-AMEY-DA-1059.pdf",
      alt_name: "TuteDude Data Analytics",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft PowerBI",
      subtitle: "- TuteDude Certified",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://upskill.tutedude.com/certificate/TD-AMEY-PB-2118",
      alt_name: "TuteDude PowerBI",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships & Technical Leadership",
  description:
    "I have built low-latency real-time voice streaming architectures, collaborative development tools, and scalable cloud microservices. Active contributor to campus developer ecosystems.",
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
            "Engineered full-stack production features for client enterprise portals using React.js and Node.js. Optimized backend API endpoints and server-side caching, boosting throughput by 22% and improving system uptime.",
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
            "Architected internal web platform modules for workflow automation and team telemetry, eliminating 35% of manual operational tasks. Reduced API latency by 28% through database query optimization.",
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
    "A showcase of production-grade systems across real-time voice AI, collaborative web applications, and developer tooling. All repositories sanitized for clean security and production standards.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Featured Case Studies",
  description: "Architectural breakdowns of flagship production systems.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "groot-voice-ai-case-study",
      name: "Groot OS: Sub-1.5s Voice-Reactive AI Streaming",
      createdAt: "2024-06-15T00:00:00Z",
      description:
        "Full-duplex WebSocket architecture with dynamic multi-LLM failover routing and neural TTS.",
      url: "https://groot-frontend-orpin.vercel.app",
    },
    {
      id: "codegraph-case-study",
      name: "CodeGraph: AST Import Dependency Mapping",
      createdAt: "2024-11-05T00:00:00Z",
      description:
        "Static code analysis converting GitHub trees into interactive DAGs with Supabase caching.",
      url: "https://codegraph-eight.vercel.app",
    },
    {
      id: "inline-codesync-case-study",
      name: "InLine: Full-Duplex Real-Time Collaborative Editor",
      createdAt: "2024-08-20T00:00:00Z",
      description:
        "Google Docs-style concurrent coding workspace with multi-cursor tracking and CodeMirror 6.",
      url: "https://inline-frontend.vercel.app",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am actively seeking Summer/Autumn 2026 Software Engineering & AI Engineer internships. I am always open to discussing low-latency systems, full-stack architectures, or collaborative opportunities.",
  },
  blogSection: {
    title: "Portfolio Hub",
    subtitle:
      "Check out live interactive deployments and architectural showcases.",
    link: "https://kolzo.in",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Campus Address",
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
    title: "Phone",
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
