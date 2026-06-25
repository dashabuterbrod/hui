<template>
  <header class="header">
    <div class="top-bar">
      <div class="container-inner">
        <div class="top-bar__left">
          <span class="top-item"><img src="/phone.png" class="icon-small" /> 6767</span>
          <span class="top-item"><img src="/pozition.png" class="icon-small" /> Магазины ▾</span>
          <span class="top-item"><img src="/car.png" class="icon-small" /> Зона доставки</span>
          <span class="top-item"><img src="/time.png" class="icon-small" /> 17:00 - 17:45 ▾</span>
        </div>
        <div class="top-bar__right">
          <span>Шеф-лайм</span>
          <span>Вакансии</span>
          <span>Вопрос-ответ</span>
          <span>Партнерам</span>
          <span class="bonus-link">Бонусная программа</span>
        </div>
      </div>
    </div>

    <div class="main-bar">
      <div class="container-inner main-content">
        <button class="btn-catalog"><img src="/lupa.png" class="icon-small" />Каталог</button>
        <input type="text" placeholder="Купить молоко" class="search-input" />

        <AppLogo class="logo-sticker" />

        <div class="actions">
          <button class="btn-discount">% Скидки ▾</button>


          <router-link to="/profile" class="action-item-link">
            <div class="action-item">
              <img src="/kabinet.png" class="icon-small" /> Кабинет
            </div>
          </router-link>

          <div class="action-item"><img src="/heart.png" class="icon-small" /> Избранное</div>
          <div class="action-item"><img src="/cart.png" class="icon-small" /> Корзина</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppLogo from '../ui/AppLogo.vue';
</script>

<style scoped>
.header { position: relative; }

.container-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;cursor: pointer }

/* Верхняя серая полоса */
.top-bar { background: #4f4f4f; color: white; padding: 8px 0; font-size: 12px; }
.top-bar__left, .top-bar__right { display: flex; align-items: center; gap: 20px; }
.icon-small { width: 14px; height: 14px; object-fit: contain; }
.bonus-link { color: #cddc39; }

/* Основная часть */
.main-bar { background: white; padding: 20px 0; position: relative; border-bottom: 1px solid #eee;}
.main-content { display: flex; align-items: center; gap: 20px; }

/* Логотип */
.logo-sticker {
  position: absolute !important;
  left: 50% !important;
  top: -45px !important; /* Настрой по высоте, если нужно выше/ниже */
  transform: translateX(-50%) !important;
  z-index: 100 !important;

  /* Строго квадратный размер */
  width: 100px !important;
  height: 100px !important;

  background: white !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;

  /* Убираем всё, что может менять форму */
  padding: 0 !important;
  margin: 0 !important;
  flex: none !important;
  display: block !important;
  overflow: hidden !important;
}

/* Принудительно ограничиваем картинку внутри */
.logo-sticker img, .logo-sticker svg {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

button, .action-item {
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  transition: 0.2s;
}
button { font-family: 'Montserrat', sans-serif; font-weight: 700; cursor: pointer; border-radius: 8px; border: none; transition: 0.2s; cursor: pointer;}
.btn-catalog { background: #8BC34A; color: white; padding: 12px 24px; display: flex; align-items: center; gap: 8px; cursor: pointer }
.btn-discount { background: #FF5722; color: white; padding: 12px 20px; }
.search-input { flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; }
.actions { display: flex; gap: 20px; align-items: center; font-weight: 600; cursor: pointer}
.action-item { display: flex; align-items: center; gap: 6px; cursor: pointer; }
button:hover { opacity: 0.9;}

.action-item-link {
  text-decoration: none;
  color: inherit;
}


</style>