import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfileView from '../views/ProfileView.vue';
import ProfileSettingsView from '../views/ProfileSettingsView.vue';
import ProfileHistoryView from "@/views/ProfileHistoryView.vue";

const routes = [
  // 1. Добавлен маршрут для главной страницы
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 2. Маршрут для профиля
  {
    path: '/profile',
    component: ProfileView,
    children: [
      { path: '', component: ProfileHistoryView },
      { path: 'settings', component: ProfileSettingsView }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;