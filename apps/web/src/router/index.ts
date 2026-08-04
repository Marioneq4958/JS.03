import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/collections',
      name: 'collectionList',
      component: () => import('@/views/CollectionListView.vue'),
    },
    {
      path: '/collections/:id',
      name: 'collection',
      component: () => import('@/views/CollectionView.vue'),
      props: true,
    },
    {
      path: '/collections/:collectionId/problems/:problemId',
      name: 'problem',
      component: () => import('@/views/ProblemView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'collectionList' },
    },
  ],
});

export default router;
