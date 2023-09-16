import { defineStore } from 'pinia'
import {FAQs, FAQ, Product, Products} from "/@/stores/interface";
import {CA_PRODUCTS} from "/@/stores/constant/cacheKey";
import {getFAQs} from "/@/api/frontend/faq";

export const useFAQ = defineStore('faq', {
    state: (): FAQs => {
        return {
            faqs: <FAQ[]>[]
        }
    },
    actions: {
        load(callback : () => void) {
            getFAQs().then(res =>{
                if(res != null && res != undefined && res.data != null && res.data != undefined)
                    this.$state.faqs = res.data.faq[0]

                if(callback != null)
                    callback()
            })
        },
        getFAQ(id : number) : FAQ {
            for (const faq of this.$state.faqs) {
                if(faq.id == id)
                    return faq
            }

            return <FAQ>{}
        }
    },
})
