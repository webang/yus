export default {
  introduce: {
    name: 'introduce',
    title: '介绍',
    path: '/introduce',
    component: () => import('./markdown/introduce.md')
  },
  quickstart: {
    name: 'quickstart',
    title: '快速上手',
    path: '/quickstart',
    component: () => import('./markdown/quickstart.md')
  },
  changelog: {
    name: 'changelog',
    title: '更新日志',
    path: '/changelog',
    component: () => import('./markdown/changelog.md')
  },
  theme: {
    name: 'theme',
    title: '定制主题',
    path: '/theme',
    component: () => import('./markdown/theme.md')
  },
  contribution: {
    name: 'contribution',
    title: '参与贡献',
    path: '/contribution',
    component: () => import('./markdown/contribution.md')    
  },
  'style-guide': {
    name: 'style-guide',
    title: '风格指南',
    path: '/style-guide',
    component: () => import('./markdown/style-guide.md')        
  },
  'locale': {
    name: 'locale',
    title: '风格指南',
    path: '/locale',
    component: () => import('./markdown/locale.md')
  }
}