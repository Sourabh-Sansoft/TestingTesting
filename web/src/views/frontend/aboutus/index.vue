<template>
    <div class="ca-about">
        <el-row class="ca-about-content">
            <el-col class="ca-about-left" :span="6">
                <div>
                    <h1>{{$t('aboutus.ABOUT REPICEA')}}</h1>
                    <div class="ca-about-guide-item-list">
                        <el-space class="ca-about-guide-item-space" direction="vertical" alignment="normal">
                            <el-button type="primary" v-for="(item, _idx) in guideItem" class="ca-about-guide-item" :key="_idx" @click="onClickBtn(_idx)">
                                <p>{{item}}</p>
                            </el-button>
                        </el-space>
                    </div>
                </div>
            </el-col>
            <el-col :offset="1" :span="17">
                <el-scrollbar ref="content" height="800px">
                    <el-row class="ca-about-right" justify="center" align="middle">
                        <el-space direction="vertical" alignment="center">
                            <h1>{{$t('aboutus.COMPANY INTRODUCTION')}}</h1>
                            <el-image :src="getAssetsUrl('about/intro1.jpg')" />
                            <p>{{$t('aboutus.desc1_1')}}<br><br>{{$t('aboutus.desc1_2')}}</p>
                            <el-image :src="getAssetsUrl('about/intro2.jpg')" />
                            <p>{{$t('aboutus.desc2_1')}}<br><br>{{$t('aboutus.desc2_2')}}<br><br>{{$t('aboutus.desc2_3')}}</p>
                        </el-space>
                    </el-row>

                    <el-row class="ca-about-right" justify="center" align="middle">
                        <el-space direction="vertical" alignment="center">
                            <h1>COMPANY HISTORY</h1>
                            <el-image style="margin-top: 20px" :src="getAssetsUrl('about/history.png')" />
                        </el-space>
                    </el-row>

                    <el-row class="ca-about-right" justify="center" align="middle">
                        <el-space direction="vertical" alignment="center">
                            <h1>COOPERATIVE PARTNER</h1>
                            <el-image style="margin-top: 20px" :src="getAssetsUrl('common/partner.png')" />
                            <p>{{$t('aboutus.desc3_1')}}<br><br>{{$t('aboutus.desc3_2')}}<br><br>{{$t('aboutus.desc3_3')}}<br><br>{{$t('aboutus.desc3_4')}}</p>
                        </el-space>
                    </el-row>
                </el-scrollbar>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import {getAssetsUrl} from "/@/utils/common";
import {ref} from "vue";
import {useMeta} from "vue-meta";

const guideItem = [
    "Company Introduction",
    "Company History",
    "Cooperative Partner",
]

const content = ref(null)
const onClickBtn = (index: number) => {
    switch (index) {
        case 0:
            console.log(content.value)
            content.value.setScrollTop(0)
            break
        case 1:
            content.value.setScrollTop(1720)
            break
        case 2:
            content.value.setScrollTop(3330)
            break
    }
}

useMeta({description: "aboutus"})

</script>

<style lang="scss">

.ca-about {
    background-image: url("/@/assets/frontend/about/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;
    margin-bottom: 20px;

    .ca-about-content {
        width: 1200px;
        height: 100%;
        margin: auto;
    }

    .ca-about-left {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 10px;
        background-image: url("/@/assets/frontend/about/left-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;

        h1 {
            padding-top: 20px;
            padding-bottom: 20px;
            width: 280px;
            background-color: #fd2838;
            color: #ffffff;
            font-size: 25px;
            font-weight: 700;
            text-align: center;
        }

        .ca-about-guide-item-list {
            .ca-about-guide-item-space {
                padding-top: 10px;

                .ca-about-guide-item {
                    width: 280px;
                    height: 40px;
                    &:hover {
                        background-image: url("/@/assets/frontend/about/item-select.png");
                        background-size: cover;
                        background-repeat: no-repeat;
                    }

                    background-image: url("/@/assets/frontend/about/item-bg.png");
                    background-size: cover;
                    background-repeat: no-repeat;
                    padding: 10px;

                    p {
                        color: #ffffff;
                        font-size: 20px;
                    }
                }
            }
        }
    }

    .ca-about-right {
        margin-top: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-size: 100% 100%;
        background-color: #0b0b1b;

        p
        {
            color: #ffffff;
            font-size: 18px;
            margin-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }
        h1
        {
            width: 740px;
            padding-top: 20px;
            padding-bottom: 20px;
            background-color: #fd2838;
            color: #ffffff;
            font-size: 50px;
            font-weight: 700;
            text-align: center;
        }
    }
}


</style>
