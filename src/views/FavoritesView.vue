<template>
  <div class="page-container">
    <AppHeader />

    <main class="layout-wrapper">
      <div class="content-area">
        <h1>Избранное <span v-if="store?.favorites?.length > 0">{{ store.favorites.length }} товаров</span></h1>

        <div v-if="!store?.favorites?.length" class="empty-state">
          <img src="/eda.png" alt="Пусто" />
          <h2>Добавьте товары в избранное</h2>
          <p>Чтобы добавить товары, нажмите на сердце</p>

          <div class="button-group">
            <router-link to="/catalog" class="btn-catalog">Перейти в каталог</router-link>
            <router-link to="/" class="btn-home">На главную</router-link>
          </div>

        </div>

        <div v-else class="products-grid">
          <ProductCard
              v-for="product in store.favorites"
              :key="product.id"
              :product="product"
          />
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
import { useCartStore } from '@/stores/useCartStore.js';
const store = useCartStore();
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import MiniCart from '@/components/MiniCart.vue';
import ProductCard from '@/components/recipe/ProductCard.vue';


</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.layout-wrapper {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

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


.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn-home {
  padding: 12px 30px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
}

.btn-home:hover {
  background: #e0e0e0;
}
</style>