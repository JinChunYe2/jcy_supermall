<template>
	<div class = "recommend-view">
		<div class = "recommend-item" v-for = "item in recommends">
			<a :href = "item.link">
				<img :src = "item.image" :alt = "item.title">
				<p>{{ item.title }}</p>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props:{
		recommends:{
			type: Array,
			default(){
				return [];
			}
		}
	}
}
</script>

<style lang = "less" scoped>
	.recommend-view{
		width: 100%;
		display: flex;
		padding: 20px 0 30px;
		border-bottom: 8px solid #eee;
		.recommend-item{
			flex: 1;
			text-align: center;
			img{
				width: 78px;
				margin-bottom: 10px;
			}
			p{
				font-size: 14px;
			}
		}
	}
</style>
