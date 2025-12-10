/* Costa Epshtein Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Costa Epshtein",
  title: "Hi there 👋, I'm Costa",
  subTitle: emoji(
    "🚀 DevOps Engineer | Cloud Automation | Reliability Enthusiast \n\n Passionate about crafting cloud-native, scalable, and self-healing infrastructure 🌍. I turn complex challenges into elegant, automated solutions using AWS ☁️, Kubernetes ⚙️, Docker 🐳, and Terraform 🧱. With a strong focus on CI/CD pipelines 🔁, observability 📈, and team collaboration 🤝, I help organizations deliver software faster, safer, and smarter — driving innovation through automation."),
  resumeLink: "https://costaep.github.io/my-portfolio/Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/CostaEp",
  linkedin: "https://linkedin.com/in/costa-epshtein-33271131",
  gmail: "Costa84@gmail.com",
  display: true
};

const skillsSection = {
  title: "Core Expertise",
  subTitle: "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | AUTOMATION & RELIABILITY ENGINEERING",
  skills: [
    emoji("⚡ Architect, provision, and manage scalable cloud infrastructure using AWS (EKS, EC2, Lambda, RDS, S3) and Terraform"),
    emoji("⚡ Design and implement end-to-end CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD for automated deployments"),
    emoji("⚡ Build and maintain containerized microservices with Docker, Helm, and Kubernetes for high availability and scalability"),
    emoji("⚡ Establish observability with Prometheus, Grafana, Loki, and Alertmanager for proactive monitoring and alerting"),
    emoji("⚡ Automate system configuration and environment provisioning using Ansible, Bash, and Python scripting"),
    emoji("⚡ Manage secure secrets and configurations with AWS Secrets Manager and GitOps workflows"),
    emoji("⚡ Integrate automated testing, vulnerability scanning, and code-quality checks (SonarQube, Trivy, OWASP) into CI/CD pipelines"),
    emoji("⚡ Collaborate cross-functionally with developers, QA, and operations to accelerate delivery and improve reliability"),
    emoji("⚡ Optimize cost, performance, and resilience of cloud workloads through data-driven monitoring and continuous improvement")
  ],

  softwareSkills: [
    // ☁️ Cloud & Infrastructure
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-server" },

    // 🧱 Containers & Orchestration
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Helm", fontAwesomeClassname: "fas fa-anchor" },

    // 🔁 CI/CD & Automation
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "ArgoCD", fontAwesomeClassname: "fas fa-code-branch" },

    // 📊 Monitoring & Observability
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Loki", fontAwesomeClassname: "fas fa-eye" },

    // 💻 Development & Scripting
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" },

    // 🗄️ Databases & Data Tools
    { skillName: "MSSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
  ],

  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Real Time College",
      subHeader: "DevOps Program",
      duration: "Aug 2022 - Aug 2023",
      desc: "Comprehensive, hands-on DevOps program focused on cloud infrastructure, automation, and observability. Gained practical experience with AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, and monitoring stacks such as Prometheus and Grafana — applying modern DevOps methodologies, CI/CD best practices, and infrastructure as code principles in real-world projects."
    },
    {
      schoolName: "Netcraft Academy",
      subHeader: "Full-Stack Developer Certification",
      duration: "2019 – 2020",
      desc: "Comprehensive program covering front-end and back-end web development. Gained hands-on experience with JavaScript, React, Node.js, SQL, and other modern technologies — building dynamic, responsive, and data-driven applications from concept to deployment."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "CI/CD & Deployment Automation (GitHub Actions, Jenkins, ArgoCD, DockerHub)", progressPercentage: "90%" },
    { Stack: "Cloud Infrastructure & IaC (AWS, Terraform, Ansible, Helm)", progressPercentage: "88%" },
    { Stack: "Scripting & Automation (Bash, Python, Node.js)", progressPercentage: "85%" },
    { Stack: "Observability & Monitoring (Prometheus, Grafana, Loki, Alertmanager)", progressPercentage: "87%" },
    { Stack: "Containerization & Microservices (Docker, Kubernetes, Multi-stage builds, EKS)", progressPercentage: "90%" },
    { Stack: "Version Control & Collaboration (Git, GitHub, GitOps workflows)", progressPercentage: "92%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Elbit Systems",
      date: "December 2025 – Present",
      desc: "As a DevOps Engineer at Elbit Systems, I design, implement, and maintain CI/CD pipelines and cloud-native infrastructure to support large-scale, mission-critical systems. My work bridges development and operations, ensuring fast, reliable, and secure delivery of software across environments.",
      companylogo: require("./assets/images/Elbit-logo.png")
    },
    {
      role: "DevOps Engineer",
      company: "Firewave (Startup)",
      date: "June 2024 – December 2025",
      desc: "Leading DevOps initiatives for a fast-growing startup by automating AWS infrastructure with Terraform, designing CI/CD pipelines in GitHub Actions, and deploying containerized microservices on EKS. Integrated Prometheus and Grafana for observability, ensuring high availability, performance, and scalability across all environments.",
      companylogo: require("./assets/images/firewave_earth_logo.jpeg")
    },
    {
      role: "WMS PMO | Developer",
      company: "Matrix, Herzliya",
      date: "May 2022 – December 2025",
      desc: "Led end-to-end WMS projects at Matrix IT, combining PMO, DevOps, and API integration to deliver automated logistics solutions connected with ERP and BI systems. Improved visibility, scalability, and efficiency across enterprise supply chains.",
      companylogo: require("./assets/images/Matrix_logo.jpg") // תחליף לפי התמונה שתשמור
    },
    {
      role: "IT Project Manager",
      company: "LogistiCare, Lod",
      date: "Jan 2020 – May 2022",
      desc: "As part of the IT team at Logisticare, I led WMS (Warehouse Management System) projects and technical initiatives aimed at optimizing logistics operations and data visibility. My work combined project leadership, process design, custom development, and business data analysis, ensuring smooth integration between operational teams, external clients, and technology systems..",
      companylogo: require("./assets/images/logisticare.png") // תחליף לפי התמונה שתשמור
    },
    {
      role: "Military Officer",
      company: "IDF",
      date: "June 2004 – Aug 2014",
      desc: "Served as an Ordnance Officer (Rank: Major), leading a maintenance and technology platoon responsible for the readiness, safety, and operational availability of all armored vehicles, weapon systems, and support equipment across multiple combat units. Managed a diverse team of professional technicians and soldiers, ensuring full technological and logistical readiness at all times.",
      companylogo: require("./assets/images/IDF.png") // תחליף לפי התמונה שתשמור
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some personal and professional projects I've worked on.",
  projects: [],
  display: false
};

// const achievementSection = {
//   title: emoji("Achievements and Certifications 🏆"),
//   subtitle: "Certifications and accomplishments along my journey.",
//   achievementsCards: [
//     {
//       title: "AWS Certification Journey",
//       subtitle: "Working and learning AWS certification - my goal is to pass it by the end of 2025",
//       image: require("./assets/images/AWS.png"), // אם אין לך תמונה, אפשר לשים לוגו כללי
//       imageAlt: "AWS Logo",
//       footerLink: [
//         {
//           name: "AWS Certification Info",
//           url: "https://aws.amazon.com/certification/"
//         }
//       ]
//     }
//   ],
//   display: true
// };

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Professional milestones, certifications, and continuous learning highlights from my DevOps journey.",
  achievementsCards: [
    {
      title: "AWS Certification Journey",
      subtitle:
        "Currently advancing through the AWS certification path with hands-on experience in cloud infrastructure, automation, and security. Targeting AWS Certified DevOps Engineer by the end of 2025.",
      image: require("./assets/images/AWS.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certification Info",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    },
    {
      title: "Real Time College – DevOps Engineering Program",
      subtitle:
        "Completed an intensive DevOps program focused on AWS, Kubernetes, Terraform, Jenkins, and Prometheus/Grafana — applying real-world automation and CI/CD practices.",
      image: require("./assets/images/real_time_logo.png"),
      imageAlt: "Real Time College Logo",
      footerLink: [
        {
          name: "View Program",
          url: "https://rt-ed.co.il/program/devops/" // optional: replace with your actual program link
        }
      ]
    },
    {
      title: "Netcraft Academy – Full-Stack Developer Certification",
      subtitle:
        "Earned certification in full-stack web development, mastering JavaScript, React, Node.js, and SQL through hands-on projects.",
      image: require("./assets/images/netcraft_logo.jpeg"),
      imageAlt: "Netcraft Academy Logo",
      footerLink: [
        {
          name: "Visit Netcraft Academy",
          url: "https://www.netcraftacademy.co.il/" // optional: replace with official link
        }
      ]
    }
  ],
  display: true
};

// const blogSection = {
//   title: "Blogs",
//   subtitle: "Sharing knowledge and insights about DevOps and cloud technologies.",
//   displayMediumBlogs: "false",
//   blogs: [],
//   display: false
// };

// const talkSection = {
//   title: "Talks",
//   subtitle: emoji("Coming soon!"),
//   talks: [],
//   display: false
// };

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "Coming soon!",
//   podcast: [],
//   display: false
// };

// const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",
//   display: true
// };

const blogSection = {
  title: "Articles & Blog Posts",
  subtitle: "In-depth notes, how-tos, and reflections on DevOps, cloud infrastructure, and automation (coming soon).",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

const talkSection = {
  title: "Talks & Meetups",
  subtitle: emoji("Tech talks, internal knowledge-sharing sessions, and community events will be added here soon 🎤"),
  talks: [],
  display: true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Planning future episodes about real-world DevOps challenges, cloud architectures, and career growth.",
  podcast: [],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume to get a full overview of my DevOps experience, skills, and professional background.",
  display: true
};

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle: "Open for opportunities and collaborations!",
//   number: "+972-52-5381655",
//   email_address: "Costa84@gmail.com"
// };

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "I'm always open to exciting DevOps opportunities, cloud projects, or collaborations. Feel free to reach out — let's build something great together!",
  number: "+972-52-5381655",
  email_address: "Costa84@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
