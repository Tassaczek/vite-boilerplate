import helloWorld from '../components/HelloWorld.vue';
import aboutUs from '../components/AboutUs.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: helloWorld,
		name: 'home',
	},
	{
		path: '/about',
		component: aboutUs,
		name: 'about',
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});

export default router;
