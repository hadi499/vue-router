import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import JobsPage from '@/pages/JobsPage.vue';
import NotFound from '@/pages/NotFound.vue';
import JobPage from '@/pages/JobPage.vue';
import AddJob from '@/pages/AddJob.vue';
import EditJob from '@/pages/EditJob.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsPage,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJob,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobPage,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJob,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound,
        },
    ],
});

export default router;
