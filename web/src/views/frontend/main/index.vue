<template>
    <div class="ca-main-banner">
        <el-row class="ca-main-banner-content">
            <el-col>
                <el-row justify="center" align="middle">
                    <el-col>
                        <el-row justify="start" align="middle">
                            <div class="ca-main-banner-title-h2">{{$t("main.High-quality Corosion-resistant")}}</div>
                        </el-row>
                        <el-row justify="start" align="middle">
                            <div class="ca-main-banner-title-h1">{{$t("main.Expert in the Fine Chemical Industry For Heat Exchangers World Wide")}}</div>
                        </el-row>
                        <el-row justify="start" align="middle">
                            <div class="ca-main-banner-title-h1">{{$t("main.Heat Exchangers")}}</div>
                        </el-row>
                        <el-row justify="start" align="top">
                            <el-col :span="12">
                                <el-space alignment="flex-start" size="small" class="ca-main-label-bg" direction="vertical">
                                    <div class="ca-main-label-item">
                                        <div>
                                            <el-image fit="scale-down" :src="getAssetsUrl('main/banner/arrow.png')"/>
                                            <p>&nbsp;{{$t("main.Longer Lifespan")}}</p>
                                        </div>
                                    </div>
                                    <div class="ca-main-label-item">
                                        <div>
                                            <el-image fit="scale-down" :src="getAssetsUrl('main/banner/arrow.png')"/>
                                            <p>&nbsp;{{$t("main.Higher Efficiency")}}</p>
                                        </div>
                                    </div>
                                    <div class="ca-main-label-item">
                                        <div>
                                            <el-image fit="scale-down" :src="getAssetsUrl('main/banner/arrow.png')"/>
                                            <p>&nbsp;{{$t("main.Less Downtime")}}</p>
                                        </div>
                                    </div>
                                    <div class="ca-main-label-item">
                                        <div>
                                            <el-image fit="scale-down" :src="getAssetsUrl('main/banner/arrow.png')"/>
                                            <p>&nbsp;{{$t("main.Wider Range of Applications")}}</p>
                                        </div>
                                    </div>
                                </el-space>

                                <div @click="onClickContact" class="ca-main-banner-bth">
                                    <p>{{$t("main.Contact Our Experts Now")}}</p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <el-image class="ca-main-banner-logo" fit="contain" :src="getAssetsUrl('main/banner/logo.jpg')"/>
                                <el-button @click="onClickProductListItem(0)" class="ca-main-banner-logo-btn" style="right: 30px;"></el-button>
                                <el-button @click="onClickProductListItem(1)" class="ca-main-banner-logo-btn" style="right: -10px;"></el-button>
                                <el-button @click="onClickProductListItem(2)" class="ca-main-banner-logo-btn" style="right: -50px;"></el-button>
                                <el-button @click="onClickProductListItem(3)" class="ca-main-banner-logo-btn" style="right: -90px;"></el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row justify="center" align="middle" style="margin-top: 20px">
                    <el-col :span="7">
                        <el-row :style="handleTitleBg(1)" class="ca-main-guide-item-title" justify="center" align="middle">
                            <el-col>
                                <p>{{$t("main.Heat Exchanger")}}</p>
                                <p>{{$t("main.are from")}}</p>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="7">
                        <el-row :style="handleTitleBg(2)" class="ca-main-guide-item-title" justify="center" align="middle">
                            <el-col>
                                <p>{{$t("main.If your current")}}</p>
                                <p>{{$t("main.heat exchanger is")}}</p>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="7">
                        <el-row :style="handleTitleBg(3)" class="ca-main-guide-item-title" justify="center" align="middle" >
                            <el-col>
                                <p>{{$t("main.if your process")}}</p>
                                <p>{{$t("main.medium contains")}}</p>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>

    <div class="ca-main-guide">
        <el-row class="ca-main-guide-content" justify="center" align="middle">
            <el-col :span="7">
                <el-row class="ca-main-guide-item-list" justify="center" align="top">
                    <el-space class="ca-main-guide-item-space" direction="vertical" alignment="normal">
                        <div v-for="item in site.index_faq_1" class="ca-main-guide-item" :key="item">
                            <el-button @click="onClickFaqItem(item.key, item.value)" class="ca-main-guide-item-btn"><p>{{item.value}}</p></el-button>
                        </div>
                    </el-space>
                </el-row>
            </el-col>
            <el-col :span="7">
                <el-row class="ca-main-guide-item-list" justify="center" align="top">
                    <el-space class="ca-main-guide-item-space" direction="vertical" alignment="normal">
                        <div v-for="item in site.index_faq_2" class="ca-main-guide-item"  :key="item">
                            <el-button @click="onClickFaqItem(item.key, item.value)" class="ca-main-guide-item-btn"><p>{{item.value}}</p></el-button>
                        </div>
                    </el-space>
                </el-row>
            </el-col>
            <el-col :span="7">
                <el-row class="ca-main-guide-item-list" justify="center" align="top">
                    <el-space class="ca-main-guide-item-space" direction="vertical" alignment="normal">
                        <div v-for="item in site.index_faq_3" class="ca-main-guide-item" :key="item">
                            <el-button @click="onClickFaqItem(item.key, item.value)" class="ca-main-guide-item-btn"><p>{{item.value}}</p></el-button>
                        </div>
                    </el-space>
                </el-row>
            </el-col>
        </el-row>
    </div>

    <div class="ca-main-news">
        <el-row align="middle" justify="center">
            <h1>{{$t("main.This is the right choice for you!")}}</h1>
        </el-row>
        <el-row align="middle" justify="center">
            <el-image fit="contain" :src="getAssetsUrl('main/news/dividing.png')"/>
        </el-row>
        <el-row align="middle" justify="center">
            <h2>{{$t("main.We offer products that are most suitable for you")}}</h2>
        </el-row>
    </div>

    <div class="ca-main-products">
        <el-row class="ca-main-products-content">
            <el-col :span="6">
                <el-row v-for="(item, index) in left_products" :key="index">
                    <el-col class="ca-main-left-product-item">
                        <el-row align="middle" justify="center">
                            <el-image @click="onClickProductItem(item.id, item.en_name)" style="width: 260px; height: 300px" fit="cover" :src="fullUrl(item.image_small)"/>
                        </el-row>
                        <el-row>
                            <p>{{item.details[0]}}</p>
                        </el-row>
                        <el-row >
                            <p>{{item.details[1]}}</p>
                        </el-row>
                        <el-row >
                            <p>{{item.details[2]}}</p>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="18">
                <el-row v-for="(item, index) in right_products" justify="center" align="middle" class="ca-main-right-product-item" :key="index">
                    <el-col :span="16">
                        <el-image @click="onClickProductItem(item.id, item.en_name)" style="width: 500px; height: 160px" fit="cover" :src="fullUrl(item.image_small)" />
                    </el-col>
                    <el-col :offset="1" :span="7">
                        <el-row>
                            <p>{{item.details[0]}}</p>
                        </el-row>
                        <el-row >
                            <p>{{item.details[1]}}</p>
                        </el-row>
                        <el-row >
                            <p>{{item.details[2]}}</p>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>

    <div class="ca-main-patent">
        <el-row class="ca-main-patent-content" align="bottom" justify="center">
            <el-col :span="13">
                <div class="ca-main-patent-item-space">
                    <el-row justify="start" align="middle">
                        <h1>{{$t('main.PATENT')}}</h1>
                    </el-row>
                    <el-row justify="start" align="bottom">
                        <p>{{$t('main.with 30 years of professional heat exchanger')}}<br>
                            {{$t('main.manufacturing experience,every patent')}}<br>
                            {{$t('main.represents our attitude towards this work')}}</p>
                    </el-row>
                    <el-row>
                        <el-space class="ca-main-patent-items" direction="horizontal" alignment="center">
                            <el-image class="ca-main-patent-item" v-for="index in 9" :key="index" :src="getAssetsUrl(`main/patent/patent-item${index}.jpg`)" @mouseenter="onMouseEnterPatent(index)"></el-image>
                        </el-space>
                    </el-row>
                </div>
            </el-col>
            <el-col :offset="2" :span="9">
                <div class="ca-main-patent-item-space">
                    <el-image :preview-src-list="patent_srcList"  class="ca-main-patent-big" :src="handlePatent()"/>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="ca-main-partner">
        <el-row class="ca-main-partner-content" align="middle" justify="center">
            <el-col :span="8">
                <div>
                    <el-row justify="start" align="middle">
                        <h1>{{$t('main.COOPERATE')}}</h1>
                    </el-row>
                    <el-row justify="start" align="bottom">
                        <p>{{$t('main.Our customers are spread across china')}}<br>
                            {{$t('main.and now we are ready to embark on a')}}<br>
                            {{$t('main.new journey to meet you around the')}}<br>
                            {{$t('main.world')}}
                        </p>
                    </el-row>
                </div>
            </el-col>
            <el-col :offset="2" :span="14">
                <div>
                    <el-image :src="getAssetsUrl('common/partner.png')"/>
                </div>
            </el-col>
        </el-row>
    </div>

    <div class="ca-main-showcase">
        <div class="ca-main-showcase-content">
            <el-row class="ca-main-showcase-main" justify="center" align="middle">
                <el-col :offset="1" :span="10">
                   <el-row align="middle">
                          <h1 class="ca-main-video-title">{{$t('main.SOCIAL MEDIA')}}</h1>
                   </el-row>
                    <el-row>
                        <video width="480" height="360" controls>
                            <source :src="getAssetsUrl('main/video.mp4')" type="video/mp4">
                        </video>
                    </el-row>
                </el-col>
                <el-col :offset="3" :span="10">
                    <el-space direction="vertical" size="large">
                        <el-space direction="horizontal">
                            <div>
                                <el-image fit="contain" :src="getAssetsUrl('main/showcase/showcase1.jpg')"/>
                                <p>{{$t('main.Our customers are spread acrocss China to meet you around the world')}}</p>
                            </div>
                            <div>
                                <el-image fit="contain" :src="getAssetsUrl('main/showcase/showcase2.jpg')"/>
                                <p>{{$t('main.Our team consists of highly skilled professionals with extensive expertise')}}</p>
                            </div>
                        </el-space>
                        <el-space direction="horizontal">
                            <div>
                                <el-image fit="contain" :src="getAssetsUrl('main/showcase/showcase3.jpg')"/>
                                <p>{{$t('main.Our customer base spans across the globe, reaching international markets')}}</p>
                            </div>
                            <div>
                                <el-image fit="contain" :src="getAssetsUrl('main/showcase/showcase4.jpg')"/>
                                <p>{{$t('main.We are committed to providing unparalleled service, ensuring customer satisfaction')}}</p>
                            </div>
                        </el-space>
                    </el-space>
                </el-col>
            </el-row>
        </div>
    </div>

    <div class="ca-main-showcase-loop">
        <div class="ca-main-slideshow">
            <el-space class="ca-main-images">
                <img  v-for="id in 6" :src="getAssetsUrl(`main/showcase/showcase${id}.jpg`)" :key="id"/>
                <img  v-for="id in 6" :src="getAssetsUrl(`main/showcase/showcase${id}.jpg`)" :key="id"/>
                <img  v-for="id in 6" :src="getAssetsUrl(`main/showcase/showcase${id}.jpg`)" :key="id"/>
            </el-space>
        </div>
    </div>

