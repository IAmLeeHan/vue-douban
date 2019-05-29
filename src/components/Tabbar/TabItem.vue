<template>
    <div class = "tabitem">
        <span v-if="!flag" @click = "change"><slot name = "normalImg"></slot></span>
        <span v-else><slot name = "activeImg"></slot></span>
        <span class = "title">{{txt}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag:false
        }
    },
    props:["txt"],
    methods: {
        change(){
            return this.flag = !this.flag
        }
    },
}
</script>

<style lang="scss" scoped>
    .tabitem{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:40px;
            height: 40px;
        }
    }
</style>
