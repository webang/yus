const fs = require('fs');
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  const options = loaderUtils.getOptions(this) || {};

  if (content.indexOf('// $YMU_CUSTOM_VARS') !== -1) {
    const str = `@import '${options.customVars}';`.replace(/\\/g, '/');
    content = content.replace('// $YMU_CUSTOM_VARS', str);
  }
  return content;
}
