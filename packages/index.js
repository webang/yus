// Components
import Actionsheet from './actionsheet'
import Alert from './alert'
import Backdrop from './backdrop'
import Backtop from './backtop'
import Button from './button'
import Cell from './cell'
import CellGroup from './cell-group'
import Checkbox from './checkbox'
import Confirm from './confirm'
import Dialog from './dialog'
import Field from './field'
import Flow from './flow'
import FlowItem from './flow-item'
import Marquee from './marquee'
import MarqueeItem from './marquee-item'
import NavBar from './navbar'
import NoticeBar from './notice-bar'
import Popup from './popup'
import Progress from './progress'
import Radio from './radio'
import RegionSlider from './region-slider'
import Slider from './slider'
import Switch from './switch'
import Tabbar from './tabbar'
import TabbarItem from './tabbar-item'
import Icon from './icon'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import RadioGroup from './radio-group'
import CheckboxGroup from './checkbox-group'
import Badge from './badge'
import Calender from './calender'
import Clocker from './clocker'
import CountdownNum from './countdown-num'
import CountdownDate from './countdown-date'
import ButtonTabs from './button-tabs/index'
import ButtonTab from './button-tab/index'
import Card from './card'
import Tabs from './tabs'
import Tab from './tab'
import Clickable from './clickable'
import Loading from './loading'

// Plugins
import Toast from './toast'

const components = [
  Actionsheet,
  Alert,
  Backdrop,
  Backtop,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  Confirm,
  Collapse,
  CollapseItem,
  Dialog,
  Field,
  Flow,
  FlowItem,
  Marquee,
  MarqueeItem,
  NavBar,
  NoticeBar,
  Popup,
  Progress,
  Radio,
  RegionSlider,
  Slider,
  Switch,
  Tabbar,
  TabbarItem,
  Icon,
  RadioGroup,
  CheckboxGroup,
  Badge,
  Calender,
  Clocker,
  CountdownNum,
  CountdownDate,
  Toast,
  ButtonTabs,
  ButtonTab,
  Card,
  Tabs,
  Tab,
  Clickable,
  Loading
]

const version = `1.0.0`

const install = (Vue) => {
  components.forEach(component => {
    console.log(component)
    if (component.props) {
      Vue.use(component)
    }
  })
}

export {
  Actionsheet,
  Alert,
  Backdrop,
  Backtop,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  Confirm,
  Collapse,
  CollapseItem,
  Dialog,
  Field,
  Flow,
  FlowItem,
  Marquee,
  MarqueeItem,
  NavBar,
  NoticeBar,
  Popup,
  Progress,
  Radio,
  RegionSlider,
  Slider,
  Switch,
  Tabbar,
  TabbarItem,
  Icon,
  RadioGroup,
  CheckboxGroup,
  Badge,
  Calender,
  Clocker,
  CountdownNum,
  CountdownDate,
  Toast,
  ButtonTabs,
  ButtonTab,
  Card,
  Tabs,
  Tab,
  Clickable,
  Loading
}

export default {
  install,
  version
};
