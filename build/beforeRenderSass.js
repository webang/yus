const path = require("path");

function beforeRenderSass (renderOption) {
  // const str = `@import '../../../theme/vars.scss';\n`;
  // const themeFile = path.resolve(__dirname, '../examples/src/theme/custome.scss');
  // const append = `@import '${themeFile}';\n`;
  // renderOption.data = renderOption.data.replace(str, `${str}${append}`);
}


module.exports = beforeRenderSass