import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/pages/Dashboard.vue'),
                    children: [
                        {
                            path: '/add-unicorn',
                            name: 'Unicorn-add',
                            component: () => import('@/pages/AddEditUnicorn.vue')
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;
