import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'Content',
          components: {
            content: () => import('@/components/home-content/HomeIntro.vue'),
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/app',
      name: 'App',
      component: () => import('@/views/MainAppView.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          components: {
            content: () => import('@/components/app-content/DashboardContent.vue'),
          },
        },
        {
          path: 'listings',
          name: 'Listings',
          children: [
            {
              path: '',
              name: 'Listings',
              components: {
                content: () => import('@/components/app-content/ListingsContent.vue'),
              },
            },
            {
              path: 'create',
              name: 'Create Listings',
              components: {
                content: () => import('@/components/listings/CreateListingContent.vue'),
              },
            },
          ],
        },
        {
          path: 'settings',
          name: 'Settings',
          components: {
            content: () => import('@/components/app-content/SettingsContent.vue'),
          },
        },
        {
          path: 'schedule',
          name: 'Schedule',
          components: {
            content: () => import('@/components/app-content/ScheduleContent.vue'),
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
