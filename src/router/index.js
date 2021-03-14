import { createRouter, createWebHistory } from 'vue-router'

// 1.安装插件
// Vue.use(VueRouter)

// 2.创建router
const routes = [
	{
	path:'',
	redirect:'/home',
	component: () => import('views/home/home.vue')
	},
	{
	path:'/home',
	name:'home',
	component: () => import('views/home/home.vue')
	},
	{
	path:'/category',
	name:'category',
	component: () => import('views/category/category.vue')
	},
	{
	path:'/cart',
	name:'cart',
	component: () => import('views/cart/cart.vue')
	},
	{
	path:'/profile',
	name:'profile',
	component: () => import('views/profile/profile.vue')
	}
];
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// 3.导出VueRouter
export default router;
