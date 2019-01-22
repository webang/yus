const fs = require('fs-extra')
const path = require('path')
const esDir = path.join(__dirname, '../es')
const srcDir = path.join(__dirname, '../packages')

// clear assets
fs.emptyDirSync(esDir)

// copy file
fs.copySync(srcDir, esDir)
