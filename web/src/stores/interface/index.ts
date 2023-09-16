// 变量名对应含义请在 /stores/* 里边找
import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

export interface Layout {
    showDrawer: boolean
    shrink: boolean
    layoutMode: string
    mainAnimation: string
    isDark: boolean
    menuWidth: number
    menuDefaultIcon: string
    menuCollapse: boolean
    menuUniqueOpened: boolean
    menuShowTopBar: boolean
    menuBackground: string[]
    menuColor: string[]
    menuActiveBackground: string[]
    menuActiveColor: string[]
    menuTopBarBackground: string[]
    headerBarTabColor: string[]
    headerBarBackground: string[]
    headerBarHoverBackground: string[]
    headerBarTabActiveBackground: string[]
    headerBarTabActiveColor: string[]
}

export interface NavTabs {
    activeIndex: number
    activeRoute: RouteLocationNormalized | null
    tabsView: RouteLocationNormalized[]
    tabFullScreen: boolean
    tabsViewRoutes: RouteRecordRaw[]
    authNode: Map<string, string[]>
}

export interface MemberCenter {
    open: boolean
    layoutMode: string
    activeRoute: RouteRecordRaw | RouteLocationNormalized | null
    viewRoutes: RouteRecordRaw[]
    showHeadline: boolean
    authNode: Map<string, string[]>
    shrink: boolean
    menuExpand: boolean
}

export interface AdminInfo {
    id: number
    username: string
    nickname: string
    avatar: string
    lastlogintime: string
    token: string
    refreshToken: string
    super: boolean
}

export interface UserInfo {
    id: number
    username: string
    nickname: string
    email: string
    mobile: string
    gender: number
    birthday: string
    money: number
    score: number
    avatar: string
    lastlogintime: string
    lastloginip: string
    jointime: string
    motto: string
    token: string
    refreshToken: string
}

export interface TaskItem {
    // 任务唯一标识
    uuid: string
    // 创建时间
    createtime: string
    // 状态
    status: number
    // 命令
    command: string
    // 命令执行日志
    message: string[]
    // 显示命令执行日志
    showMessage: boolean
    // 失败阻断后续命令执行
    blockOnFailure: boolean
    // 扩展信息，自动发送到后台
    extend: string
    // 执行结果回调
    callback: Function
}

export interface Terminal {
    show: boolean
    showDot: boolean
    taskList: TaskItem[]
    packageManager: string
    showPackageManagerDialog: boolean
    showConfig: boolean
    automaticCleanupTask: string
    port: string
}

export interface DefaultKV {
    key : string
    value : string
}


export interface SiteConfig {
    siteName: string
    recordNumber?: string
    version: string
    cdnUrl: string
    apiUrl: string
    phone: string
    email: string
    address: string
    facebook: string
    instagram: string
    whatsapp: string
    twitter: string
    district: string
    street: string
    index_faq_1: DefaultKV[]
    index_faq_2: DefaultKV[]
    index_faq_3: DefaultKV[]
    index_product_list: DefaultKV[]
    index_product_left: DefaultKV[]
    index_product_right: DefaultKV[]
    upload: {
        mode: string
        maxsize: number
        mimetype: string
        savename: string
        url?: string
        params?: anyObj
    }
}

export interface Products {
    products : Product[]
}

export interface Product {
    id : number
    parent_id : number
    name : string
    layout : number
    en_name : string
    desc : string
    en_desc : string
    detail : string
    en_detail : string
    image_small : string
    image_mid : string
    image_large : string
    carousel : string
    enable : number

    details : string[]
}

export interface News {
    news : New[]
}

export interface New {
    id : number
    type : string
    title : string
    en_title : string
    desc : string
    en_desc : string
    content : string
    en_content : string
    image : string
    enable : number
    video: string
    create_time :number
}

export interface FAQs {
    faqs : FAQ[]
}

export interface FAQ {
    id : number
    title: string
    en_title: string
    content : string
    en_content : string
    enable : number
    rich_content : string
    en_rich_content : string
}
