<template>
    <el-row class="ca-banner" v-if="titleBG != ''">
        <el-image style="width: 100%" fit="cover" :src="titleBG"/>
    </el-row>
</template>

<script setup lang="ts">
import router from "/@/router";
import {ref, watch} from "vue";
import {getAssetsUrl} from "/@/utils/common";
import {useRoute} from "vue-router";
import {min} from "lodash-es";


const route = useRoute()
let titleBG = ref("")
watch(
    () => route.path,
    () => {
        if (router.currentRoute.value.meta.hasOwnProperty('title')
            && typeof router.currentRoute.value.meta.titleBG == 'string') {
            titleBG.value = getAssetsUrl(`title/${router.currentRoute.value.meta.titleBG}.jpg`)
        }
        else {
            titleBG.value = '';
        }
    }
)

</script>

<style lang="scss">

.ca-banner {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;
    margin: auto;
}

</style>
