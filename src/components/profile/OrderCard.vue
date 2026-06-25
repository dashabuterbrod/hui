<template>
  <div class="order-card">






    <div class="order-info">
      <div class="order-date">{{ date }}</div>
      <div class="order-address">{{ address }}</div>
      <div class="order-total">Итого: <b>{{ total }} 360 руб.</b></div>
      <button class="btn-repeat">Повторить заказ</button>
    </div>

    <div class="items-grid" :class="{ 'expanded': isExpanded }">
      <div class="item" v-for="i in 6" :key="i">
        <div class="wishlist-icon">♥</div>
        <div class="discount-badge">-26%</div>
        <img src="/milk.png" alt="Продукт" />
        <div class="rating">★★★★☆ 4.2</div>
        <p class="item-title">Макаронные изделия Макфа...</p>

        <div class="nutrients">
          <span>Б 2.5 г</span> <span>Ж 20 г</span> <span>У 2.9 г</span>
        </div>

        <div class="price-row">
          <span class="current-price">120 руб.</span>
          <span class="old-price">140 руб.</span>
        </div>

        <button class="btn-add">В корзину</button>
      </div>
    </div>

    <div class="toggle-btn" @click="isExpanded = !isExpanded">
      {{ isExpanded ? 'Свернуть ↑' : 'Смотреть все ↓' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isExpanded = ref(false); // Состояние
</script>

<style scoped>
/* Стили для того, чтобы всё встало на места */
.order-card { display: flex; gap: 20px; border: 1px solid #eee; padding: 25px; border-radius: 12px; margin-bottom: 20px; position: relative; }
.items-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; overflow: hidden; max-height: 380px; }
.items-grid.expanded { max-height: none; }

/* Стили карточки внутри заказа */
.item { border: 1px solid #eee; padding: 10px; border-radius: 8px; position: relative; }
.item img { width: 100%; height: 100px; object-fit: contain; }
.wishlist-icon { position: absolute; top: 5px; right: 5px; color: #ccc; }
.discount-badge { position: absolute; top: 5px; left: 5px; background: #FF5722; color: white; padding: 2px 5px; font-size: 10px; border-radius: 4px; }
.item-title { font-size: 12px; margin: 5px 0; height: 30px; overflow: hidden; }
.nutrients { display: flex; gap: 5px; font-size: 10px; color: #999; margin-bottom: 5px; }
.current-price { font-weight: 700; }
.old-price { text-decoration: line-through; color: #999; font-size: 12px; margin-left: 5px; }
.btn-add { width: 100%; background: #8BC34A; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; margin-top: 5px;}

.toggle-btn {
  position: absolute;
  right: 25px;
  top: 25px;
  color: #8BC34A;
  cursor: pointer;
  font-weight: 600;
  z-index: 10;
  background: white;
  padding: 5px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  overflow: hidden;
  max-height: 250px; /* Начальная высота */
  transition: max-height 0.3s ease; /* Плавность */
}

.items-grid.expanded {
  max-height: 2000px; /* Достаточно большое число, чтобы все влезло */
}

.order-meta {
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.total-price-wrapper {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

.total-price-wrapper .total-value {
  color: #FF5722; /* Цвет цены как на макете */
  font-size: 20px;
  margin-left: 5px;
}

.repeat-order-btn {
  background: #CDDC39; /* Цвет "Лайм" */
  color: #333;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
}

.repeat-order-btn:hover {
  background: #C0CA33;
}

.order-date-time {
  font-size: 14px;
  color: #666;
}

.address {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  line-height: 1.4;
}


.order-meta {
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.total-price-wrapper {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

.total-price-wrapper .total-value {
  color: #FF5722; /* Цвет цены как на макете */
  font-size: 20px;
  margin-left: 5px;
}

.repeat-order-btn {
  background: #CDDC39; /* Цвет "Лайм" */
  color: #333;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
}

.repeat-order-btn:hover {
  background: #C0CA33;
}

.order-date-time {
  font-size: 14px;
  color: #666;
}

.address {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  line-height: 1.4;
}

.btn-repeat{
  background: #CDDC39; /* Цвет "Лайм" */
  color: #333;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
}
</style>