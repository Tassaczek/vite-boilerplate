import helloWorld from '../components/HelloWorld.vue';
import about from '../components/About.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: helloWorld,
    name: 'home',
  },
  {
    path: '/about',
    component: about,
    name: 'about',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
