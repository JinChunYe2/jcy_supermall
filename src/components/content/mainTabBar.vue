<template>
    <tab-bar>
		<tab-bar-item link = "/home" itemTextColor = "blue">
			<template v-slot:item-icon><img src="~assets/image/tabbar/home.svg" alt="2"></template>
			<template v-slot:item-icon-active><img src="~assets/image/tabbar/home_active.svg" alt="2"></template>
			<template v-slot:item-text><div>首页</div></template>
		</tab-bar-item>
		<tab-bar-item link="/category">
			<template v-slot:item-icon><img src="~assets/image/tabbar/category.svg" alt="2"></template>
			<template v-slot:item-icon-active><img src="~assets/image/tabbar/category_active.svg" alt="2"></template>
			<template v-slot:item-text><div>分类</div></template>
		</tab-bar-item>
		<tab-bar-item link="/cart">
			<template v-slot:item-icon><img src="~assets/image/tabbar/shopcart.svg" alt="2"></template>
			<template v-slot:item-icon-active><img src="~assets/image/tabbar/shopcart_active.svg" alt="2"></template>
			<template v-slot:item-text><div>购物车</div></template>
		</tab-bar-item>
		<tab-bar-item link="/profile">
			<template v-slot:item-icon><img src="~assets/image/tabbar/profile.svg" alt="2"></template>
			<template v-slot:item-icon-active><img src="~assets/image/tabbar/profile_active.svg" alt="2"></template>
			<template v-slot:item-text>我的</template>
		</tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar.vue'
import tabBarItem from 'components/common/tabbar/tabBarItem.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style>

</style>
