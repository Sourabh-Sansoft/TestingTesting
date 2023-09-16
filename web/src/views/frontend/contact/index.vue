<template>
    <div class="ca-contact">
        <el-row class="ca-contact-content">
            <el-col>
                <el-row>
                    <el-col :span="12">
                        <el-image :src="getAssetsUrl('contact/logo.png')"/>
                    </el-col>
                    <el-col :span="12">
                        <el-row class="ca-contact-input-group" align="middle" justify="center">
                            <p class="ca-contact-title-p">{{$t('contact.Do you need more information Just ask here')}}</p>
                        </el-row>
                        <el-row class="ca-contact-input-group">
                            <el-col :span="11">
                                <el-input v-model="input_name" placeholder="Name" />
                            </el-col>
                            <el-col :offset="2" :span="11">
                                <el-input v-model="input_cname" placeholder="Company Name" />
                            </el-col>
                        </el-row>
                        <el-row class="ca-contact-input-group">
                            <el-col :span="11">
                                <el-input v-model="input_phone" placeholder="Phone">
                                </el-input>
                            </el-col>
                            <el-col :offset="2" :span="11">
                                <el-input v-model="input_email" placeholder="Email" />
                            </el-col>
                        </el-row>
                        <el-row class="ca-contact-input-group">
                            <el-input
                                v-model="query"
                                type="textarea"
                                rows="10"
                                placeholder="Type your query here"
                                style="background-color: #ffffff; border-radius: 6px"
                            />
                        </el-row>
                        <el-row class="ca-contact-send-group" justify="center" align="middle">
                            <el-button @click="onClickSend" class="ca-contact-send" text/>
                            <p>{{$t('contact.or alternatively, use our e-mail address:')}}<a :href="'mailto:'+site.email">{{site.email}}</a></p>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-row align="top" justify="start">
                        <h1>CONTACT</h1>
                    </el-row>
                    <el-row align="middle" justify="center">
                        <el-image :src="getAssetsUrl('contact/map.png')" />
                    </el-row>
                    <el-row align="middle" justify="center">
                        <el-col>
                            <p class="ca-contact-address-p">{{`${$t('Address')} ${site.siteName}, ${site.street}, ${site.district}` }}, WuXi, Jiangsu, China<br>
                                {{$t('mail') + ":"}}<a :href="site.whatsapp">{{site.email}}</a><br>
                                {{$t('SocialPhone') + ": +86"}}{{site.phone}}<br>
                            </p>
                        </el-col>
                    </el-row>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>

import {getAssetsUrl} from "/@/utils/common";
import {ref} from "vue";
import {sendMessage} from "/@/api/frontend/message";
import { ElNotification } from 'element-plus'
import {useSiteConfig} from "/@/stores/siteConfig";
import {useMeta} from "vue-meta";


let query = ref('')
let input_name = ref('')
let input_email = ref('')
let input_phone = ref('')
let input_cname = ref('')

const site = useSiteConfig()

const onClickSend = () =>
{
    if(input_name.value == null || input_name.value == ''
        || input_email.value == null || input_email.value == ''
        || input_phone.value == null || input_phone.value == ''
        || input_cname.value == null || input_cname.value == ''
        || query.value == null || query.value == '')
    {
        ElNotification({
            title: 'Tips',
            message: 'Please enter complete information',
            type: 'error'})
        return
    }

    const mailReg = /([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    if (!mailReg.test(input_email.value)) {
        ElNotification({
            title: 'Tips',
            message: 'Please enter a valid email address',
            type: 'error'})
        return
    }

    sendMessage(input_name.value, input_email.value, query.value, input_phone.value, input_cname.value).then((res) => {
        if(res.code == 1)
        {
            ElNotification({
                title: 'Tips',
                message: 'Submitted successfully, please wait for reply',
                type: 'success'})
        }
        else {
            ElNotification({
                title: 'Tips',
                message: 'NetWork Error Please try again later',
                type: 'error'})
        }
    })
}

useMeta({description: "contact"})

</script>

<style scoped lang="scss">

.ca-contact {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/contact/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-contact-content {
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    .ca-contact-title-p
    {
        font-size: 20px;
    }

    h1
    {
        width: 270px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #fd2838;
        color: #ffffff;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
    }

    .el-input
    {
        background-color: #ffffff;
        border-radius: 6px;
        height: 40px;
        font-size: 15px;
    }

    :deep(.el-input__wrapper) {
        --el-input-text-color: rgb(0,0,0);
    }

    :deep(.el-textarea__inner)
    {
        --el-input-text-color: rgb(0,0,0);
    }

    .ca-contact-input-group
    {
        margin-left: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .ca-contact-send-group
    {
        margin-left: 10px;
        margin-top: 50px;

        .el-button
        {
            background-image: url("/@/assets/frontend/contact/send.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 600px;
            height: 50px;
        }

        p
        {
            margin-top: 20px;
            font-size: 20px;
        }

        a
        {
            color: #ef7633;
        }
    }

    .ca-contact-address-p
    {
        margin-top: 20px;
        margin-bottom: 40px
    }
}

</style>
