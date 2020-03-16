import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/home/Main.vue';
import User from '../views/user/index.vue';
import Administrator from '../views/administrator/index.vue';

Vue.use(VueRouter);
// eslint-disable-next-line no-sequences
// const user =

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      title: '首页',
      info: '',
    },
    children: [
      {
        path: '/users',
        name: 'user',
        component: User,
      },
      {
        path: '/administrators',
        name: 'administrator',
        component: Administrator,
      },
    ],
  },

];

const router = new VueRouter({
  routes,
});

export default router;
