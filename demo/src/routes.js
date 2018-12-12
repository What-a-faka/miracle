import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default [
  {
    path: '/',
    component: () => import('./App.vue')
  },
  {
    path: '/window',
    component: () => import('./pages/windowTest.vue')
  }
];
