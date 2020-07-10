import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'ComponentToolbox',
        component: () => import('../views/ComponentToolbox.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
