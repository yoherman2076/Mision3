import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import NotFound from '../views/NotFoundView.vue'
import Trainers from '../views/TrainersView.vue'
import { useAuthStore } from '../stores/auth.ts'

const routes = [
    { 
        path: '/dashboard',
        name: 'dashboard', 
        component: Dashboard,
        meta: { hideNavbar: false,
                requiresAuth: true
        } 
    },
    { 
        path: '/login',
        name: 'login',
        component: Login,
        meta: { hideNavbar: true,
                requiresAuth: false
        }  
    },
    { 
        path: '/trainers',
        name: 'trainers', 
        component: Trainers,
        meta: { hideNavbar: false,
                requiresAuth: true
        }  
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: NotFound,
        meta: { hideNavbar: true,   
                requiresAuth: false
         }  
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