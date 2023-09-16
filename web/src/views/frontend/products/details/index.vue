<script setup lang="ts">
import {Product} from "/@/stores/interface";
import {onBeforeUpdate, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useProducts} from "/@/stores/products";
import {fullUrl} from "/@/utils/common";
import router from "/@/router";
import {useMeta} from "vue-meta";
const route = useRoute()
const product = useProducts()
const cur_product = ref({} as Product)
const cur_product_parent = ref({} as Product)

onMounted(() => {
    if(product.products.length == 0)
    {
        product.load(() =>
        {
            const product_id = route.query.product_id
            cur_product.value = product.getProduct(Number(product_id))
            cur_product_parent.value = product.getProduct(Number(cur_product.value.parent_id))
            router.currentRoute.value.meta.title = cur_product.value.en_name
            useMeta({description: cur_product.value.en_name})
        })
    }
    else
    {
        const product_id = route.query.product_id
        cur_product.value = product.getProduct(Number(product_id))
        cur_product_parent.value = product.getProduct(Number(cur_product.value.parent_id))
        router.currentRoute.value.meta.title = cur_product.value.en_name
        useMeta({description: cur_product.value.en_name})
    }
})

</script>

<template>
    <div class="ca-product-details">
        <div class="ca-product-details-content">
            <el-row>
                <el-breadcrumb class="ca-product-details-breadcrumb" separator=">">
                    <el-breadcrumb-item :to="{ name: 'products' }"><p>all products</p></el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ name: 'products' }"><p>{{ cur_product_parent.en_name }}</p></el-breadcrumb-item>
                    <el-breadcrumb-item><p>{{ cur_product.en_name?.substring(0, 30) }}...</p></el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <el-row justify="center" align="middle">
                <el-image :src="fullUrl(cur_product.image_large)"/>
            </el-row>
        </div>
    </div>
</template>

<style scoped lang="scss">

.ca-product-details {
    padding-top: 20px;
    background-image: url("/@/assets/frontend/products/detail-bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1920px;


    .ca-product-details-content {
        width: 1200px;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.2);

        .ca-product-details-breadcrumb
        {
            margin-top: 10px;
            margin-bottom: 10px;
            p{
                font-size: 15px;
            }
        }
    }

    h1
    {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 30px;
    }

    p{
        margin-left: 10px;
        font-size: 20px;
    }
}

</style>
