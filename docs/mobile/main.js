import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import { install } from '../../packages/index';
import menu from '../menu-component';
import '../../packages/index.less';

const uppercamelize = require('uppercamelcase');

Vue.use(Router);
install(Vue);

const routes = [];

menu.forEach(element => {
  if (element.list) {
    element.list.forEach(element => {
      routes.push({
        path: `/${element.name}`,
        name: element.name,
        component: () => import(`../../packages/${element.name}/demo`),
        meta: {
          title: `${uppercamelize(element.name)} ${element.cName}`
        }
      });
    });
  }
});

routes.push({
  path: '/',
  name: 'welcome',
  component: () => import('./views/welcome')
});

const router = new Router({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
