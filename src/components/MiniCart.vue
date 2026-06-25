<template>
  <div class="mini-cart">
    <h3>Корзина (4)</h3>
    <div class="cart-items">
      <div v-for="i in 4" :key="i" class="cart-item">
        <img src="/milk.png" alt="Товар" />
        <div class="item-info">
          <p>Макаронные изделия...</p>
          <span>2 x 120 руб.</span>
        </div>
      </div>
    </div>

    <div class="cart-footer">
      <div class="total">Итого: <b>120,85 ₽</b></div>
      <button class="btn-confirm">Подтвердить заказ</button>
    </div>
  </div>
</template>

<style scoped>
.mini-cart { border: 1px solid #eee; padding: 20px; border-radius: 12px; background: #fff; }
.cart-item { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
.cart-item img { width: 40px; }
.btn-confirm { background: #8BC34A; color: white; width: 100%; padding: 10px; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
</style>