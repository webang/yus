const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../src/iconfont.svg');

fs.readFile(svgDir, 'utf8', (err, data) => {

  const reg = /glyph-name=".*" unicode=/g
  const matchRet = data.match(reg);

  let list = [];
  matchRet.forEach(element => {
    list.push(element.replace(/ unicode=/g, '').replace(/"/g, '').replace(/glyph-name=/g, ''));
  })

  let svgJsonList = [];
  list.forEach(element => {
    svgJsonList.push(`"${element}"`)
  })
  let svgJsonStr = `[${svgJsonList.join(',')}]`

  fs.writeFile(path.resolve(__dirname, '../lib/data.json'), svgJsonStr, (err, data) => {
    console.log(svgJsonStr);
  })
})