<template>
    <div id = "tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    #tab-bar{
        display: flex;
        height: 49px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        border-top: rgba(0,0,0,0.2);
    }
</style>
