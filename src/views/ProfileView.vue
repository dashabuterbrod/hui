<template>
  <div class="profile-layout">
    <AppHeader />

    <main class="main-content">
      <div class="layout-wrapper">
        <div class="content-area">

          <div class="back-nav">
            <router-link to="/" class="back-link">
              ← На главную
            </router-link>
          </div>

          <div class="profile-tabs">
          </div>


          <div class="profile-tabs">
            <span class="tab" :class="{ active: currentTab === 'info' }" @click="currentTab = 'info'">Личная информация</span>
            <span class="tab" :class="{ active: currentTab === 'settings' }" @click="currentTab = 'settings'">Настройки</span>
            <span class="tab" :class="{ active: currentTab === 'history' }" @click="currentTab = 'history'">История покупок</span>
          </div>

          <div v-if="currentTab === 'history'">
            <div class="filter-bar">
              <span>По дате заказа ▾</span>
              <span>По стоимости ▾</span>
            </div>
            <OrderCard
                v-for="order in orders"
                :key="order.id"
                :date="order.date"
                :address="order.address"
                :total="order.total"
            />
          </div>

          <div v-if="currentTab === 'settings'">
            <ProfileSettingsView />
          </div>

          <div v-if="currentTab === 'info'">
            <ProfileInfoView />
          </div>
        </div>

        <aside class="cart-sidebar">
          <MiniCart />
        </aside>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProfileInfoView from '@/views/ProfileInfoView.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import OrderCard from '@/components/profile/OrderCard.vue';
import MiniCart from '@/components/MiniCart.vue';
import ProfileSettingsView from '@/views/ProfileSettingsView.vue'; // Убедись, что путь правильный

const currentTab = ref('history'); // Состояние текущей вкладки

const orders = ref([
  { id: 1, date: '12.03.2020 12:45', address: 'ул.Лимена-панчанки, д. 12, под. 4, кв. 312', total: 956 },
  { id: 2, date: '12.03.2020 12:45', address: 'ул.Лимена-панчанки, д. 12, под. 4, кв. 312', total: 956 }
]);
</script>

<style scoped>
.layout-wrapper {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile-tabs { display: flex; gap: 40px; margin-bottom: 30px; }

.tab {
  font-weight: 700;
  color: #999;
  padding-bottom: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.tab:hover { color: #555; }

.tab.active {
  color: #333;
  border-bottom: 3px solid #8BC34A;
}

.filter-bar { margin-bottom: 20px; font-size: 14px; color: #666; }



.back-nav {
  margin-bottom: 20px;
}

.back-link {
  color: #8BC34A; /* Цвет лайма, как в дизайне */
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.7;
}
</style>