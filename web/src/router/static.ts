import { RouteRecordRaw } from 'vue-router'

const pageTitle = (name: string): string => {
    return `pagesTitle.${name}`
}

/*
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
    {
        // 首页
        path: '/',
        name: '/',
        component: () => import('/@/views/frontend/index.vue'),
        meta: {
            title: pageTitle('index'),
        },
        children:[
            {
                // 首页
                path: 'main',
                name: 'main',
                component: () => import('/@/views/frontend/main/index.vue'),
                meta: {
                    title: pageTitle('index'),
                },
            },
            {
                //关于我们
                path: 'aboutus',
                name: 'aboutus',
                component: () => import('/@/views/frontend/aboutUs/index.vue'),
                meta: {
                    title: pageTitle('aboutUs'),
                    titleBG: 'aboutUs',
                }
            },
            {
                //商品页
                path: 'products',
                name: 'products',
                component: () => import('/@/views/frontend/products/index.vue'),
                meta: {
                    title: pageTitle('products'),
                },
                children:[
                    {
                        path: 'products-list',
                        name: 'products-list',
                        component: () => import('/@/views/frontend/products/list/index.vue'),
                        meta: {
                            title: pageTitle('products-list'),
                        },
                    },
                ]
            },
            {
                path: 'product-details',
                name: 'product-details',
                component: () => import('/@/views/frontend/products/details/index.vue'),
                meta: {
                    title: pageTitle('product-details'),
                },
            },
            {
                path: 'faq',
                name: 'faq',
                component: () => import('/@/views/frontend/faq/index.vue'),
                meta: {
                    title: pageTitle('faq'),

                },
            },
            {
                path: 'faq-details',
                name: 'faq-details',
                component: () => import('/@/views/frontend/faq/details/index.vue'),
                meta: {
                    title: pageTitle('faq-details'),
                },
            },
            {
                path: 'news',
                name: 'news',
                component: () => import('/@/views/frontend/news/index.vue'),
                meta: {
                    title: pageTitle('news'),
                },
            }
            ,
            {
                path: 'contact',
                name: 'contact',
                component: () => import('/@/views/frontend/contact/index.vue'),
                meta: {
                    title: pageTitle('contact'),
                    titleBG: 'contact',
                },
            }
        ]
    },
    {
        // 管理员登录页
        path: '/admin/login',
        name: 'adminLogin',
        component: () => import('/@/views/backend/login.vue'),
        meta: {
            title: pageTitle('adminLogin'),
        },
    },
    {
        path: '/:path(.*)*',
        redirect: '/404',
    },
    {
        // 404
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/common/error/404.vue'),
        meta: {
            title: pageTitle('notFound'), // 页面不存在
        },
    },
    {
        // 后台找不到页面了-可能是路由未加载上
        path: '/admin:path(.*)*',
        redirect: (to) => {
            return {
                name: 'adminMainLoading',
                params: {
                    to: JSON.stringify({
                        path: to.path,
                        query: to.query,
                    }),
                },
            }
        },
    },
    {
        // 会员中心找不到页面了
        path: '/user:path(.*)*',
        redirect: (to) => {
            return {
                name: 'userMainLoading',
                params: {
                    to: JSON.stringify({
                        path: to.path,
                        query: to.query,
                    }),
                },
            }
        },
    },
    {
        // 无权限访问
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/common/error/401.vue'),
        meta: {
            title: pageTitle('noPower'),
        },
    },
]

/*
 * 后台基础静态路由
 */
const adminBaseRoute: RouteRecordRaw = {
    path: '/admin',
    name: 'admin',
    component: () => import('/@/layouts/backend/index.vue'),
    redirect: '/admin/loading',
    meta: {
        title: pageTitle('admin'),
    },
    children: [
        {
            path: 'loading',
            name: 'adminMainLoading',
            component: () => import('/@/layouts/common/components/loading.vue'),
            meta: {
                title: pageTitle('Loading'),
            },
        },
    ],
}

/*
 * 会员中心基础静态路由
 */
const memberCenterBaseRoute: RouteRecordRaw = {
    path: '/user',
    name: 'user',
    component: () => import('/@/layouts/frontend/user.vue'),
    redirect: '/user/loading',
    meta: {
        title: pageTitle('User'),
    },
    children: [
        {
            path: 'loading',
            name: 'userMainLoading',
            component: () => import('/@/layouts/common/components/loading.vue'),
            meta: {
                title: pageTitle('Loading'),
            },
        },
    ],
}

staticRoutes.push(adminBaseRoute)
staticRoutes.push(memberCenterBaseRoute)

export { staticRoutes, adminBaseRoute, memberCenterBaseRoute}
