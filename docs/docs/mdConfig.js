export default [
  {
    path: `/introduction`,
    name: 'introduction',
    cName: '介绍',
    component: () => import('./markdown/introduction.md')
  },
  {
    path: `/quickstart`,
    name: 'quickstart',
    cName: '快速上手',
    component: () => import('./markdown/quickstart.md')
  },
  {
    path: `/theme`,
    name: 'theme',
    cName: '定制主题',
    component: () => import('./markdown/theme.md')
  },
  {
    path: `/style-guild`,
    name: 'style-guild',
    cName: '风格指南',
    component: () => import('./markdown/style-guild.md')
  },
  {
    path: `/changelog`,
    name: 'changelog',
    cName: '更新日志',
    component: () => import('./markdown/changelog.md')
  }
];
