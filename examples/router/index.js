import Vue from 'vue'
import Router from 'vue-router'

const Welcome = () => import('../views/Welcome')
const Cell = () => import('../../packages/cell/demo')
const Switch = () => import('../views/Switch')
const Flow = () => import('../views/Flow')
const Toast = () => import('../views/Toast')
const Field = () => import('../views/Field')
const Checkbox = () => import('../views/Checkbox')
const Slider = () => import('../views/Slider')
const RegionSlider = () => import('../views/RegionSlider')
const Radio = () => import('../views/Radio')
const Collapse = () => import('../views/Collapse')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
        title: 'ymu'
      }
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: () => import('../views/Tabs.vue'),
      meta: {
        title: 'Tabs'
      }
    },
    {
      path: '/Card',
      name: 'Card',
      component: () => import('../../packages/card/demo'),
      meta: {
        title: 'Card'
      }
    },
    {
      path: '/ButtonTab',
      name: 'ButtonTab',
      component: () => import('../views/ButtonTab.vue'),
      meta: {
        title: 'ButtonTab 按钮组'
      }
    },
    {
      path: '/Calender',
      name: 'Calender',
      component: () => import('../views/Calender.vue'),
      meta: {
        title: 'Calender 日历'
      }
    },
    {
      path: '/Clocker',
      name: 'Clocker',
      component: () => import('../views/Clocker.vue'),
      meta: {
        title: 'Clocker 时钟'
      }
    },
    {
      path: '/CountdownNum',
      name: 'CountdownNum',
      component: () => import('../views/CountdownNum.vue'),
      meta: {
        title: 'CountdownNum 计时器'
      }
    },
    {
      path: '/CountdownDate',
      name: 'CountdownDate',
      component: () => import('../views/CountdownDate.vue'),
      meta: {
        title: 'CountdownDate 日期计时器'
      }
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: () => import('../../packages/badge/demo'),
      meta: {
        title: 'Badge 徽章'
      }
    },
    {
      path: '/Icon',
      name: 'Icon',
      component: () => import('../../packages/icon/demo'),
      meta: {
        title: 'Icon 内置图标'
      }
    },
    {
      path: '/Collapse',
      name: 'Collapse',
      component: Collapse,
      meta: {
        title: 'Collapse 折叠面板'
      }
    },
    {
      path: '/Backtop',
      name: 'Backtop',
      component: () => import('../../packages/backtop/demo'),
      meta: {
        title: 'Backtop 返回顶部'
      }
    },
    {
      path: '/Backdrop',
      name: 'Backdrop',
      component: () => import('../../packages/backdrop/demo'),
      meta: {
        title: 'Backdrop 幕布'
      }
    },
    {
      path: '/Confirm',
      name: 'Confirm',
      component: () => import('../../packages/confirm/demo'),
      meta: {
        title: 'Confirm 确认框'
      }
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio,
      meta: {
        title: 'Radio 单选框'
      }
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider,
      meta: {
        title: 'Slider 滑块'
      }
    },
    {
      path: '/RegionSlider',
      name: 'RegionSlider',
      component: RegionSlider,
      meta: {
        title: 'RegionSlider 双向滑块'
      }
    },
    {
      path: '/Popup',
      name: 'Popup',
      component: () => import('../../packages/popup/demo'),
      meta: {
        title: 'Popup 弹出层'
      }
    },
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: Checkbox,
      meta: {
        title: 'Checkbox 复选框'
      }
    },
    {
      path: '/Field',
      name: 'Field',
      component: Field,
      meta: {
        title: 'Field 输入框'
      }
    },
    {
      path: '/NoticeBar',
      name: 'NoticeBar',
      component: () => import('../../packages/notice-bar/demo'),
      meta: {
        title: 'NoticeBar 通告栏'
      }
    },
    {
      path: '/Marquee',
      name: 'Marquee',
      component: () => import('../../packages/marquee/demo'),
      meta: {
        title: 'Marquee 跑马灯'
      }
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast,
      meta: {
        title: 'Toast 轻提示'
      }
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: () => import('../../packages/tabbar/demo'),
      meta: {
        title: 'Tabbar 标签栏'
      }
    },
    {
      path: '/Flow',
      name: 'Flow',
      component: Flow,
      meta: {
        title: 'Flow 步骤条'
      }
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: () => import('../../packages/progress/demo'),
      meta: {
        title: 'Progress 进度条'
      }
    },
    {
      path: '/Button',
      name: 'Button',
      component: () => import('../../packages/button/demo'),
      meta: {
        title: 'Button 按钮'
      }
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: () => import('../../packages/navbar/demo'),
      meta: {
        title: 'Navbar 导航'
      }
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: () => import('../../packages/actionsheet/demo'),
      meta: {
        title: 'Actionsheet 上拉菜单'
      }
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: () => import('../../packages/alert/demo'),
      meta: {
        title: 'Alert 提示窗'
      }
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: Cell,
      meta: {
        title: 'Cell 单元格'
      }
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch,
      meta: {
        title: 'Switch 开关'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test'),
      meta: {
        title: '测试页面'
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../../packages/loading/demo'),
      meta: {
        title: 'Loading 加载'
      }
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: () => import('../../packages/spinner/demo'),
      meta: {
        title: 'spinner 加载动画'
      }
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../../packages/tab/demo'),
      meta: {
        title: 'Tab 标签页'
      }
    }
  ]
});
