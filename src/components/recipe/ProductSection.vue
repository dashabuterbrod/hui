<template>
  <section class="product-section">
    <div class="section-header">
      <h2>{{ title }}</h2>
      <a href="#" class="view-all">Смотреть все →</a>
    </div>

    <div class="product-grid">
      <ProductCard
          v-for="item in products"
          :key="item.id"
          :product="item"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
defineProps(['title', 'products']);
</script>

<style scoped>
.product-section { margin: 40px 0; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.product-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}
/* Полоска под заголовками */
.title-wrapper {
  display: inline-block;
  position: relative;
}
.orange-line {
  height: 4px;
  background-color: #FF9800;
  border-radius: 2px;
  margin-top: 4px;
  width: 100%;
}

/* Исправляем звезды и скидку в карточке (примени к ProductCard.vue) */
.badge {
  background: #FF5722;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  width: fit-content;
  margin: 10px 0;
}
.stars { color: #FFC107; }

.view-all { color: #8BC34A; text-decoration: none; font-size: 14px; }
.reviews-section { margin-top: 60px; }
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}
.review-card {
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 12px;
  background: #fff;
}
.user-info { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.avatar {
  width: 30px; height: 30px; background: #eee; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;
}

</style>