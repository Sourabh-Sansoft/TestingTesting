<template>
    <div class="ca-news">
        <el-row class="ca-news-content">
            <el-col>
                <el-row align="top" justify="start">
                    <h1>{{$t('news.NEWS')}}</h1>
                </el-row>
                <el-row class="ca-news-lists">
                    <el-space direction="vertical" spacer="">
                        <el-card v-for="(item, idx) in common_news" class="ca-news-common-box-card" :key="idx">
                            <template #header>
                                <el-row class="ca-news-title" justify="space-between" align="middle">
                                    <el-col :span="23"><span>{{item.en_title}}</span></el-col>
                                    <el-col :span="1"><el-button type="primary" plain @click="onClickNews(0, idx)">
                                        <el-icon size="large"><DArrowRight /></el-icon>
                                    </el-button></el-col>
                                </el-row>
                            </template>
                            <div class="ca-news-item-content">
                                <p>{{item.en_desc}}</p>
                            </div>
                            <div class="ca-news-time">
                                {{new Date(item.create_time*1000).toDateString()}}
                            </div>
                        </el-card>
                    </el-space>
                </el-row>
                <el-row align="top" justify="start">
                    <h1>{{$t('news.MEDIA')}}</h1>
                </el-row>
                <el-row justify="space-between" align="middle">
                    <el-card class="ca-news-media-box-card" v-for="(item, idx) in media_news" :key="idx">
                        <el-image :src="fullUrl(item.image)" fit="contain"/>
                        <el-row justify="space-between" align="middle">
                            <el-col :span="20">
                                <span>{{item.en_desc}}</span>
                            </el-col>
                            <el-col :offset="1" :span="3">
                                <el-button type="primary" plain @click="onClickNews(1, idx)">
                                    <el-icon size="large"><DArrowRight /></el-icon>
                                </el-button>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
        <el-drawer :before-close="beforeClose" v-model="visible" :show-close="false">
            <template #header>
                <h2 style="color: #ffffff">{{cur_news.en_title}}</h2>
            </template>
            <el-row justify="center" align="middle">
                <el-col>
                    <video ref="news_video" :src="curVideoFile()" v-show="cur_news != null && cur_news.video != ''" width="540" height="360" controls />
                    <div style="margin-top: 20px;" v-html="htmlDecode(cur_news.en_content)"/>
                </el-col>
            </el-row>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {New} from "/@/stores/interface";
import {useNews} from "/@/stores/news";
import {useRoute} from "vue-router";
import {fullUrl, htmlDecode} from "/@/utils/common";
import {DArrowRight} from "@element-plus/icons-vue";
import {useMeta} from "vue-meta";

const news = useNews()
const route = useRoute()
let visible = ref(false)
let cur_news = ref({} as New)
const news_video = ref(null as any)

let common_news : New[] = reactive([] as New[])
let media_news : New[] = reactive([] as New[])

onMounted(() => {
    news.load(() => {
        for (const newsItem of news.news) {
            if(newsItem.type == 'opt0')
            {
                common_news.push(newsItem)
            }
            else if (newsItem.type == 'opt1')
            {
                media_news.push(newsItem)
            }
        }
        common_news.sort((a, b) => {
            return b.id - a.id
        })
        media_news.sort((a, b) => {
            return b.id - a.id
        })
    })
})

const onClickNews = (type : number, idx : number) => {
    if(type == 0)
    {
        cur_news.value = common_news[idx]
    }

    if(type == 1)
    {
        cur_news.value = media_news[idx]
    }

    visible.value = true
}

const curVideoFile = () => {
    if(cur_news.value.video == '')
    {
        return ''
    }

    return fullUrl(cur_news.value.video)
}

const beforeClose = () => {
    news_video.value.pause()
    visible.value = false
}

useMeta({description: "news"})

</script>

<style lang="scss">

.ca-news {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/news/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-news-content {
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    h1
    {
        width: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #fd2838;
        color: #ffffff;
        font-size: 50px;
        font-weight: 700;
        text-align: center;
    }

    .ca-news-lists
    {
        background-color: rgba($color: #243344, $alpha: 0.8);
        background-size: 100% 100%;
        padding: 30px 20px 30px 20px;
    }

    .ca-news-common-box-card
    {
        background-color: rgba($color: #000000, $alpha: 0.0);
        justify-content: space-between;
        align-items: center;
        width: 1160px;
        border-bottom: #ffffff;
    }

    .ca-news-media-box-card
    {
        background-color: rgba($color: #000000, $alpha: 0.0);
        width: 400px;
        height: 480px;
        span
        {
            color: #ffffff;
            font-size: 20px;
            font-weight: 700;
        }
    }

    .ca-news-title
    {
        width: 100%;
        height: 50px;
        color: #00f6f9;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }

    .ca-news-item-content
    {
        color: #ffffff;
        line-height: 30px;
        font-size: 18px;
    }

    .ca-news-time
    {
        margin-top: 10px;
        color: #ffffff;
        font-size: 15px;
    }
}

</style>
