const camelizeReg = /-(\w)/g
const camelize = (str) => {
  return str
    .replace(camelizeReg, (_, c) => c.toUpperCase())
    .replace(str.charAt(0), str.charAt(0).toUpperCase())
}

const routerList = [
  {
    name: 'button',
    title: '按钮'
  },
  {
    name: 'actionsheet',
    title: '上拉菜单'
  },
  {
    name: 'alert',
    title: '弹窗'
  },
  {
    name: 'backdrop',
    title: '幕布'
  },
  {
    name: 'backtop',
    title: '返回顶部'
  },
  {
    name: 'badge',
    title: '徽章'
  },
  {
    name: 'button-tab',
    title: '按钮组'
  },
  {
    name: 'button-tabs',
    title: '按钮组'
  },
  {
    name: 'calender',
    title: '日历'
  },
  {
    name: 'card',
    title: '卡片'
  },
  {
    name: 'cell',
    title: '单元格'
  },
  {
    name: 'cell-group',
    title: '单元格组'
  },
  {
    name: 'checkbox',
    title: '复选框'
  },
  {
    name: 'checkbox-group',
    title: '复选框组'
  },
  {
    name: 'clocker',
    title: '时钟'
  },
  {
    name: 'collapse',
    title: '折叠面板'
  },
  {
    name: 'collapse-item',
    title: '折叠面板'
  },
  {
    name: 'confirm',
    title: '确认框'
  },
  {
    name: 'countdown-date',
    title: '日期倒计时'
  },
  {
    name: 'countdown-num',
    title: '计数倒计时'
  },
  {
    name: 'field',
    title: '输入框'
  },
  {
    name: 'flow',
    title: '步骤条'
  },
  // {
  //   name: 'flow-item'
  // },
  {
    name: 'icon',
    title: '图标'
  },
  // {
  //   name: 'lazyload'
  // },
  {
    name: 'marquee',
    title: '滚动栏'
  },
  // {
  //   name: 'marquee-item'
  // },
  {
    name: 'navbar',
    title: '导航栏'
  },
  {
    name: 'notice-bar',
    title: '通告栏'
  },
  {
    name: 'popup',
    title: '弹出层'
  },
  {
    name: 'progress',
    title: '进度条'
  },
  {
    name: 'radio',
    title: '单选框'
  },
  {
    name: 'radio-group',
    title: '单选框组'
  },
  {
    name: 'region-slider',
    title: '双向滑块'
  },
  {
    name: 'slider',
    title: '滑块'
  },
  {
    name: 'switch',
    title: '开关'
  },
  // {
  //   name: 'tab'
  // },
  {
    name: 'tabbar',
    title: '标签栏'
  },
  // {
  //   name: 'tabbar-item'
  // },
  // {
  //   name: 'tabs'
  // },
  {
    name: 'toast',
    title: '轻提示'
  }
  // {
  //   name: 'toolbar'
  // }
]

const markdownRoutes = [
  {
    name: 'intro',
    title: '介绍'
  },
  {
    name: 'quickstart',
    title: '快速上手'
  },
  {
    name: 'changelog',
    title: '更新日志'
  },
  {
    name: 'theme',
    title: '定制主题'
  },
  {
    name: 'contribution',
    title: '开发指南'
  },
  {
    name: 'locale',
    title: '国际化'
  }
];

markdownRoutes.forEach(element => {
  element.title = `${element.title} camelize(element.name)`;
});

routerList.forEach(element => {
  element.title = `${element.title} camelize(element.name)`;
});

export default routerList
