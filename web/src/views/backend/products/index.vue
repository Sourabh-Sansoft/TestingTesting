<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('quick Search Placeholder', { fields: t('products.quick Search Fields') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { defaultOptButtons } from '/@/components/table'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

const { t } = useI18n()
const tableRef = ref()
const optButtons = defaultOptButtons(['edit', 'delete'])
const baTable = new baTableClass(
    new baTableApi('/admin/products.Products/'),
    {
        pk: 'id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('products.id'), prop: 'id', align: 'center', width: 70, operator: 'RANGE', sortable: 'custom' },
            { label: t('products.parent_id'), prop: 'parent_id', align: 'center', operator: 'RANGE', sortable: false },
            { label: t('products.layout'), prop: 'layout', align: 'center', render: 'tag', operator: '=', sortable: false, replaceValue: { horizontal: t('products.layout horizontal'), vertical: t('products.layout vertical') } },
            { label: t('products.name'), prop: 'name', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('products.en_name'), prop: 'en_name', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('products.desc'), prop: 'desc', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('products.en_desc'), prop: 'en_desc', align: 'center', operatorPlaceholder: t('Fuzzy query'), operator: 'LIKE', sortable: false },
            { label: t('products.detail'), prop: 'detail', align: 'center', operator: false },
            { label: t('products.en_detail'), prop: 'en_detail', align: 'center', operator: false },
            { label: t('products.image_small'), prop: 'image_small', align: 'center', render: 'image', operator: false },
            { label: t('products.image_mid'), prop: 'image_mid', align: 'center', render: 'image', operator: false },
            { label: t('products.image_large'), prop: 'image_large', align: 'center', render: 'image', operator: false },
            { label: t('products.carousel'), prop: 'carousel', align: 'center', render: 'images', operator: false },
            { label: t('products.enable'), prop: 'enable', align: 'center', render: 'switch', operator: '=', sortable: false, replaceValue: { 0: t('products.enable 0'), 1: t('products.enable 1') } },
            { label: t('operate'), align: 'center', width: 100, render: 'buttons', buttons: optButtons, operator: false },
        ],
        dblClickNotEditColumn: [undefined, 'enable'],
    },
    {
        defaultItems: { layout: 'vertical', enable: '1' },
    }
)

provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.initSort()
        baTable.dragSort()
    })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'products',
})
</script>

<style scoped lang="scss"></style>
