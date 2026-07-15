import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import NotFound from '../views/NotFoundView.vue'
import Trainers from '../views/TrainersView.vue'
import { useAuthStore } from '../stores/auth.ts'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: 'trainers',
                name: 'trainers',
                component: Trainers,
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


router.beforeEach((to) => {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return { name: 'login' }
    }
    if (to.name === 'login' && auth.isAuthenticated) {
        return { name: 'dashboard'}
    }
})