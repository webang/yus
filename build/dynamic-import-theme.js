const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function(content) {
  const options = loaderUtils.getOptions(this) || {};
  if (!options.matchFile || !options.appendVariables) {
    return content;
  }
  content = content.replace(
    options.matchFile,
    options.matchFile + `@import '${options.appendVariables}';\n`
  );
  const isFileExist = fs.existsSync(options.appendVariables);
  if (isFileExist && content.indexOf(options.matchFile) !== -1) {
    content = content.replace(
      options.matchFile,
      options.matchFile + `@import '${options.appendVariables}';\n`
    );
  }
  return content;
};