</template>

<script setup lang="ts">
import {fullUrl, getAssetsUrl} from "/@/utils/common";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useFAQ} from "/@/stores/faq";
import {useProducts} from "/@/stores/products";
import {Product} from "/@/stores/interface";
import {useSiteConfig} from "/@/stores/siteConfig";
import {useMeta} from "vue-meta";

const products = useProducts()
const site = useSiteConfig()
const faq = useFAQ()

let left_products = ref([] as Product[])
let right_products = ref([] as Product[])
let patent_srcList = ref([] as string[])

onMounted(() => {
    products.load(() => {
        for (const p of site.index_product_left) {
            left_products.value.push(products.getProduct(Number(p.key)))
        }
        for (const p of site.index_product_right) {
            right_products.value.push(products.getProduct(Number(p.key)))
        }
    })
    faq.load()
})

let curGuideBtnIdx = ref(0);

const patentIdx = ref(1)
const router = useRouter()
const onClickContact = () =>
{
    router.push('/contact')
}

const handleTitleBg = (index : number) => {
    if(index != curGuideBtnIdx.value)
    {
        const url = getAssetsUrl('main/guide/bg.png')
        return {
            'background-image': url
        }
    }

    return ""
}

const handlePatent = () => {
    return getAssetsUrl(`main/patent/patent-item${patentIdx.value}.jpg`)
}

