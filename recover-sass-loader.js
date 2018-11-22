const fs = require('fs');
const path = require('path');
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  // const callback = this.async();
  const options = loaderUtils.getOptions(this) || {};
  const matchStr = "@import '../../../theme/vars.scss';\n";

  if (options.appendVars) {
    content = content.replace(matchStr, matchStr + `@import '${options.appendVars}';\n`);
  }
  console.log(content + '\n');
  return content;
 }