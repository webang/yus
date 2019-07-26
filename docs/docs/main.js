import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import { install } from '../../packages/index';
import menuConfig from '../menu-component';
import mdConfig from './mdConfig';
import './main.less';

Vue.use(Router);
install(Vue);

const routes = [];

menuConfig.forEach((element) => {
  element.list.forEach((element) => {
    routes.push({
      path: `/${element.name}`,
      name: element.name,
      component: () => import(`../../packages/${element.name}/zh-CN.md`)
    });
  });
});

mdConfig.forEach(element => {
  routes.push({
    path: `/${element.name}`,
    name: element.name,
    component: element.component
  });
});

const router = new Router({
  routes,
  linkActiveClass: 'yus-doc-route-active'
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
