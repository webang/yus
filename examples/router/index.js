import Vue from 'vue'
import Router from 'vue-router'

const Welcome = () => import('../views/Welcome')
const Button = () => import('../views/Button')
const Actionsheet = () => import('../views/Actionsheet')
const Alert = () => import('../views/Alert')
const Navbar = () => import('../views/Navbar')
const Cell = () => import('../views/Cell')
const Switch = () => import('../views/Switch')
const Progress = () => import('../views/Progress')
const Flow = () => import('../views/Flow')
const Tabbar = () => import('../views/Tabbar')
const Toast = () => import('../views/Toast')
const Marquee = () => import('../views/Marquee')
const NoticeBar = () => import('../views/NoticeBar')
const Field = () => import('../views/Field')
const Popup = () => import('../views/Popup')
const Checkbox = () => import('../views/Checkbox')
const Slider = () => import('../views/Slider')
const RegionSlider = () => import('../views/RegionSlider')
const Radio = () => import('../views/Radio')
const Confirm = () => import('../views/Confirm')
const Backtop = () => import('../views/Backtop')
const Collapse = () => import('../views/Collapse')
const Icon = () => import('../views/Icon')
const Badge = () => import('../views/Badge')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
        title: 'ym'
      }
    },
    {
      path: '/Canlender',
      name: 'Canlender',
      component: () => import('../views/Canlender.vue'),
      meta: {
        title: 'Canlender 日历'
      }
    },
    {
      path: '/Badge',
      name: 'Badge',
      component: Badge,
      meta: {
        title: 'Badge 徽章'
      }
    },
    {
      path: '/Icon',
      name: 'Icon',
      component: Icon,
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
      component: Backtop,
      meta: {
        title: 'Backtop 返回顶部'
      }
    },
    {
      path: '/Confirm',
      name: 'Confirm',
      component: Confirm,
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
      component: Popup,
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
      component: NoticeBar,
      meta: {
        title: 'NoticeBar 通告栏'
      }
    },
    {
      path: '/Marquee',
      name: 'Marquee',
      component: Marquee,
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
      component: Tabbar,
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
      component: Progress,
      meta: {
        title: 'Progress 进度条'
      }
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button,
      meta: {
        title: 'Button 按钮'
      }
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar,
      meta: {
        title: 'Navbar 导航'
      }
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet,
      meta: {
        title: 'Actionsheet 上拉菜单'
      }
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert,
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
    }
  ]
});
