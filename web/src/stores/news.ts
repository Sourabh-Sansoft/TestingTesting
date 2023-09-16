import { defineStore } from 'pinia'
import {New,News} from "/@/stores/interface";
import {CA_NEWS} from "/@/stores/constant/cacheKey";
import {getNews} from "/@/api/frontend/news";

export const useNews = defineStore('news', {
    state: (): News => {
        return {
            news: <New[]>[]
        }
    },
    actions: {
        load(callback : () => void) {
            getNews().then(res =>{
                if(res != null && res != undefined && res.data != null && res.data != undefined)
                {
                    this.$state.news = res.data.news[0]
                    if(callback != null)
                        callback()
                }
            })
        },
        getNew(id : number) : New {
            return this.$state.news[id - 1]
        }
    },
    persist: {
        key : CA_NEWS
    },
})
