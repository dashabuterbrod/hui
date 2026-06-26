<template>
  <div class="product-card">
    <div class="badge" v-if="product?.discount">-{{ product.discount }}%</div>

    <div class="wishlist-icon">♥</div>

    <img :src="product?.image || '/milk.png'" :alt="product?.name" class="product-img" />

    <div class="rating">
      <span class="stars">★★★★☆</span>
      <span class="rating-value">{{ product?.rating || 4.2 }}</span>
    </div>

    <h3 class="product-name">{{ product?.name || 'Макаронные изделия Макфа...' }}</h3>

    <div class="nutrients">Б 2.5 г Ж 20 г У 2.9 г</div>

    <div class="price-row">
      <span class="price">{{ product?.price || 120 }} руб.</span>
      <span class="old-price" v-if="product?.oldPrice">{{ product.oldPrice }} руб.</span>
    </div>

    <button class="add-to-cart">В корзину</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eee;
  padding: 12px;
  border-radius: 12px;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Элементы дизайна */
.wishlist-icon { position: absolute; top: 10px; right: 10px; color: #ddd; font-size: 18px; }
.badge { position: absolute; top: 10px; left: 10px; background: #ff5722; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px; }

.product-img { width: 100%; height: 140px; object-fit: contain; margin-bottom: 8px; }

.rating { display: flex; align-items: center; gap: 5px; margin-bottom: 8px; }
.stars { color: #FFC107; font-size: 14px; }
.rating-value { font-size: 13px; color: #333; font-weight: bold; }

.product-name { font-size: 13px; color: #333; line-height: 1.3; margin: 0 0 5px 0; height: 34px; overflow: hidden; }

.nutrients { font-size: 11px; color: #888; margin-bottom: 10px; }

.price-row { margin-bottom: 10px; display: flex; align-items: baseline; gap: 8px; }
.price { font-weight: 800; font-size: 18px; color: #000; }
.old-price { text-decoration: line-through; color: #aaa; font-size: 13px; }

.add-to-cart {
  width: 100%; background: #8BC34A; color: white; border: none;
  padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer;
  margin-top: auto; /* Важно: прижимает кнопку вниз */
}
</style>