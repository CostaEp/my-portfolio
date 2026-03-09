const fs = require('fs');
const path = require('path');

const files = [
  'src/portfolio.jsx',
  'src/containers/contact/Contact.jsx',
  'src/containers/skillProgress/skillProgress.jsx',
  'src/containers/greeting/Greeting.jsx',
  'src/containers/skills/Skills.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract all require statements looking like: require('./assets/something.png')
  const requireRegex = /companylogo:\s*require\((['"])(.*?)\1\)/g;
  const imageRegex = /image:\s*require\((['"])(.*?)\1\)/g;
  const genericRequireRegex = /require\((['"])(.*?)\1\)/g;
  
  const imports = [];
  let importCounter = 0;
  
  // Replace and gather imports
  content = content.replace(genericRequireRegex, (match, quote, p) => {
    // skip if inside a comment
    const importName = `img_${importCounter++}`;
    imports.push(`import ${importName} from "${p}";`);
    return importName;
  });
  
  if (imports.length > 0) {
    content = imports.join('\n') + '\n' + content;
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
