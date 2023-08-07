import { createRouter, createWebHashHistory } from 'vue-router'
// import type { RouteParams, RouteRecordRaw } from 'vue-router'
// import Home from 'src/views/Home.vue'
// import { isAuthorized } from 'src/store/user'
// import { isAuthorized } from './store/user'
// 这里暂时硬编码，等实现了登录功能后再从全局状态库中动态获取
// true:已登录  false:未登录
//const isAuthorized = () => false

// export type AppRouteNames =
//   | 'global-feed'
//   | 'my-feed'
//   | 'tag'
//   | 'article'
//   | 'create-article'
//   | 'edit-article'
//   | 'login'
//   | 'register'
//   | 'profile'
//   | 'profile-favorites'
//   | 'settings'

export const routes = [
    {
    
        path: '/',
        redirect: 'login',
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../components/MyLogin.vue'),
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('../components/MyRegister.vue'),
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../components/MyHome.vue'),
    }

    //   {
    //     name: 'login',
    //     path: '/login',
    //     component: () => import('../views/Login.vue'),
    //     // 路由独享守卫,防止已登录用户再次进入登录页面 
    //     beforeEnter: () => !isAuthorized(),
    //   },
    //   {
    //     name: 'register',
    //     path: '/register',
    //     component: () => import('../views/Register.vue'),
    //     // 路由独享守卫,防止已登录用户进入注册页面
    //     beforeEnter: () => !isAuthorized(),
    //   },

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

