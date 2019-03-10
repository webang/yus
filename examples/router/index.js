import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/Welcome'),
      meta: {
        title: 'ymu'
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
      path: '/Card',
      name: 'Card',
      component: () => import('../../packages/card/demo'),
      meta: {
        title: 'Card'
      }
    },
    {
      path: '/Calender',
      name: 'Calender',
      component: () => import('../../packages/calender/demo'),
      meta: {
        title: 'Calender 日历'
      }
    },
    {
      path: '/Clocker',
      name: 'Clocker',
      component: () => import('../../packages/clocker/demo'),
      meta: {
        title: 'Clocker 时钟'
      }
    },
    {
      path: '/CountdownNum',
      name: 'CountdownNum',
      component: () => import('../../packages/countdown-num/demo'),
      meta: {
        title: 'CountdownNum 计时器'
      }
    },
    {
      path: '/CountdownDate',
      name: 'CountdownDate',
      component: () => import('../../packages/countdown-date/demo'),
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
      component: () => import('../../packages/collapse/demo'),
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
      component: () => import('../../packages/radio/demo'),
      meta: {
        title: 'Radio 单选框'
      }
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: () => import('../../packages/slider/demo'),
      meta: {
        title: 'Slider 滑块'
      }
    },
    {
      path: '/RegionSlider',
      name: 'RegionSlider',
      component: () => import('../../packages/region-slider/demo'),
      meta: {
        title: 'RegionSlider 区间滑块'
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
      component: () => import('../../packages/checkbox/demo'),
      meta: {
        title: 'Checkbox 复选框'
      }
    },
    {
      path: '/Field',
      name: 'Field',
      component: () => import('../../packages/field/demo'),
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
      component: () => import('../../packages/toast/demo'),
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
      component: () => import('../../packages/flow/demo'),
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
      component: () => import('../../packages/cell/demo'),
      meta: {
        title: 'Cell 单元格'
      }
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: () => import('../../packages/switch/demo'),
      meta: {
        title: 'Switch 开关'
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
    },
    {
      path: '/segment',
      name: 'segment',
      component: () => import('../../packages/segment/demo'),
      meta: {
        title: 'Segment 分段器'
      }
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: () => import('../../packages/lazyload/demo'),
      meta: {
        title: 'Lazyload 懒加载'
      }
    }
  ]
});
