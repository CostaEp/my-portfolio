const fs = require('fs');
const path = require('path');

const files = [
  "src/components/socialMedia/SocialMedia.jsx",
  "src/components/softwareSkills/SoftwareSkill.jsx",
  "src/components/githubProfileCard/GithubProfileCard.jsx",
  "src/components/header/Header.jsx",
  "src/containers/workExperience/WorkExperience.jsx",
  "src/containers/blogs/Blogs.jsx",
  "src/containers/contact/Contact.jsx",
  "src/containers/achievement/Achievement.jsx",
  "src/containers/skillProgress/skillProgress.jsx",
  "src/containers/greeting/Greeting.jsx",
  "src/containers/projects/Projects.jsx",
  "src/containers/education/Education.jsx",
  "src/containers/talks/Talks.jsx",
  "src/containers/splashScreen/SplashScreen.jsx",
  "src/containers/profile/Profile.jsx",
  "src/containers/Main.jsx",
  "src/containers/podcast/Podcast.jsx",
  "src/containers/skills/Skills.jsx",
  "src/containers/StartupProjects/StartupProject.jsx",
  "src/containers/twitter-embed/twitter.jsx"
];

files.forEach(file => {
  const fullPath = path.resolve(__dirname, file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');

  // Regex to match the portfolio import
  // Example: import {greeting, workExperiences} from "../../portfolio";
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"](\.\.\/\.\.\/|\.\.\/|\.\.\/\.\.\/\.\.\/)portfolio['"];?/g;
  
  let match = importRegex.exec(content);
  if (!match) return;

  const vars = match[1].trim();
  const relativePathPrefix = match[2]; 

  // Remove the old import
  content = content.replace(importRegex, '');

  // Add the new import for usePortfolio hook
  const newImport = `import { usePortfolio } from "${relativePathPrefix}contexts/PortfolioContext";\n`;
  
  // Insert new import after the last import statement or at top
  const lastImportIndex = content.lastIndexOf("import ");
  if (lastImportIndex !== -1) {
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + newImport + content.slice(endOfLastImport + 1);
  } else {
    content = newImport + content;
  }

  // Find the function component declaration and inject hook call
  // Matches `export default function Component(...) {` or `const Component = (...) => {`
  const functionRegex = /(?:export\s+default\s+)?(?:function\s+\w+\s*\([^)]*\)\s*{|const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{)/;
  
  const fnMatch = functionRegex.exec(content);
  if (fnMatch) {
    const fnDecl = fnMatch[0];
    const hookInject = `\n  const { ${vars} } = usePortfolio();`;
    content = content.replace(fnDecl, fnDecl + hookInject);
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Refactored ${file}`);
});
