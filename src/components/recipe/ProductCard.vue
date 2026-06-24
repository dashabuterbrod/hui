<template>
  <div class="product-card">
    <div class="badge" v-if="product.discount">-{{ product.discount }}%</div>
    <img :src="product.image" :alt="product.name" class="product-img" />
    <div class="rating"> <img src="/icons/star.png" class="btn-cart-icon" /><img src="/icons/star.png" class="btn-cart-icon" /><img src="/icons/star.png" class="btn-cart-icon" /><img src="/icons/star.png" class="btn-cart-icon" /><img src="/icons/starbad.png" class="btn-cart-icon" /><span class="reviews">{{ product.reviews }}</span></div>
    <h3 class="product-name">{{ product.name }}</h3>
    <div class="price-row">
      <span class="price">{{ product.price }} ₽</span>
      <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice }} ₽</span>
    </div>
    <button class="add-to-cart">+ В корзину</button>
  </div>
</template>

<script setup>
defineProps(['product']);
</script>

<style scoped>

.product-card { border: 1px solid #eee; padding: 15px; border-radius: 12px; position: relative; background: #fff; }
.product-img { width: 100%; height: 150px; object-fit: contain; }
.badge { position: absolute; top: 10px; left: 10px; background: #ff5722; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
.price { font-weight: bold; font-size: 18px; color: #333; }
.old-price { text-decoration: line-through; color: #999; font-size: 12px; margin-left: 5px; }
.add-to-cart { width: 100%; background: #8BC34A; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; margin-top: 10px; }
</style>