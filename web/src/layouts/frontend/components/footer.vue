<template>
  <el-footer class="ca-footer">
    <el-row class="ca-main-content-btn" justify="center" align="middle">
      <el-space style="color: #03bebf" spacer="|" size="large">
        <el-button @click="onclickIndex(idx)" v-for="idx in 6" :key="idx" text>
          <p>{{$t('nav_item_' + idx)}}</p>
        </el-button>
      </el-space>
      <el-image @click="onClickTop" style="float: right; width: 50px; height: 50px" :src="getAssetsUrl('footer/top.png')"/>
    </el-row>
    <el-row class="ca-main-content-slogan" justify="center" align="middle">
      <div class="footer-text">
        <p>{{$t('Shell and Tube Heat Exchanger Manufacturer & Supplier for Pharmaceutical Industry')}}</p>
        <p>WE ARE PROFESSIONAL HIGH-QUALITY HEAT EXCHANGER</p>
      </div>
    </el-row>
  </el-footer>
</template>

<script setup lang="ts">
import {getAssetsUrl} from "/@/utils/common";
import router from "/@/router";

const onClickTop = () =>
{
    window.scrollTo(0, 0);
}

const onclickIndex = (idx: number) => {
  switch (idx) {
    case 1:
      router.push("/main");
      break;
    case 2:
      router.push("/aboutus");
      break;
    case 3:
      router.push("/products");
      break;
    case 4:
      router.push("/faq");
      break;
    case 5:
      router.push("/news");
      break;
    case 6:
      router.push("/contact");
      break;
    case 7: // Added case for Sitemap
      router.push("/sitemap");
      break;
    default:
      router.push("/main");
  }
}
</script>

<style lang="scss">
.ca-footer {
    width: 1920px;
    height: 100px;
    margin: auto;
    background-repeat: no-repeat;
    background-color: #0a0a0a;
    background-size: 100% 100%;
    background-position: center;

    .ca-main-content-btn {
        height: 50px;

        p
        {
            color: #03bebf;
        }
    }

    .ca-main-content-slogan {
        background-color: #bfbfbf;
        height: 50px;

        p
        {
            font-size: 15px;
            color: #0a0a0a;
        }
    }
}

</style>
