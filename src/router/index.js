import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import CatalogView from '@/views/CatalogView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/profile', component: ProfileView },
  { path: '/favorites', name: 'favorites', component: FavoritesView },
  { path: '/catalog', name: 'catalog', component: CatalogView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Отладочный лог: откройте консоль F12, если при клике
// там не появится "Переход на:", значит, проблема в ссылке (шаг 1)
router.beforeEach((to, from, next) => {
  console.log('Переход на:', to.path);
  next();
});

export default router;