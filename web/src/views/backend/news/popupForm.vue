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
                    <FormItem :label="t('news.type')" type="radio" v-model="baTable.form.items!.type" prop="type" :data="{ content: { opt0: t('news.type opt0'), opt1: t('news.type opt1') } }" :placeholder="t('Please select field', { field: t('news.type') })" />
                    <FormItem :label="t('news.title')" type="string" v-model="baTable.form.items!.title" prop="title" :placeholder="t('Please input field', { field: t('news.title') })" />
                    <FormItem :label="t('news.en_title')" type="string" v-model="baTable.form.items!.en_title" prop="en_title" :placeholder="t('Please input field', { field: t('news.en_title') })" />
                    <FormItem :label="t('news.desc')" type="string" v-model="baTable.form.items!.desc" prop="desc" :placeholder="t('Please input field', { field: t('news.desc') })" />
                    <FormItem :label="t('news.en_desc')" type="string" v-model="baTable.form.items!.en_desc" prop="en_desc" :placeholder="t('Please input field', { field: t('news.en_desc') })" />
                    <FormItem :label="t('news.content')" type="editor" v-model="baTable.form.items!.content" prop="content" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('news.content') })" />
                    <FormItem :label="t('news.en_content')" type="editor" v-model="baTable.form.items!.en_content" prop="en_content" @keyup.enter.stop="" @keyup.ctrl.enter="baTable.onSubmit(formRef)" :placeholder="t('Please input field', { field: t('news.en_content') })" />
                    <FormItem :label="t('news.image')" type="image" v-model="baTable.form.items!.image" prop="image" />
                    <FormItem :label="t('news.enable')" type="switch" v-model="baTable.form.items!.enable" prop="enable" :data="{ content: { 0: t('news.enable 0'), 1: t('news.enable 1') } }" />
                    <FormItem :label="t('news.video')" type="files" v-model="baTable.form.items!.video" prop="video" />
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
    content: [buildValidatorData({ name: 'editorRequired', title: t('news.content') })],
    en_content: [buildValidatorData({ name: 'editorRequired', title: t('news.en_content') })],
    create_time: [buildValidatorData({ name: 'date', title: t('news.create_time') })],
})
</script>

<style scoped lang="scss"></style>
