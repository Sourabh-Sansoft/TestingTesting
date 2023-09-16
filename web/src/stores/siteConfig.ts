import { defineStore } from 'pinia'
import { SiteConfig } from '/@/stores/interface'

export const useSiteConfig = defineStore('siteConfig', {
    state: (): SiteConfig => {
        return {
            whatsapp: '',
            facebook: '',
            instagram: '',
            twitter: '',
            address: "",
            email: "",
            phone: "",
            siteName: '',
            recordNumber: '',
            version: '',
            cdnUrl: '',
            apiUrl: '',
            district: '',
            street: '',
            index_faq_1: [],
            index_faq_2: [],
            index_faq_3: [],
            index_product_list : [],
            index_product_left : [],
            index_product_right : [],
            upload: {
                mode: 'local',
                maxsize: 0,
                mimetype: '',
                savename: '',
            }
        }
    },
    actions: {
        dataFill(state: SiteConfig) {
            this.$state = state
        },
    },
})
