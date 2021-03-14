<template>
    <div class = "tab-bar-item" @click = "itemClick">
        <div v-if = "!iconActive"><slot name = "item-icon"></slot></div>
        <div v-else><slot name = "item-icon-active"></slot></div>
        <div :style = "activeStyle"><slot name = "item-text"></slot></div>
    </div>
</template>

<script>
export default {
    props: {
        link:String,
        itemTextColor:{
            type:String,
            default:'red'
        }
    },
    data () {
        return {
            // iconActive:true,
        }
    },
    methods: {
        itemClick(){
            this.$router.push({
                path:this.link
            }).catch(err => err)
        }
    },
    computed: {
        iconActive(){
            return this.$route.path.indexOf(this.link) !== -1;
        },
        activeStyle(){
            return this.iconActive ? {color:this.itemTextColor} : {}
        }
    }
}
</script>

<style lang = "less">
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
		img {
			width: 24px;
			height: 24px;
			margin-top: 3px;
			vertical-align: middle;
			margin-bottom: 2px;
		}
	}
</style>
