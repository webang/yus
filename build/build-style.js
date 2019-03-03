const fs = require('fs-extra');
const path = require('path');
const libDir = path.join(__dirname, '../lib');
const files = fs.readdirSync(libDir);

files.forEach(element => {
  const dir = path.resolve(libDir, `${element}/style/index.js`);
  if (element && element.indexOf('.') === -1) {
    fs.outputFileSync(dir, `import('../index.scss')`);
  }
});