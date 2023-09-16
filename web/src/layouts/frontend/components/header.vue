<template>
    <el-header class="ca-header">
        <el-row class="ca-header-content" align="top" justify="center">
            <el-col class="ca-logo-bg" :span="4">
                <el-image :src="getAssetsUrl('header/logo.png')" />
            </el-col>
            <el-col :span="20">
                <el-row style="padding-top: 2%" align="middle" justify="start">
                    <el-col :span="11">
                        <el-row class="ca-label-bg">
                            <el-col :span="3">
                                <el-image :src="getAssetsUrl('header/map.png')" />
                            </el-col>
                            <el-col :span="21">
                                <el-row align="middle" justify="start">{{site.siteName.split('-')[0].trimEnd()}}, {{site.street}}</el-row>
                                <el-row align="middle" justify="start">{{site.district}}, Wuxi, Jiangsu, China</el-row>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row class="ca-label-bg">
                            <el-col :span="3">
                                <el-image :src="getAssetsUrl('header/telephpne.png')" />
                            </el-col>
                            <el-col :span="21">
                                <el-row align="middle" justify="start">TEL: {{site.phone}}</el-row>
                                <el-row align="middle" justify="start">Mail: <a :href="'mailto:'+site.email">{{site.email}}</a></el-row>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :offset="0" :span="5">
                        <el-row align="middle" justify="end">
                            <el-button @click="onClickContact" class="ca-contact-bg" round color="#0589ff">
                                <p>{{ $t('Contact Us') }}</p>
                            </el-button>
                        </el-row>
                        <el-row justify="space-around">
                            <el-image class="ca-social-btn" @click="onClickSocialBtn('facebook')" style="width: 30px" :src="getAssetsUrl('header/facebook.png')" />
                            <el-image class="ca-social-btn" @click="onClickSocialBtn('whatsapp')" style="width: 30px" :src="getAssetsUrl('header/whatsapp.png')" />
                            <el-image class="ca-social-btn" @click="onClickSocialBtn('instagram')" style="width: 30px" :src="getAssetsUrl('header/ins.png')" />
                        </el-row>
                    </el-col>
                    <el-col :span="3">
                    </el-col>
                </el-row>
                <el-row style="padding-top: 4%" align="middle" justify="start">
                    <el-image style="width: 890px" :src="getAssetsUrl('header/menu-bg.png')" />
                </el-row>
                <el-row style="padding-left: 1.5%; " align="bottom" justify="start">
                    <el-button class="ca-menu-btn" v-for="idx in 6" :key="idx" @click="onclickIndex(idx)">
                        <p>{{$t('nav_item_' + idx)}}</p>
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts" setup>
import { index } from '/@/api/frontend/index'
import {getAssetsUrl} from "/@/utils/common";
import {useRouter} from "vue-router";
import {useConfig} from "/@/stores/config";
import {useI18n} from "vue-i18n";
import {useSiteConfig} from "/@/stores/siteConfig";
import {openFacebook, openInstagram, openTwitter, openWhatsApp} from "/@/utils/social";

const router = useRouter()
const site = useSiteConfig()

const onclickIndex = (idx: number) => {
    switch (idx) {
        case 1:
            router.push('/main')
            break
        case 2:
            router.push('/aboutus')
            break
        case 3:
            router.push('/products')
            break
        case 4:
            router.push('/faq')
            break
        case 5:
            router.push('/news')
            break
        case 6:
            router.push('/contact')
            break
        default:
            router.push('/main')
    }
}

const onClickSocialBtn = (type: string) => {
    let url = '';
    let relAttribute = 'nofollow'; // Add rel="nofollow" here

    switch (type) {
        case 'twitter':
            openTwitter();
            break;
        case 'facebook':
            openFacebook();
            break;
        case 'whatsapp':
            openWhatsApp();
            break;
        case 'instagram':
            openInstagram();
            break;
        default:
            openFacebook();
            break;
    }

    // Now, when you open the link, it will have the rel="nofollow" attribute
    window.open(url, '_blank', `noopener noreferrer ${relAttribute}`);
}
    window.open(url)
}

const onClickContact = () => {
    router.push('/contact')
}

index()
</script>

<style lang="scss">

.ca-header{
    width: 1920px;
    height: 200px;
    margin: auto;
    background-image: url("/@/assets/frontend/header/header-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    .ca-header-content{
        width: 1200px;
        height: 100%;
        margin: auto;
    }
}

.ca-menu-btn{
    height: 45px;
    margin-top: -12px;
    font-size: 18px;
    background-image: url("/@/assets/frontend/header/btn-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    p{
        padding-top: 5px;
        color: #0a0a0a;
    }
}

.ca-menu-btn:hover{
    color: #ffffff;
    background-image: url("/@/assets/frontend/header/btn-active.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.ca-menu-btn:active{
    color: #ffffff;
    background-image: url("/@/assets/frontend/header/btn-active.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.ca-logo-bg
{
    display: flex;
    align-items: start;
    justify-content: center;
    background-image: url("/@/assets/frontend/header/logo-bg.png");
    background-repeat: no-repeat;
    background-position: top;
}

.ca-contact-bg
{
    color: #ffffff;
    text-align: center;
    display: flex;
    font-size: 24px;
    width: 210px;
    height: 35px;
    background-image: url("/@/assets/frontend/header/contact-bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5px;
}

.ca-label-bg
{
    width: 90%;
    background-image: url("/@/assets/frontend/header/label-bg.png");
    padding: 10px;
    background-repeat: no-repeat;
    background-size: cover;

    color: #0a0a0a;
}

.ca-social-btn
{
    &:hover{
        cursor: pointer;
    }
}
</style>
