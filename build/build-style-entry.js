const fs = require('fs-extra');
const path = require('path');
const packagesDir = path.join(__dirname, '../packages');
const files = fs.readdirSync(packagesDir);

let content = '';

files.forEach(element => {
  if (element && element.indexOf('.') === -1) {
    content += `@import './${element}/index.scss';\n`;
  }
});

fs.outputFileSync(`${packagesDir}/index.scss`, content);
