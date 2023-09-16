<template>
    <div class="ca-faq">
        <el-row class="ca-faq-content" justify="center">
            <el-table :data="filterTableData" style="width: 100%">
                <el-table-column label="FAQ" prop="en_title" />
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button type="primary" plain @click="onClickFaqs(scope.row.id)">
                            <el-icon size="large"><DArrowRight /></el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script lang="ts" setup>

import {computed, onMounted, ref} from "vue";
import {useFAQ} from "/@/stores/faq";
import {DArrowRight} from "@element-plus/icons-vue";
import router from "/@/router";
import {useMeta} from "vue-meta";

const faq = useFAQ()

onMounted(() => {
    faq.load()
})

const onClickFaqs = (idx: number) => {
    const cur_faq = faq.getFAQ(idx)
    router.push({
        name: 'faq-details',
        query: {
            faq_id: cur_faq.id,
            title: cur_faq.en_title
        }
    })
}

const search = ref('')
const filterTableData = computed(() =>
    faq.faqs.filter(
        (data) =>
            !search.value ||
            data.en_title.toLowerCase().includes(search.value.toLowerCase()) ||
            data.en_content.toLowerCase().includes(search.value.toLowerCase())
    )
)

useMeta({description: "faq"})

</script>

<style scoped lang="scss">

.ca-faq {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/faq/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;


    .ca-faq-content {
        background-color: rgba(255, 255, 255, 0.2);
        width: 1200px;
        height: 100%;
        margin: auto;
    }
}

</style>
