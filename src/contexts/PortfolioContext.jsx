import React, { createContext, useContext } from "react";
import LanguageContext from "./LanguageContext";

// --- Import Images ---
import img_0 from "../assets/images/Elbit-logo.png";
import img_1 from "../assets/images/firewave_earth_logo.jpeg";
import img_2 from "../assets/images/Matrix_logo.jpg";
import img_3 from "../assets/images/logisticare.png";
import img_4 from "../assets/images/IDF.png";
import img_5 from "../assets/images/dev_proj_logo.gif";
import img_6 from "../assets/images/dev_proj_logo.gif";
import img_7 from "../assets/images/dev_proj_logo.gif";
import img_8 from "../assets/images/dev_proj_logo.gif";
import img_9 from "../assets/images/AWS.png";
import img_10 from "../assets/images/AWS.png";
import img_11 from "../assets/images/real_time_logo.png";
import img_12 from "../assets/images/netcraft_logo.jpeg";
import splashAnimation from "../assets/lottie/splashAnimation";
import emoji from "react-easy-emoji";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);

  const data = {
    en: {
      splashScreen: { enabled: true, animation: splashAnimation, duration: 2000 },
      illustration: { animated: true },
      greeting: {
        username: "Costa Epshtein",
        title: "Hi there 👋, I'm Costa",
        subTitle: emoji("🚀 DevOps Engineer | Cloud Automation | Reliability Enthusiast 🌍 Passionate about building cloud-native, scalable, and self-healing infrastructure. I transform complex challenges into elegant, automated solutions using AWS, Kubernetes, Docker, and Terraform."),
        resumeLink: "https://costaep.github.io/my-portfolio/Resume.pdf",
        displayGreeting: true
      },
      socialMediaLinks: {
        github: "https://github.com/CostaEp",
        linkedin: "https://linkedin.com/in/costa-epshtein-33271131",
        gmail: "Costa84@gmail.com",
        display: true
      },
      skillsSection: {
        title: "Core Expertise",
        subTitle: "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | AUTOMATION & RELIABILITY ENGINEERING",
        skills: [
          emoji("⚡ Architect, provision, and manage scalable cloud infrastructure using AWS (EKS, EC2, Lambda, RDS, S3) and Terraform"),
          emoji("⚡ Design and implement end-to-end CI/CD pipelines with GitHub Actions, Jenkins, and ArgoCD for automated deployments"),
          emoji("⚡ Build and maintain containerized microservices with Docker, Helm, and Kubernetes for high availability and scalability"),
          emoji("⚡ Establish observability with Prometheus, Grafana, Loki, and Alertmanager for proactive monitoring and alerting"),
          emoji("⚡ Automate system configuration and environment provisioning using Ansible, Bash, and Python scripting"),
          emoji("⚡ Manage secure secrets and configurations with GitOps workflows")
        ],
        softwareSkills: [
          { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
          { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
          { skillName: "Ansible", fontAwesomeClassname: "fas fa-server" },
          { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
          { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
          { skillName: "Helm", fontAwesomeClassname: "fas fa-anchor" },
          { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
          { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
          { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
          { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
          { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
          { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" }
        ],
        display: true
      },
      educationInfo: {
        display: true,
        title: "Education",
        schools: [
          {
            schoolName: "Real Time College",
            subHeader: "DevOps Program",
            duration: "Aug 2022 - Aug 2023",
            desc: "Comprehensive, hands-on DevOps program focused on cloud infrastructure, automation, and observability. Gained practical experience with AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, and monitoring stacks.",
            logo: img_11
          },
          {
            schoolName: "Netcraft Academy",
            subHeader: "Full-Stack Developer Certification",
            duration: "2019 – 2020",
            desc: "Comprehensive program covering front-end and back-end web development. Gained hands-on experience with JavaScript, React, Node.js, SQL, and other modern technologies.",
            logo: img_12
          }
        ]
      },
      techStack: {
        title: "Proficiency",
        viewSkillBars: true,
        experience: [
          { Stack: "CI/CD & Deployment Automation (GitHub Actions, Jenkins, ArgoCD)", progressPercentage: "90%" },
          { Stack: "Cloud Infrastructure & IaC (AWS, Terraform, Ansible, Helm)", progressPercentage: "88%" },
          { Stack: "Scripting & Automation (Bash, Python, Node.js)", progressPercentage: "85%" },
          { Stack: "Observability & Monitoring (Prometheus, Grafana, Loki)", progressPercentage: "87%" },
          { Stack: "Containerization & Microservices (Docker, Kubernetes)", progressPercentage: "90%" }
        ],
        displayCodersrank: false
      },
      workExperiences: {
        title: "Experiences",
        display: true,
        experience: [
          {
            role: "DevOps Engineer",
            company: "Elbit Systems",
            date: "December 2025 – Present",
            desc: "As a DevOps Engineer at Elbit Systems, I design, implement, and maintain CI/CD pipelines and cloud-native infrastructure to support large-scale, mission-critical systems. My work bridges development and operations, ensuring fast, reliable, and secure delivery of software across environments.",
            companylogo: img_0
          },
          {
            role: "DevOps Engineer",
            company: "Firewave (Startup)",
            date: "June 2024 – December 2025",
            desc: "Leading DevOps initiatives for a fast-growing startup by automating AWS infrastructure with Terraform, designing CI/CD pipelines in GitHub Actions, and deploying containerized microservices on EKS. Integrated Prometheus and Grafana for observability.",
            companylogo: img_1
          },
          {
            role: "WMS PMO | Developer",
            company: "Matrix, Herzliya",
            date: "May 2022 – December 2025",
            desc: "Led end-to-end WMS projects at Matrix IT, combining PMO, DevOps, and API integration to deliver automated logistics solutions connected with ERP and BI systems.",
            companylogo: img_2
          },
          {
            role: "IT Project Manager",
            company: "LogistiCare, Lod",
            date: "Jan 2020 – May 2022",
            desc: "Led WMS (Warehouse Management System) projects and technical initiatives aimed at optimizing logistics operations and data visibility.",
            companylogo: img_3
          },
          {
            role: "Military Officer",
            company: "IDF",
            date: "June 2004 – Aug 2014",
            desc: "Served as an Ordnance Officer (Rank: Major), leading a maintenance and technology platoon responsible for the readiness, safety, and operational availability of all armored vehicles.",
            companylogo: img_4
          }
        ]
      },
      openSource: { showGithubProfile: "false", display: false },
      bigProjects: {
        title: "DevOps Projects",
        subtitle: "End-to-end CI/CD, cloud, and automation projects from my GitHub.",
        projects: [
          {
            image: img_5,
            projectName: "My Portfolio – Full DevOps Pipeline",
            projectDesc: "Personal portfolio application with a complete CI/CD pipeline: GitHub Actions build, Docker image build & push to DockerHub, and automatic deployment to GitHub Pages.",
            footerLink: [{ name: "View on GitHub", url: "https://github.com/CostaEp/my-portfolio" }, { name: "Live Demo", url: "https://costaep.github.io/my-portfolio/" }]
          },
          {
            image: img_6,
            projectName: "Full DevOps Project – AWS EKS",
            projectDesc: "Architecture and implementation of a full DevOps pipeline for containerized microservices: Terraform-provisioned AWS EKS, Docker, GitHub Actions CI/CD, JFrog & DockerHub registries, and monitoring with Prometheus.",
            footerLink: [{ name: "View on GitHub", url: "https://github.com/CostaEp/Full_DevOps_project" }]
          },
          {
            image: img_7,
            projectName: "Jenkins CI/CD on RedHat UBI8",
            projectDesc: "Custom Jenkins image based on RedHat UBI8 with Docker CLI and Java 17. Implements CI/CD pipelines to build Docker images for the portfolio app.",
            footerLink: [{ name: "View on GitHub", url: "https://github.com/CostaEp/jenkins_redhat_server" }]
          },
          {
            image: img_8,
            projectName: "YAML-Powered Resume Automation",
            projectDesc: "Infrastructure-as-text resume: data stored in YAML, converted to Markdown and PDF using Python and Pandoc, automated with GitHub Actions.",
            footerLink: [{ name: "View on GitHub", url: "https://github.com/CostaEp/my-resume" }]
          }
        ],
        display: true
      },
      achievementSection: {
        title: emoji("Achievements & Certifications 🏆"),
        subtitle: "Professional milestones, certifications, and continuous learning highlights from my DevOps journey.",
        achievementsCards: [
          {
            title: "AWS Certification Journey",
            subtitle: "Currently advancing through the AWS certification path with hands-on experience in cloud infrastructure, automation, and security.",
            image: img_10,
            imageAlt: "AWS Logo",
            footerLink: [{ name: "AWS Certification Info", url: "https://aws.amazon.com/certification/" }]
          },
          {
            title: "Real Time College – DevOps Engineering Program",
            subtitle: "Completed an intensive DevOps program focused on AWS, Kubernetes, Terraform, Jenkins, and Prometheus/Grafana.",
            image: img_11,
            imageAlt: "Real Time College Logo",
            footerLink: [{ name: "View Program", url: "https://rt-ed.co.il/program/devops/" }]
          },
          {
            title: "Netcraft Academy – Full-Stack Developer",
            subtitle: "Earned certification in full-stack web development, mastering JavaScript, React, Node.js, and SQL.",
            image: img_12,
            imageAlt: "Netcraft Academy Logo",
            footerLink: [{ name: "Visit Netcraft Academy", url: "https://www.netcraftacademy.co.il/" }]
          }
        ],
        display: true
      },
      blogSection: { title: "Articles & Blog Posts", subtitle: "In-depth notes, how-tos, and reflections on DevOps.", displayMediumBlogs: "false", blogs: [], display: true },
      talkSection: { title: "Talks & Meetups", subtitle: emoji("Tech talks, internal knowledge-sharing sessions, and community events will be added here soon 🎤"), talks: [], display: true },
      podcastSection: { title: emoji("Podcast 🎙️"), subtitle: "Planning future episodes about real-world DevOps challenges, cloud architectures, and career growth.", podcast: [], display: true },
      resumeSection: { title: "Resume", subtitle: "Download my resume to get a full overview of my DevOps experience, skills, and professional background.", display: true },
      contactInfo: { title: "Contact Me", subtitle: "I'm always open to exciting DevOps opportunities, cloud projects, or collaborations. Feel free to reach out — let's build something great together!", number: "+972-52-5381655", email_address: "Costa84@gmail.com" },
      twitterDetails: { userName: "", display: false },
      isHireable: false
    },
    he: {
      splashScreen: { enabled: true, animation: splashAnimation, duration: 2000 },
      illustration: { animated: true },
      greeting: {
        username: "קוסטה אפשטיין",
        title: "היי 👋, אני קוסטה",
        subTitle: emoji("🚀 מהנדס DevOps | אוטומציית ענן | מומחה לאמינות מערכות 🌍 בעל תשוקה לבניית תשתיות ענן סקיילביליות ויציבות. מתרגם אתגרים מורכבים לפתרונות אוטומטיים ואלגנטיים בעזרת AWS, קוברנטיס, דוקר וטרהפורם."),
        resumeLink: "https://costaep.github.io/my-portfolio/Resume.pdf",
        displayGreeting: true
      },
      socialMediaLinks: {
        github: "https://github.com/CostaEp",
        linkedin: "https://linkedin.com/in/costa-epshtein-33271131",
        gmail: "Costa84@gmail.com",
        display: true
      },
      skillsSection: {
        title: "תחומי התמחות",
        subTitle: "ענן | אוטומציה | אמינות מערכות",
        skills: [
          emoji("⚡ תכנון, הקמה וניהול של תשתיות ענן מתרחבות ב-AWS באמצעות Terraform"),
          emoji("⚡ עיצוב והטמעת תהליכי אוטומציה ו-CI/CD מקצה לקצה עם GitHub Actions, Jenkins ו-ArgoCD"),
          emoji("⚡ פיתוח ותחזוקת סביבות קונטיינרים ומיקרו-שירותים באמצעות Docker, Helm ו-Kubernetes"),
          emoji("⚡ הטמעת מערכות ניטור, התראות ולוגים עם Prometheus, Grafana ו-Loki"),
          emoji("⚡ אוטומציית סקריפטים וניהול קונפיגורציות בעזרת Ansible, Bash ורשתות Python"),
          emoji("⚡ ניהול מאובטח של סודות וקונפיגורציות ויישום של תהליכי GitOps מודרניים")
        ],
        softwareSkills: [
          { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
          { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
          { skillName: "Ansible", fontAwesomeClassname: "fas fa-server" },
          { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
          { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
          { skillName: "Helm", fontAwesomeClassname: "fas fa-anchor" },
          { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
          { skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools" },
          { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
          { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-pie" },
          { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
          { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" }
        ],
        display: true
      },
      educationInfo: {
        display: true,
        title: "השכלה",
        schools: [
          {
            schoolName: "מכללת Real Time",
            subHeader: "הכשרת מהנדסי DevOps",
            duration: "אוגוסט 2022 - אוגוסט 2023",
            desc: "תוכנית מקיפה ומעשית המתמקדת בתשתיות ענן, אוטומציה וניטור. צברתי ניסיון עם מערכות כגון AWS, קוברנטיס, טרהפורם ומערכות CI/CD רבות תוך יישום מתודולוגיות תקן.",
            logo: img_11
          },
          {
            schoolName: "מכללת נטקראפט",
            subHeader: "הסמכת מפתחי Full-Stack",
            duration: "2019 – 2020",
            desc: "תוכנית אינטנסיבית המכסה פיתוח Front-end ו-Back-end. רכישת מומחיות מעשית רבה ב-JavaScript, React, Node.js וטכנולוגיות עכשוויות נוספות.",
            logo: img_12
          }
        ]
      },
      techStack: {
        title: "מיומנויות",
        viewSkillBars: true,
        experience: [
          { Stack: "אוטומציה ו-CI/CD (GitHub Actions, Jenkins, ArgoCD)", progressPercentage: "90%" },
          { Stack: "תשתיות ענן ו-IaC (AWS, Terraform, Ansible)", progressPercentage: "88%" },
          { Stack: "סקריפטים ופיתוח (Bash, Python, Node.js)", progressPercentage: "85%" },
          { Stack: "מערכות ניטור ואבחון (Prometheus, Grafana, Loki)", progressPercentage: "87%" },
          { Stack: "קונטיינרים ותזמור (Docker, Kubernetes)", progressPercentage: "90%" }
        ],
        displayCodersrank: false
      },
      workExperiences: {
        title: "ניסיון תעסוקתי",
        display: true,
        experience: [
          {
            role: "מהנדס DevOps",
            company: "אלביט מערכות",
            date: "דצמבר 2025 – הווה",
            desc: "מתכנן, מטמיע ומתחזק תשתיות ענן ותהליכי CI/CD במערכות קריטיות רחבות-היקף. מחבר בין הפיתוח לאופרציה תוך שמירה על אספקה אמינה, מאובטחת ומהירה של קוד בסטנדרטים המחמירים ביותר.",
            companylogo: img_0
          },
          {
            role: "מהנדס DevOps",
            company: "Firewave (סטארט-אפ)",
            date: "יוני 2024 – דצמבר 2025",
            desc: "הובלתי את התשתיות של הסטארט-אפ על ידי אוטומציה ב-AWS עם טרהפורם, תכנון תהליכי ייצור משלב כתיבת הקוד ועד להרצה על קוברנטיס, תוך שילוב ניטור מתקדם להבטחת ביצועים וזמינות.",
            companylogo: img_1
          },
          {
            role: "מנהל פרויקטים ומפתח",
            company: "מטריקס איטנגרציה",
            date: "מאי 2022 – דצמבר 2025",
            desc: "הובלת פרויקטי WMS מקצה לקצה, תוך שילוב עקרונות DevOps ואינטגרציות API כדי לספק פתרונות לוגיסטיים אוטומטיים המחוברים למערכות ERP ארגוניות.",
            companylogo: img_2
          },
          {
            role: "מנהל פרויקטי IT",
            company: "לוגיסטיקר",
            date: "ינואר 2020 – מאי 2022",
            desc: "ניהול פרויקטי WMS וטכנולוגיות במטרה לייעל אופרציות לוגיסטיות. עבודתי שילבה ניהול טכנולוגי, אפיון תהליכים, פיתוח וקסטומיזציה לייעול התפעול השוטף בחברה.",
            companylogo: img_3
          },
          {
            role: "קצין בצה״ל",
            company: "חיל החימוש",
            date: "יוני 2004 – אוגוסט 2014",
            desc: "שירות קבע כקצין חימוש (רס״ן), הובלת פלגות טכנולוגיות ותחזוקתיות, אחריות על רמת מוכנות המערכות המבצעיות ותהליכי הפיתוח של אנשי המקצוע בפלוגה תחת תנאי לחץ.",
            companylogo: img_4
          }
        ]
      },
      openSource: { showGithubProfile: "true", display: false },
      bigProjects: {
        title: "פרויקטי DevOps",
        subtitle: "פרויקטי מחזור פיתוח, תשתיות ואוטומציה מהגיטהאב האישי שלי.",
        projects: [
          {
            image: img_5,
            projectName: "הפורטפוליו שלי – Pipeline מלא",
            projectDesc: "יישום הדגמה ופיתוח הפורטפוליו הזה עצמו דרך צינור CI/CD מלא: בנייה ב-GitHub Actions, דחיפת אימג'ים ל-DockerHub ופריסה אוטומטית מלאה לענן בשרתי GitHub Pages.",
            footerLink: [{ name: "הצג ב-GitHub", url: "https://github.com/CostaEp/my-portfolio" }, { name: "הצג אתר לייב", url: "https://costaep.github.io/my-portfolio/" }]
          },
          {
            image: img_6,
            projectName: "פרויקט DevOps מושלם ב-AWS",
            projectDesc: "ארכיטקטורה ומימוש למערכת מקצה לקצה לעולם המיקרו-שירותים. יישום פלטפורמות קוברנטיס ואוטומציית תשתיות מקוד למסירה דרך טרהפורם וכלי ניטור מתקדמים.",
            footerLink: [{ name: "הצג ב-GitHub", url: "https://github.com/CostaEp/Full_DevOps_project" }]
          },
          {
            image: img_7,
            projectName: "שרת CI/CD מבוסס Jenkins",
            projectDesc: "יצירת מסלול בנייה אוטומטי לאספקת שרות תוכנה למערכות פרודקשן דרך Docker ו-Java על בסיס שרתי לינוקס פנימיים.",
            footerLink: [{ name: "הצג ב-GitHub", url: "https://github.com/CostaEp/jenkins_redhat_server" }]
          },
          {
            image: img_8,
            projectName: "קורות חיים כאוטומציית קוד (YAML)",
            projectDesc: "קורות חיים המנוהלים כקוד: דאטה הנשמר בפורמט YAML ומומר אוטומטית למסמכי PDF חכמים בכל שינוי על בסיס תהליכי אוטומציה בפייתון.",
            footerLink: [{ name: "הצג ב-GitHub", url: "https://github.com/CostaEp/my-resume" }]
          }
        ],
        display: true
      },
      achievementSection: {
        title: emoji("הישגים והסמכות 🏆"),
        subtitle: "אבני דרך מקצועיים, תעודות ולמידה טכנולוגית רציפה למצוינות בפיתוח.",
        achievementsCards: [
          {
            title: "מסע מוסמך AWS",
            subtitle: "למידה מתמשכת בעולם תשתיות הענן בבניית ארכיטקטורות מקצועיות מבוססות שירותי הרשת של אמזון.",
            image: img_10,
            imageAlt: "AWS Logo",
            footerLink: [{ name: "מידע על קורסי AWS", url: "https://aws.amazon.com/certification/" }]
          },
          {
            title: "הנדסת דבאופס – מכללת Real Time",
            subtitle: "סיום מסלול מקיף לפלטפורמות תשתיות, ניטור, אבטחה וכלי פיתוח (CD/CI/CD).",
            image: img_11,
            imageAlt: "Real Time College Logo",
            footerLink: [{ name: "פירוט התוכנית", url: "https://rt-ed.co.il/program/devops/" }]
          },
          {
            title: "נטקראפט אקדמי - לימודי Full-Stack",
            subtitle: "הסמכה לפיתוח מערכות אינטרנט שלמות המבוססות React, Node ומערכות נתונים.",
            image: img_12,
            imageAlt: "Netcraft Academy Logo",
            footerLink: [{ name: "ביקור באתר המכללה", url: "https://www.netcraftacademy.co.il/" }]
          }
        ],
        display: true
      },
      blogSection: { title: "מאמרים ובלוגים", subtitle: "סיכומי עומק ומדריכים על תשתיות ואוטומטיזציה (ייחשף בקרוב)", displayMediumBlogs: "false", blogs: [], display: true },
      talkSection: { title: "הרצאות וכלים", subtitle: emoji("הרצאות פנימיות ושיתופי פעולה יתעדכנו כאן בעתיד 🎤"), talks: [], display: true },
      podcastSection: { title: emoji("פודקאסטים 🎙️"), subtitle: "מתכנן פרקים עתידיים על עולם הדבאופס, אתגרי פיתוח אמיתיים וארכיטקטורת תוכנה מנצחת.", podcast: [], display: true },
      resumeSection: { title: "הורדת קורות חיים", subtitle: "הורידו את קורות החיים שלי למבט כולל על הניסיון המסלרי והמקצועי שלי ב-DevOps.", display: true },
      contactInfo: { title: "צור קשר", subtitle: "תמיד פתוח לבחון הזדמנויות חדשות בעולם תשתיות התוכנה ואוטומציה. מוזמנים ליצור קשר ונבנה משהו אדיר ביחד!", number: "+972-52-5381655", email_address: "Costa84@gmail.com" },
      twitterDetails: { userName: "", display: false },
      isHireable: false
    }
  };

  const getPortfolioData = () => {
    return data[language] || data.en;
  };

  return (
    <PortfolioContext.Provider value={getPortfolioData()}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};
