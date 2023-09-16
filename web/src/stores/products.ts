import { defineStore } from 'pinia'
import {Product, Products} from "/@/stores/interface";
import {CA_PRODUCTS} from "/@/stores/constant/cacheKey";
import {getProducts} from "/@/api/frontend/products";

export const useProducts = defineStore('products', {
    state: (): Products => {
        return {
            products: <Product[]>[]
        }
    },
    actions: {
        load(callback : () => void) {
            getProducts().then(res =>{
                if(res != null && res != undefined && res.data != null && res.data != undefined)
                    this.$state.products = res.data.products[0]
                for (const p of this.$state.products) {
                    p.details = p.detail.split('\n')
                }
                if(callback != null)
                    callback()
            })
        },
        getProduct(id : number) : Product {
            for (const product of this.$state.products) {
                if(product.id == id)
                    return product
            }
            return <Product>{}
        }
    },
})
