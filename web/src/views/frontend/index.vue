<template>
    <Affix />
    <el-container direction="vertical">
        <Header />
        <Banner />
        <el-main class="ca-main">
            <router-view />
        </el-main>
        <Footer />
    </el-container>
</template>

<script setup lang="ts">
import Footer from '/@/layouts/frontend/components/footer.vue'
import Header from "/@/layouts/frontend/components/header.vue";
import router from "/@/router";
import Banner from "/@/layouts/frontend/components/banner.vue";
import Affix from "/@/layouts/frontend/components/affix.vue";
import {useConfig} from "/@/stores/config";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {useMeta} from "vue-meta";

const route = useRoute()
onMounted(() => {
    if(route.name == null || route.name == '/')
    {
        router.push({
            name: 'main',
            query: {}
        })
    }
    else
    {
        router.push({
            name: route.name,
            query: route.query,
        })
    }
})

const config = useConfig()
config.setLang('en')
useMeta({description: "main"})
</script>

<style lang="scss">

.ca-main{
    margin: auto;
    padding: 0;
}

</style>
