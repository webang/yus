const fs = require('fs');
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  const options = loaderUtils.getOptions(this) || {};

  if (!options.slot || !options.slotContent) {
    content = content.replace(options.slot, options.slotContent);
  }

  console.log(content);

  return content;
 }
