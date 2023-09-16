<template>
    <div class="ca-product-list">
        <el-row class="ca-product-list-content">
            <el-col>
                <el-row align="top" justify="start">
                    <h1>{{$t('products.ALL PRODUCTS')}}</h1>
                </el-row>
                <el-row align="middle" justify="space-between">
                    <el-card class="ca-product-item" v-for="(item, idx) in prodcut_catagorys" :key="idx">
                        <el-image class="ca-product-item-details" @click="onClickCatagory(item)" :src="fullUrl(item.image_small)"/>
                        <div :class="cur_catagpry == item.id ? 'ca-product-item-tips-select' : 'ca-product-item-tips-unselect'">
                            <p>{{ item.en_desc }}</p>
                        </div>
                    </el-card>
                </el-row>
            <router-view :key="$route.path + $route.query.catagory_id"/>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import {fullUrl} from "/@/utils/common";
import {useProducts} from "/@/stores/products";
import {onMounted, reactive, ref} from "vue";
import {Product} from "/@/stores/interface";
import router from "/@/router";
import {useMeta} from "vue-meta";
import {useRoute} from "vue-router";

const prodcuts = useProducts();
let cur_catagpry = ref(0)
let prodcut_catagorys : Product[] = reactive([])

const route = useRoute()

const onClickCatagory = (product : Product) => {
    cur_catagpry.value = product.id
    router.push({
        name: 'products-list',
        query: {
            catagory_id: product.id,
            title: product.en_name,
        },
    })

    setTimeout(() => {
        const moveX = (1920 - window.innerWidth)/2 < 0 ? 0 : (1920 - window.innerWidth)/2
        window.scrollTo(moveX, 320)
    }, 20)
}

onMounted(() => {
    prodcuts.load(() => {
        if(prodcuts.products.length > 0)
        {
            for (const product of prodcuts.products) {
                if(product.parent_id == 0)
                {
                    prodcut_catagorys.push(product)
                }
            }
        }
    });
});

useMeta({description: "products"})
</script>

<style scoped lang="scss">

.ca-product-list {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/products/product-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;

    .ca-product-list-content {
        width: 1200px;
        height: 100%;
        margin: auto;

        h1
        {
            width: 540px;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #fd2838;
            color: #ffffff;
            font-size: 50px;
            font-weight: 700;
            text-align: center;
        }
    }

    @mixin ca-product-item-tips
    {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-left: 50px;
        padding-right: 10px;
        width: 350px;
        height: 80px;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
    }

    .ca-product-item-tips-select
    {
        @include ca-product-item-tips;
        background-image: url("/@/assets/frontend/products/tips-bg.png");
        color: #0a0a0a;
    }

    .ca-product-item-tips-unselect
    {
        @include ca-product-item-tips;
        background-image: url("/@/assets/frontend/products/tips.png");
        color: #ffffff;
    }

    .ca-product-item {
        background-image: url("/@/assets/frontend/products/item-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 400px;
        height: 400px;
        margin: 10px 0 10px 0;

        .ca-product-item-details
        {
            width: 350px; height: 270px;

            &:hover
            {
                cursor: pointer;
            }
        }

        p
        {
            font-size: 18px;
            line-height: 40px;
        }
    }

}

</style>
