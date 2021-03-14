<template>
    <div id = "home">
		<nav-bar class = "home-nav">
			<template v-slot:center><div>购物街</div></template>
		</nav-bar>
		<home-swiper :banners = "banners"></home-swiper>
    </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import homeSwiper from './childComps/homeSwiper'
import {getHomeMultidata} from 'network/home'

export default {
    data () {
        return {
			banners:[],
			dKeywords:[],
			keywords:[],
			recommends:[]
        }
	},
	components:{
		navBar,
		homeSwiper
	},
	created(){
		getHomeMultidata().then((res) => {
			console.log(res)
			let self = this;
			self.banners = res.data.banner.list;
			self.recommends = res.data.recommend.list;
			self.dKeywords = res.data.dKeyword.list;
			self.keywords = res.data.keywords.list;
			self.recommends = res.data.recommend.list;
		})
	}
}
</script>

<style lang = "less" scoped>
	#home{
		.home-nav{
			background: var(--color-tint);
			color: #fff;
		}
	}
</style>
