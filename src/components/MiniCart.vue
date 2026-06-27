<template>
  <div class="mini-cart">
    <h3>Корзина ({{ store.cart.length }})</h3>

    <div class="cart-items" v-if="store.cart.length > 0">
      <div v-for="item in store.cart" :key="item.id" class="cart-item">
        <img :src="item.image || '/milk.png'" :alt="item.name" />
        <div class="item-info">
          <p>{{ item.name }}</p>
          <span>{{ item.quantity }} x {{ item.price }} ₽</span>
        </div>
        <button class="remove-btn" @click="store.removeFromCart(item.id)">×</button>
      </div>
    </div>

    <p v-else class="empty-msg">Корзина пуста</p>

    <div class="cart-footer" v-if="store.cart.length > 0">
      <div class="total">Итого: <b>{{ store.totalPrice }} ₽</b></div>
      <button class="btn-confirm" @click="confirmOrder">Подтвердить заказ</button>
    </div>

    <div v-if="showNotification" class="notification">
      Ваш заказ успешно принят!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const store = useCartStore();
const showNotification = ref(false);

const confirmOrder = () => {
  showNotification.value = true;


  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};


</script>

<style scoped>

.notification {
  margin-top: 15px;
  padding: 10px;
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.mini-cart { border: 1px solid #eee; padding: 20px; border-radius: 12px; background: #fff; }
.cart-items { margin: 20px 0; max-height: 400px; overflow-y: auto; }
.cart-item { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; font-size: 13px; }
.cart-item img { width: 40px; height: 40px; object-fit: contain; }
.item-info p { margin: 0; font-weight: 500; }
.remove-btn { background: none; border: none; color: #ff5722; cursor: pointer; margin-left: auto; }
.total { margin-bottom: 15px; font-size: 16px; }
.empty-msg { color: #999; text-align: center; margin: 20px 0; }
.btn-confirm { background: #8BC34A; color: white; width: 100%; padding: 10px; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
</style>