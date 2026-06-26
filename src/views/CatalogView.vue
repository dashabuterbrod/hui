<template>
  <div class="page-container">
    <AppHeader />

    <main class="layout-wrapper">
      <aside class="sidebar">
        <FilterSidebar />
      </aside>

      <div class="content-area">
        <h1>Питьевая вода</h1>

        <div class="catalog-controls">
          <div class="active-filters">
          </div>
          <select class="control-select">
            <option>По популярности</option>
          </select>
        </div>

        <div class="products-grid">
          <ProductCard v-for="i in 4" :key="'first-'+i" :product="sampleProduct" />

          <div class="promo-banner">
            <h3>Закажите домой!</h3>
            <p>Скидка 10% на первый заказ</p>
            <div class="eda">
              <img src="/product.png" alt="eda" />
            </div>

          </div>

          <ProductCard v-for="i in 8" :key="'second-'+i" :product="sampleProduct" />
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
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import MiniCart from '@/components/MiniCart.vue';
import FilterSidebar from '@/components/recipe/FilterSidebar.vue';
import ProductCard from '@/components/recipe/ProductCard.vue';

const sampleProduct = {
  name: 'Макаронные изделия Макфа',
  discount: 26,
  price: 120,
  oldPrice: 140,
  reviews: 4.2
};
</script>

<style scoped>
.layout-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr 320px;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.promo-banner {
  grid-column: span 4;
  background: #FFC107;
  padding: 30px;
  border-radius: 12px;
  text-align: start;
  margin: 20px 0;
  color: #333;
}

.catalog-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.control-select {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.eda {

}
</style>