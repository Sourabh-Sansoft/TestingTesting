<template>
    <el-config-provider>
        <metainfo>
            <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
        </metainfo>
        <router-view />
    </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, watch} from 'vue'
import { useI18n } from 'vue-i18n'
import iconfontInit from '/@/utils/iconfont'
import { useRoute } from 'vue-router'
import {setPosition, setTitleFromRoute} from '/@/utils/common'
import { useConfig } from '/@/stores/config'
import { useTerminal } from '/@/stores/terminal'
import {useMeta} from "vue-meta";

const config = useConfig()
const route = useRoute()
const terminal = useTerminal()

// 初始化 element 的语言包
const { getLocaleMessage } = useI18n()
const lang = getLocaleMessage(config.lang.defaultLang) as any
onMounted(() => {
    iconfontInit()
    terminal.init()
    setPosition()
})

// 监听路由变化时更新浏览器标题
watch(
    () => route.path,
    () => {
        setTitleFromRoute()
        setPosition()
    }
)

</script>
