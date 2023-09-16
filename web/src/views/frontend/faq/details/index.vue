<script setup lang="ts">
import {FAQ} from "/@/stores/interface";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useFAQ} from "/@/stores/faq";
import {htmlDecode} from "/@/utils/common";
import router from "/@/router";
import {useMeta} from "vue-meta";
const route = useRoute()
const faq = useFAQ()

const cur_data = ref({} as FAQ)

onMounted(() => {
    if(faq.faqs.length == 0)
    {
        faq.load(() =>
        {
            let faq_id = route.query.faq_id
            cur_data.value = faq.getFAQ(Number(faq_id))
            router.currentRoute.value.meta.title = cur_data.value.en_title
            useMeta({description: cur_data.value.en_title})
        })
    }
    else {
        let faq_id = route.query.faq_id
        cur_data.value = faq.getFAQ(Number(faq_id))
        router.currentRoute.value.meta.title = cur_data.value.en_title
        router.currentRoute.value.meta.description = cur_data.value.en_title
        useMeta({description: cur_data.value.en_title})
    }
})

</script>

<template>
    <div class="ca-faq-details">
        <el-row class="ca-faq-details-content">
            <el-col :span="24">
                <h1>{{cur_data.en_title}}</h1>
                <el-divider />
                <p>{{cur_data.en_content}}</p>
                <div style="margin-top: 20px; padding: 20px" v-html="htmlDecode(cur_data.en_rich_content)"/>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">

.ca-faq-details {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/faq/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;


    .ca-faq-details-content {
        width: 1200px;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.2);
    }

    h1
    {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 30px;
    }

    p{
        margin-left: 10px;
        font-size: 20px;
    }
}

</style>
