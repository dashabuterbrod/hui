<template>
  <div class="page-container">
    <AppHeader />

    <main class="layout-wrapper">
      <div class="content-area">
        <h1>Избранное <span v-if="favorites.length > 0">{{ favorites.length }} товаров</span></h1>

        <div v-if="favorites.length === 0" class="empty-state">
          <img src="/public/eda.png" alt="Пусто" />
          <h2>Добавьте товары в избранное</h2>
          <p>Для того чтобы добавить товары в избранное, просто нажмите на значок 🤍 в углу товара</p>
          <router-link to="/catalog" class="btn-catalog">Перейти в каталог</router-link>
        </div>

        <div v-else class="products-grid">
          <div v-for="product in favorites" :key="product.id">
          </div>
        </div>
      </div>

      <aside class="cart-sidebar">
        <MiniCart />
      </aside>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import MiniCart from '@/components/MiniCart.vue';

// Пока массив пуст — будет показываться "пустое" состояние
const favorites = ref([]);
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

/* Стили для пустого состояния */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-state h2 { font-size: 24px; margin: 20px 0 10px; }
.empty-state p { color: #666; max-width: 350px; margin-bottom: 25px; }

.btn-catalog {
  padding: 12px 30px;
  background: white;
  border: 1px solid #8BC34A;
  color: #8BC34A;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
}

.btn-catalog:hover { background: #8BC34A; color: white; }
</style>