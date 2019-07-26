/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import ActionSheet from './action-sheet';
import Backdrop from './backdrop';
import Backtop from './backtop';
import Button from './button';
import Card from './card';
import Cell from './cell';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Dialog from './dialog';
import Flow from './flow';
import FlowItem from './flow-item';
import Icon from './icon';
import Marquee from './marquee';
import MarqueeItem from './marquee-item';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import Spinner from './spinner';
import Switch from './switch';
import Toast from './toast';

const version = '1.0.3';
const components = [
  ActionSheet,
  Backdrop,
  Backtop,
  Button,
  Card,
  Cell,
  Collapse,
  CollapseItem,
  Dialog,
  Flow,
  FlowItem,
  Icon,
  Marquee,
  MarqueeItem,
  NavBar,
  NoticeBar,
  Spinner,
  Switch,
  Toast
];

const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  install,
  version,
  ActionSheet,
  Backdrop,
  Backtop,
  Button,
  Card,
  Cell,
  Collapse,
  CollapseItem,
  Dialog,
  Flow,
  FlowItem,
  Icon,
  Marquee,
  MarqueeItem,
  NavBar,
  NoticeBar,
  Spinner,
  Switch,
  Toast
};

export default {
  install,
  version
};
