/**
 * @documention 构建release版本
 * @note 部分代码参考有赞
 */
const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;
const tasks = [
  // 'npm run lint',
  'npm run build:entry',
  'node build/build-components.js --color',
  'node build/build-style.js',
  'node build/build-style-entry.js',
  // 'node build/build-fonts.js',
  'npm run build:doc',
  'cross-env NODE_ENV=production webpack -p --color --config build/webpack.build.js'
];

tasks.forEach(task => {
  signale.start(task);

  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  shell.exec(`${task} --silent`);
  interactive.success(task);
});
