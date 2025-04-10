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
  title: "Hi all, I'm Costa",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 with hands-on experience in AWS, CI/CD, Kubernetes, Docker, Terraform, and monitoring tools like Prometheus and Grafana. Automating infrastructure and delivering scalable solutions."
  ),
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
  title: "What I do",
  subTitle: "DEVOPS ENGINEER SPECIALIZED IN CLOUD INFRASTRUCTURE & AUTOMATION",
  skills: [
    emoji("⚡ Automate infrastructure deployment with Terraform and AWS services (EKS, Lambda, RDS)"),
    emoji("⚡ Build CI/CD pipelines with GitHub Actions and Jenkins for reliable deployments"),
    emoji("⚡ Monitor systems using Prometheus and Grafana for real-time insights"),
    emoji("⚡ Containerize applications using Docker and orchestrate with Kubernetes")
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" },
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "MSSQL", fontAwesomeClassname: "fas fa-database" }
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
      desc: "Focused on Kubernetes, CI/CD, AWS, Terraform, and Monitoring tools."
    },
    {
      schoolName: "Netcraft Academy",
      subHeader: "Fullstack Developer Certification",
      duration: "2019 - 2020",
      desc: "Studied JavaScript, React, Node.js, and .NET development."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "DevOps & CI/CD Automation (GitHub Actions, Docker)", progressPercentage: "85%" },
    { Stack: "Cloud Infrastructure & IaC (AWS, Terraform)", progressPercentage: "80%" },
    { Stack: "Programming & Scripting (Bash, Node.js)", progressPercentage: "75%" },
    { Stack: "Monitoring & Debugging (Grafana, Prometheus)", progressPercentage: "80%" },
    { Stack: "Microservices & Containerization (Docker, DockerHub)", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Firewave (Startup)",
      date: "June 2024 – Present",
      desc: "Automating AWS infrastructure with Terraform, implementing CI/CD pipelines with GitHub Actions, deploying microservices to EKS, and integrating monitoring with Prometheus and Grafana.",
      companylogo: require("./assets/images/Firewave-logo.avif")
    },
    {
      role: "PMO",
      company: "Matrix, Herzliya",
      date: "May 2022 – Present",
      desc: "Leading WMS projects, automating processes with MSSQL scripting, and developing custom solutions with JavaScript and .NET.",
      companylogo: require("./assets/images/logo-matrix-new.png") // תחליף לפי התמונה שתשמור
    },
    {
      role: "Project Manager",
      company: "LogistiCare, Lod",
      date: "Jan 2020 – May 2022",
      desc: "Managing BI and dashboard projects, delivering solutions that improve client decision-making.",
      companylogo: require("./assets/images/logisticare.png") // תחליף לפי התמונה שתשמור
    },
    {
      role: "Military Officer",
      company: "IDF",
      date: "June 2004 – Aug 2014",
      desc: "Arming Officer and Safety Director, led combat units during military operations.",
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

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Certifications and accomplishments along my journey.",
  achievementsCards: [
    {
      title: "AWS Certification Journey",
      subtitle: "Working and learning AWS certification - my goal is to pass it by the end of 2025",
      image: require("./assets/images/AWS.png"), // אם אין לך תמונה, אפשר לשים לוגו כללי
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certification Info",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing knowledge and insights about DevOps and cloud technologies.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Coming soon!"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for opportunities and collaborations!",
  number: "+972-52-5381655",
  email_address: "Costa84@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
