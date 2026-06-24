<template>
  <div class="wrapper">
    <AppHeader />
    <main class="main-content">
      <div class="layout-wrapper">
        <div class="content-area">



          <section class="banner-section">
            <div class="banner-placeholder">
              <img src="/banners/banner.jpg" alt="Лайм Фреш Маркет" />
            </div>
          </section>

          <section class="features-grid">
            <div class="feat-item" v-for="feat in features" :key="feat.title">
              <div class="icon-wrapper">
                <div class="green-circle"></div>
                <img :src="feat.icon" :alt="feat.title" class="feat-icon" />
              </div>
              <div class="feat-content">
                <h3>{{ feat.title }}</h3>
                <p>{{ feat.text }}</p>
              </div>
            </div>
          </section>

          <section class="news-section">
            <div class="section-header">
              <h2>Новости Лайма</h2>
              <a href="#" class="all-news">Все новости →</a>
            </div>
            <div class="news-grid">
              <div class="news-card" v-for="news in newsList" :key="news.title">
                <img :src="news.img" :alt="news.title" />
                <h3>{{ news.title }}</h3>
                <p>{{ news.text }}</p>
                <a href="#" class="read-more">Читать дальше</a>
              </div>
            </div>
          </section>
          <ProductSection
              title="Акционные продукты"
              :products="promoProducts"
          />

          <ProductSection title="Новинки" :products="newProducts" />
          <section class="reviews-section">
            <div class="section-header">
              <h2>Отзывы о лайме</h2>
              <a href="#" class="all-news">Написать отзыв →</a>
            </div>

            <div class="reviews-grid">
              <div class="review-card" v-for="i in 4" :key="i">
                <div class="user-info">
                  <div class="avatar">АП</div>
                  <span>Александр Петров</span>
                </div>
                <p>Спасибо! Все вовремя, качество хорошее, даже в пробки привезли в указанный срок...</p>
              </div>
            </div>
          </section>
        </div>



        <aside class="cart-sidebar">
          <div class="cart-box">
            <h3>Здравствуйте, Михаил!</h3>

            <div class="cart-empty-content">
              <div class="cart-icon-placeholder">
                <img src="/icons/cart-empty.png" alt="Cart" />
              </div>
              <p>Ваша корзина пуста</p>
            </div>

            <button class="btn-catalog">Перейти в каталог</button>

            <div class="promo-text">
              <p>Выбирайте из более чем 1000 свежих товаров!</p>
              <a href="#">Повторить прошлый заказ</a>
            </div>

            <div class="cart-footer">
              <div class="total-info">
                <span>Итого, руб:</span>
                <div class="price">120,85</div>
              </div>
              <button class="btn-order">
                <img src="/icons/cart-icon.png" class="btn-cart-icon" />
                Подтвердить заказ
              </button>
            </div>
          </div>
        </aside>
      </div>
      <AppFooter />
    </main>
  </div>
</template>

<script setup>import { ref } from 'vue';
import ProductSection from '@/components/recipe/ProductSection.vue';
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';

const promoProducts = ref([
  { id: 1, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/shugar.png', reviews: '3 254' },
  { id: 2, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/shugar.png', reviews: '3 254' },
  { id: 3, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/water.png', reviews: '3 254' },
  { id: 4, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/shugar.png', reviews: '3 254' },
  { id: 5, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/shugar.png', reviews: '3 254' },
  { id: 6, name: 'Макаронные изделия Макфа', price: 120, oldPrice: 140, discount: 20, image: '/shugar.png', reviews: '3 254' }
]);
const features = [
  { icon: '/icons/chef.png', title: 'Качество продуктов', text: 'Выбирайте из 40 000 товаров...' },
  { icon: '/icons/fast-order.png', title: 'Легкий заказ', text: 'Выбирайте из 40 000 товаров...' },
  { icon: '/icons/delivery.png', title: 'Доставка до двери', text: 'Выбирайте из 40 000 товаров...' },
  { icon: '/icons/like.png', title: 'Выбор покупателей', text: 'Выбирайте из 40 000 товаров...' }
];

const newsList = [
  { img: '/news1.jpg', title: 'Открытие нового магазина!', text: 'Выбирайте из 40 000 товаров...' },
  { img: '/news2.jpg', title: 'Конкурс рецептов Лайма', text: 'Выбирайте из 40 000 товаров...' },
  { img: '/news3.jpg', title: 'Доставка теперь за 45 минут!', text: 'Выбирайте из 40 000 товаров...' },
  { img: '/news4.jpg', title: 'Теперь и в Деливери!', text: 'Выбирайте из 40 000 товаров...' }
];
</script>


<style scoped>


.layout-wrapper {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.cart-sidebar { position: sticky; top: 20px; }

.cart-box {
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  text-align: center;
}
.btn-catalog { width: 100%; padding: 10px; border: 1px solid #8BC34A; color: #8BC34A; background: none; border-radius: 8px; cursor: pointer; }
.btn-order { width: 100%; padding: 12px; background: #8BC34A; color: white; border: none; border-radius: 8px; margin-top: 10px; cursor: pointer; }
.container-inner {
  margin-right: 1000px;
  margin-left: 100px;
  width: calc(100% - 205px);
  display: block;
}
.cart-box h3 { font-size: 16px; margin-bottom: 20px; }

.cart-empty-content { margin: 30px 0; color: #999; }
.cart-icon-placeholder { width: 80px; margin: 0 auto 10px; opacity: 0.3; }
.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 40px 0; }
.news-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.banner-placeholder img { width: 100%; border-radius: 12px; }

.feat-item {
  grid-column: span 1;
  margin-left: 70px;
}



.btn-catalog {
  width: 100%;
  padding: 12px;
  border: 2px solid #8BC34A;
  color: #8BC34A;
  background: transparent;
  border-radius: 8px;
  font-weight: 600;
}

.promo-text { font-size: 12px; color: #777; margin: 20px 0; }
.promo-text a { color: #8BC34A; text-decoration: none; display: block; margin-top: 10px; }

.cart-footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
.total-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.price { font-size: 20px; font-weight: bold; }

.btn-order {
  width: 100%;
  padding: 12px;
  background: #8BC34A;
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.btn-cart-icon { width: 20px; }


.icon-wrapper {
  position: relative;
  width: 40px;
  height: 40px;

}

.green-circle {
  position: absolute;
  width: 25px;
  height: 25px;
  background: #8BC34A;
  border-radius: 50%;
  right: 0;
  top: 5px;
}

.feat-icon {
  position: relative;
  width: 32px;
  height: 32px;
  z-index: 1;
  object-fit: contain;
}

.feat-content h3 { font-size: 14px; font-weight: 700; margin: 0 0 5px 0; }
.feat-content p { font-size: 11px; color: #666; line-height: 1.3; margin: 0; }

.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 40px 0; }
.feat-item { display: flex; flex-direction: column; align-items: flex-start; }
.feat-icon { width: 30px; height: 50px; margin-bottom: 15px; }

.news-section { margin-top: 60px; }
.section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; }
.news-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.news-card img { width: 247px; height: 162px; object-fit: cover; border-radius: 12px; margin-bottom: 10px; }
.news-card h3 { font-size: 14px; margin-bottom: 8px; }
.news-card p { font-size: 12px; color: #777; margin-bottom: 10px; }
.read-more { color: #8BC34A; text-decoration: underline; font-size: 12px; }
.all-news { color: #8BC34A; font-weight: bold; }
</style>