/**
 * @documention 编译vue组件
 * @note 部分代码参考有赞
 */
const fs = require('fs-extra');
const join = require('path').join;
const babel = require('@babel/core');

const esDir = join(__dirname, '../es');
const libDir = join(__dirname, '../lib');
const srcDir = join(__dirname, '../packages');

const babelConfigFile = join(__dirname, '../babel.config.js')

const scriptRegExp = /\.(js)$/;
const isDir = dir => fs.lstatSync(dir).isDirectory();
const isCode = path => !/(demo|test|\.md)$/.test(path);
const isScript = path => scriptRegExp.test(path);

function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }

    // compile js
    if (isScript(file)) {
      const { code } = babel.transformFileSync(filePath, {
        configFile: babelConfigFile
      });
      fs.removeSync(filePath);
      fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
    }
  });
}

// clear dir
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// compile es dir
fs.copySync(srcDir, esDir);
compile(esDir);

// compile lib dir
process.env.BABEL_MODULE = 'commonjs';
fs.copySync(srcDir, libDir);
compile(libDir);
