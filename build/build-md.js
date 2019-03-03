const fs = require('fs-extra');
const path = require('path');
const libDir = path.join(__dirname, '../packages');
const files = fs.readdirSync(libDir);

files.forEach(element => {
  const dir = path.resolve(libDir, `${element}/zh-CN.md`);
  const asset = path.resolve(libDir, `${element}/README.md`)
  if (element && element.indexOf('.') === -1) {
    fs.outputFileSync(dir, fs.readFileSync(asset));
  }
});