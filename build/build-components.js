const fs = require('fs-extra');
const path = require('path');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../packages');

// clear dir
fs.emptyDirSync(libDir);

// copy file
fs.copySync(srcDir, libDir);
