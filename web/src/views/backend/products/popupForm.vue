<template>
    <!-- 对话框表单 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['add', 'edit'].includes(baTable.form.operate!)"
        @close="baTable.toggleForm"
        width="50%"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    v-if="!baTable.form.loading"
                    ref="formRef"
                    @submit.prevent=""
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    label-position="right"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                >
                    <FormItem :label="t('products.id')" type="string" v-model="baTable.form.items!.id" prop="id" :placeholder="t('Please input field', { field: t('products.id') })" />
                    <FormItem :label="t('products.parent_id')" type="number" prop="parent_id" :input-attr="{ step: 1 }" v-model.number="baTable.form.items!.parent_id" :placeholder="t('Please input field', { field: t('products.parent_id') })" />
                    <FormItem :label="t('products.layout')" type="radio" v-model="baTable.form.items!.layout" prop="layout" :data="{ content: { horizontal: t('products.layout horizontal'), vertical: t('products.layout vertical') } }" :placeholder="t('Please select field', { field: t('products.layout') })" />
                    <FormItem :label="t('products.name')" type="string" v-model="baTable.form.items!.name" prop="name" :placeholder="t('Please input field', { field: t('products.name') })" />
                    <FormItem :label="t('products.en_name')" type="string" v-model="baTable.form.items!.en_name" prop="en_name" :placeholder="t('Please input field', { field: t('products.en_name') })" />
                    <FormItem :label="t('products.desc')" type="string" v-model="baTable.form.items!.desc" prop="desc" :placeholder="t('Please input field', { field: t('products.desc') })" />
                    <FormItem :label="t('products.en_desc')" type="string" v-model="baTable.form.items!.en_desc" prop="en_desc" :placeholder="t('Please input field', { field: t('products.en_desc') })" />
                    <FormItem :label="t('products.detail')" type="textarea" v-model="baTable.form.items!.detail" prop="detail" :input-attr="{ rows: 3 }" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('products.detail') })" />
                    <FormItem :label="t('products.en_detail')" type="textarea" v-model="baTable.form.items!.en_detail" prop="en_detail" :input-attr="{ rows: 3 }" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('products.en_detail') })" />
                    <FormItem :label="t('products.image_small')" type="image" v-model="baTable.form.items!.image_small" prop="image_small" />
                    <FormItem :label="t('products.image_mid')" type="image" v-model="baTable.form.items!.image_mid" prop="image_mid" />
                    <FormItem :label="t('products.image_large')" type="image" v-model="baTable.form.items!.image_large" prop="image_large" />
                    <FormItem :label="t('products.carousel')" type="images" v-model="baTable.form.items!.carousel" prop="carousel" />
                    <FormItem :label="t('products.enable')" type="switch" v-model="baTable.form.items!.enable" prop="enable" :data="{ content: { 0: t('products.enable 0'), 1: t('products.enable 1') } }" />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import FormItem from '/@/components/formItem/index.vue'
import type { ElForm, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'

const formRef = ref<InstanceType<typeof ElForm>>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    parent_id: [buildValidatorData({ name: 'number', title: t('products.parent_id') })],
})
</script>

<style scoped lang="scss"></style>
