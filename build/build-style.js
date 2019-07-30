/**
 * @documention 编译css文件
 * @note 部分代码参考有赞
 */
const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const csso = require('csso');
const less = require('less');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
// const sass = require('node-sass');
// async function compileSass(codes, paths) {
//   const outputs = await Promise.all(
//     codes.map((source, index) => {
//       const params = {
//         file: paths[index],
//         outputStyle: 'expanded',
//         includePaths: [path.resolve(__dirname, 'node_modules')]
//       };
//       return sass.renderSync(params);
//     })
//   );
//   return outputs.map(item => item.css);
// }

async function compileLess(lessCodes, paths) {
  const outputs = await Promise.all(
    lessCodes.map((source, index) =>
      less.render(source, {
        paths: [path.resolve(__dirname, 'node_modules')],
        filename: paths[index]
      })
    )
  );
  return outputs.map(item => item.css);
}

async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest(output, paths) {
  await Promise.all(
    output.map((css, index) => fs.writeFile(paths[index].replace('.less', '.css'), css))
  );
}

// compile component css
async function compile() {
  let codes;
  const paths = await glob(['./es/**/*.less', './lib/**/*.less'], { absolute: true });

  codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')));
  codes = await compileLess(codes, paths);
  codes = await compilePostcss(codes, paths);
  codes = await compileCsso(codes);

  await dest(codes, paths);
  await dest(codes, paths);
}

compile();
