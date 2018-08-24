<template>
    <div id="app" class="wrap">
        <headers></headers>       
        <!-- <div id="nav" class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <div class="content">
            <navs></navs>
            <div class="menu">

            </div>
            <router-view/>
        </div>       
    </div>
</template>
<script>
import headers from '@/components/header.vue'
import navs from '@/components/nav.vue'
export default {
    components:{
        headers,
        navs
    }
}
</script>

<style lang="scss">
    @import 'sass/app';
</style>
