<script setup lang="ts">

import {fullUrl} from "/@/utils/common";
import {Product} from "/@/stores/interface";
import router from "/@/router";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useProducts} from "/@/stores/products";
let cur_products  = ref({} as Product)
const route = useRoute()
const prodcuts = useProducts()
let show_products = ref([] as Product[])

onMounted(() => {
    processProducts();
})

const processProducts = () =>
{
    const catagory_id = route.query.catagory_id
    for (const product of prodcuts.products) {
        if(product.parent_id != 0 && product.parent_id == Number(catagory_id))
        {
            show_products.value.push(product)
        }
    }
}

const onClickProduct = (item: Product) => {
    cur_products.value = item
    router.push({
        name: 'product-details',
        query: {
            product_id: item.id,
            title: item.en_name,
        },
    })
}
</script>

<template>
    <el-row align="middle" justify="space-between">
        <el-space direction="vertical">
            <el-card class="ca-product-content" v-for="(item, idx) in show_products" :key="idx">
                <div v-if="item.layout == 'horizontal'">
                    <el-row justify="center" align="middle">
                        <el-col :span="8">
                            <!--                                        <el-image :src="fullUrl(item.image_small)"/>-->
                            <el-carousel :autoplay="false" indicator-position="outside">
                                <el-carousel-item v-for="(img, index) in item.carousel.split(',')" :key="index">
                                    <el-image :src="fullUrl(img)"/>
                                </el-carousel-item>
                            </el-carousel>
                        </el-col>
                        <el-col :offset="1" :span="15">
                            <el-row><h2>{{ item.en_name }}</h2></el-row>
                            <el-divider></el-divider>
                            <el-row style="height: 300px">{{ item.en_detail }}</el-row>
                            <el-row style="height: 60px" justify="end">
                                <el-button @click="onClickProduct(item)" class="ca-product-item-btn"/>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
                <div v-if="item.layout == 'vertical'">
                    <el-row>
                        <el-image :src="fullUrl(item.image_small)"/>
                    </el-row>
                    <el-row justify="center" align="bottom">
                        <el-col :span="20">
                            <el-row>{{ item.en_name }}</el-row>
                            <el-divider></el-divider>
                            <el-row style="height: 300px">{{ item.en_detail }}</el-row>
                        </el-col>
                        <el-col :span="4">
                            <el-button @click="onClickProduct(item)" class="ca-product-item-btn"/>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </el-space>
    </el-row>
</template>

<style scoped lang="scss">

.ca-product-content {
    background-color: rgba(125, 130, 176, 0.5);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1200px;
}

.ca-product-item-btn
{
    background-image: url('/@/assets/frontend/products/detail-btn.png');
    background-size: 100% 100%;
    width: 200px;
    height: 60px;

    --el-button-hover-bg-color: rgba(0,0,0,0);
    border: 0;
}

</style>
