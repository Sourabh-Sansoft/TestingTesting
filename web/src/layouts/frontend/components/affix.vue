<template>
    <div v-if="isMobile" class="affix-container">
        <el-affix style="height: 0" target=".ca-main" :offset="offset">
            <el-image style="position: relative; left: 350px; top: 23px" :src="getAssetsUrl('main/sg/sg.png')" />
            <el-image style="position: relative; left: 210px; top: 15px; animation: ani-scale 2s linear infinite; animation-direction: reverse" :src="getAssetsUrl('main/sg/click.png')" />
            <el-image style="position: relative; left: 40px; bottom: 60px; animation: ani-opacity 2s linear infinite; animation-direction: normal" :src="getAssetsUrl('main/sg/qp.png')" />
            <el-image style="position: relative; right: 100px; bottom: 140px; animation: ani-opacity 2s linear infinite; animation-delay: 2s; animation-direction: normal" :src="getAssetsUrl('main/sg/text-border.png')" />
            <h3 style="font-size: 20px; color: #0a0a0a; position: relative; right: 130px; bottom: 210px; animation: ani-opacity 2s linear infinite; animation-delay: 2s; animation-direction: normal">YOUR NEEDS ·</h3>
            <h3 style="font-size: 20px; color: #0a0a0a; position: relative; right: 130px; bottom: 210px; animation: ani-opacity 2s linear infinite; animation-delay: 2s; animation-direction: normal">YOUR QUESTION ·</h3>
            <button class="affix-btn-hover" @click="onClickSG" style=" width: 200px; height: 200px;  position: absolute; right: 50px; top: 20px; background-color: rgb(0,0,0,0); border: 0"></button>
        </el-affix>
    </div>
</template>

<script lang="ts" setup>
import {getAssetsUrl, isMobile} from "/@/utils/common";
import {useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";

const offset = ref(750)

const router = useRouter()

onMounted(() =>
{
    offset.value = window.innerHeight - 200
})

const onClickSG = () =>
{
    router.push('/contact')
}

watch(() => window.innerHeight, () =>
{
    offset.value = window.innerHeight - 200
})

</script>

<style lang="scss">

@keyframes  ani-opacity{
    100% {opacity: 1;}
    50% {opacity: 0.5;}
    0% {opacity: 0;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
}

@keyframes  ani-scale{
    0% {scale: 0.8}
    50% {scale: 1.0}
    100% {scale: 1.2}
}

.affix-container {
    text-align: end;
    pointer-events: none;
}

.affix-btn-hover
{
    pointer-events: auto;
    &:hover
    {
        cursor: pointer;
    }
}

</style>
