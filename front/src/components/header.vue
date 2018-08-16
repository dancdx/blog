<template>
    <div class="header">
        <h2>
            <router-link to="/">{{title}}'s Blog</router-link>
        </h2>
        <div class="headerLink">
            <router-link class="focus" to="/">首页</router-link>
            <router-link to="/">分类</router-link>
            <router-link to="/">标签</router-link>
            <router-link to="/">留言板</router-link>
            <router-link to="/">关于我</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title:'WangDan',
        }
    }
}
</script>

<style lang="scss">
    @import '../sass/header.scss'
</style>