const onMouseEnterPatent = (index : number) => {
    patentIdx.value = index
    patent_srcList.value = [getAssetsUrl(`main/patent/patent-item${index}.jpg`)]
}

const onClickProductListItem = (id : number) =>
{
    const product = site.index_product_list[id]
    router.push({
        name: 'product-details',
        query: {
            product_id: product.key,
            title: product.value
        }
    })
}

const onClickProductItem = (id : number, title : string) =>
{
    router.push({
        name: 'product-details',
        query: {
            product_id: id,
            title: title
        }
    })
}

const onClickFaqItem = (id : string, title : string) => {
    router.push({
        name: 'faq-details',
        query: {
            faq_id: id,
            title: title
        }
    })
}

useMeta({description: "main"})

</script>

<style lang="scss">
@import "/@/styles/app.scss";

@font-face {
    font-family: "AlibabaPuHuiTi-3-105-Heavy";
    src: url('/@/assets/font/AlibabaPuHuiTi-3-105-Heavy.ttf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "AlibabaPuHuiTi-3-65-Medium";
    src: url('/@/assets/font/AlibabaPuHuiTi-3-65-Medium.ttf');
    font-weight: normal;
    font-style: normal;
}

.ca-main-banner{
    @include ca-normal-border;
    padding-top: 60px;
    background-image: url("/@/assets/frontend/main/banner/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-banner-content{
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    .ca-main-banner-title-h2
    {
        font: normal normal normal 36px/46px Impact;
        font-size: 35px;
        color: #ffa342;
    }

    .ca-main-banner-title-h1
    {
        font: normal normal normal 36px/46px Impact;
        color: #ffffff;
        font-size: 35px;
        font-weight: bold;
    }

    .ca-main-label-bg
    {
        padding-top: 40px;
        .ca-main-label-item
        {
            &:hover
            {
                cursor: pointer;
                background-color: #85ce61;
            }

            width: 400px;
            padding: 10px;
            background-image: url("/@/assets/frontend/main/banner/label-bg.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 15px;

            div{
                display: flex;
                p{
                    font-family: AlibabaPuHuiTi-3-65-Medium;
                    color: #ffffff;
                    font-size: 25px;
                    font-weight: 500;
                }
            }
        }
    }

    .ca-main-banner-logo
    {
        position: absolute;
        margin-left: -90px;
        margin-top: -50px;
    }

    .ca-main-banner-logo-btn
    {
        border: 0;
        position: relative;
        height: 400px;
        width: 100px;
        --el-button-hover-bg-color: rgba(0,0,0,0);
    }

    .ca-main-banner-bth
    {
        background-image: url("/@/assets/frontend/main/banner/btn-bg.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 400px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover
        {
            cursor: pointer;
        }

        p{
            color: #ffffff;
            font-size: 30px;
            font-weight: 900;
        }
    }

    .ca-main-guide-item-title
    {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        @include ca-normal-border;
        height: 175px;
        font-family: "AlibabaPuHuiTi-3-105-Heavy";

        p{
            text-align: center;
            color: #ffffff;
            font-size: 25px;
            font-weight: 900;
        }
    }
}

.ca-main-guide{
    @include ca-normal-border;
    background-color: #1f2034;
    width: 1920px;

    .ca-main-guide-content{
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    .ca-main-guide-item-list {
        @include ca-normal-border;
        height: 350px;
        .ca-main-guide-item-space
        {
            padding-top: 20px;
            .ca-main-guide-item{

                .ca-main-guide-item-btn
                {
                    width: 300px;
                    height: 45px;

                    --el-button-hover-bg-color: rgba(0,0,0,0);
                }

                width: 300px;
                height: 45px;
                &:hover
                {
                    background-image: url("/@/assets/frontend/main/guide/item-select.png");
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                background-image: url("/@/assets/frontend/main/guide/item-bg.png");
                background-size: cover;
                background-repeat: no-repeat;

                p{
                    color:#ffffff;
                    font-size: 20px;
                    width: 300px;
                    height: 45px;
                    padding-left: 45px;
                    text-align: start;
                    line-height: 45px;
                }
            }
        }
    }
}

.ca-main-news{
    @include ca-normal-border;
    background-color: #1f2034;

    h1{
        color: #ffffff;
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        padding: 20px;
    }

    h2
    {
        color: #ffffff;
        font-size:30px;
        text-align: center;
        padding: 20px;
    }
}

.ca-main-products{
    @include ca-normal-border;
    padding-top: 60px;
    background-image: url("/@/assets/frontend/main/products/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-products-content
    {
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    @mixin ca-main-product-item
    {
        background-repeat: no-repeat;
        background-size: 100% 100%;

        &:hover
        {
            cursor: pointer;
            border: #ff0008 5px solid;
            border-radius: 30px;
        }

        p{
            color: #2c2c2c;
            font-size: 20px;
            font-weight: 900;
        }
    }

    .ca-main-left-product-item
    {
        @include ca-main-product-item;
        margin-top: 35px;
        margin-bottom: 20px;
        padding: 20px;
        width: 300px;
        height: 400px;
        background-image: url("/@/assets/frontend/main/products/left_prodcut_bg.png");
    }

    .ca-main-right-product-item
    {
        @include ca-main-product-item;
        margin-top: 35px;
        margin-left: 40px;
        padding: 10px 20px 10px 20px;
        width: 800px;
        height: 188px;
        background-image: url("/@/assets/frontend/main/products/right_product_bg.png");
    }
}

.ca-main-patent{
    padding-top: 60px;
    background-image: url("/@/assets/frontend/main/patent/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-patent-content
    {
        width: 1200px;
        height: 500px;
        margin: auto;
    }

    h1
    {
        background-color: #fd171d;
        padding: 10px;
        font-size: 30px;
        color: #ffffff;
    }

    p
    {
        padding: 10px;
        font-size: 20px;
        color: #ffffff;
    }

    .ca-main-patent-items
    {
        padding: 10px;
        border-radius: 15px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("/@/assets/frontend/main/patent/item-bg.png");
    }

    .ca-main-patent-item
    {
        &:hover
        {
            border: #fd171d 5px solid;
        }
        width: 60px;
        height: 80px;
    }

    .ca-main-patent-item-space
    {
       margin-bottom: 30px;
    }

    .ca-main-patent-big
    {
        width: 350px;
        height: 450px;
    }
}

.ca-main-partner{
    padding-top: 60px;
    background-image: url("/@/assets/frontend/main/patent/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-partner-content
    {
        width: 1200px;
        height: 500px;
        margin: auto;
    }

    h1
    {
        background-color: #fd171d;
        padding: 10px;
        font-size: 30px;
        color: #ffffff;
    }

    p
    {
        padding: 10px;
        font-size: 20px;
        color: #ffffff;
    }
}

.ca-main-showcase{
    padding-top: 60px;
    background-image: url("/@/assets/frontend/main/showcase/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-showcase-content {
        width: 1200px;
        margin: auto;
    }

    .ca-main-showcase-main
    {
        padding-bottom: 100px;

        p{
            color: #ffffff;
            font-size: 13px;
        }
    }

    .ca-main-video-title
    {
        margin-bottom: 30px;
        color: #ffffff;
        padding: 20px;
        font-size: 40px;
        background-color: #1d1d2d;
    }
}

.ca-main-showcase-loop {
    background-image: url("/@/assets/frontend/main/showcase/bg-loop.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-main-slideshow {
        position: relative;
        overflow: hidden;
    }

    .ca-main-images {
        position: relative;
        left: 0;
        top: 0;
        height: 100%;
        width: 200%;
        animation: ca-main-slideshow 30s linear infinite;
    }
    @keyframes ca-main-slideshow {
        0%    { left: 0; }
        100%  { left: -200%; }
    }
}
</style>
