const fs = require('fs');
const path = require('path');
const purgeCache = require('./utils').purgeCache;

module.exports = {
  /**
   * 获取所有主题
   */
  getThemeList() {
    return fs
      .readdirSync(path.resolve(__dirname, '../theme'))
      .filter(element => element.indexOf('scss') !== -1);
  },

  /**
   * 获取主题详情
   * @param {*} themeId
   */
  getThemeDetails(themeId) {
    const config = require(`../theme/${themeId}.json`);
    purgeCache(`../theme/${themeId}.json`);
    return config;
  },

  /**
   * 保存主题
   * @param {*} themeId
   * @param {*} content
   */
  saveTheme(themeId, content) {
    const obj = JSON.parse(content);
    let scssContent = '';
    obj.forEach(element => {
      scssContent += `${element.key}: ${element.value};\n`;
    });
    fs.writeFileSync(path.join(__dirname, `../theme/${themeId}.json`), content);
    fs.writeFileSync(path.join(__dirname, `../theme/${themeId}.scss`), scssContent);
  }
};
