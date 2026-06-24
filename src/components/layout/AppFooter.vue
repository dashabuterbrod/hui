<script setup>
</script>
<template>
  <footer class="footer">
    <div class="container-inner">
      <div class="footer-col logo-col">
        <img src="/logoFooter.png " alt="Лайм" class="footer-logo" />
        <p class="copyright">© 2001-2021 ООО «Лайм»</p>
        <p class="legal">Все права защищены. «Лайм» является зарегистрированным товарным знаком Lime Holding SA.</p>
        <a href="#" class="policy">Политика Конфиденциальности</a>
      </div>

      <div class="footer-col">
        <h3>О компании</h3>
        <ul>
          <li><a href="#">Доставка и оплата</a></li>
          <li><a href="#">Вопрос-ответ</a></li>
          <li><a href="#">Поставщикам</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Политика</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Покупателям</h3>
        <ul>
          <li><a href="#">Бонусная система</a></li>
          <li><a href="#">Как вернуть</a></li>
          <li><a href="#">Как заказать</a></li>
          <li><a href="#">Программа лояльности</a></li>
          <li><a href="#">Акции</a></li>
          <li><a href="#">Шеф-лайм</a></li>
        </ul>
      </div>

      <div class="footer-col support-col">
        <h3>Круглосуточная поддержка</h3>
        <div class="phone"><img src="/phoneFooter.png" class="icon-small" /> 7756</div>
        <div class="store-buttons">
          <button class="store-btn">App Store</button>
          <button class="store-btn">Google Play</button>
        </div>
        <div class="socials">
          <span><img src="/fb.png" class="icon-small" /> </span> <span><img src="/youtube.png" class="icon-small" /> </span> <span><img src="/fb.png" class="icon-small" /> </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: #333; color: #fff; padding: 40px 0; margin-top: 50px; font-size: 14px; font-family: 'Montserrat', sans-serif;}
.container-inner { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.footer-logo { width: 120px; margin-bottom: 15px; }
h3 { font-size: 16px; margin-bottom: 20px; color: #aaa; }
ul { list-style: none; padding: 0; }
li { margin-bottom: 10px; }
a { color: white; text-decoration: none; }

.phone { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
.store-btn { display: block; width: 100%; margin-bottom: 10px; padding: 10px; background: #444; border: 1px solid #666; color: white; border-radius: 6px; cursor: pointer; }

.copyright, .legal, .policy { font-size: 12px; color: #888; margin-bottom: 10px; }
.policy { color: #8BC34A; text-decoration: underline; }
</style>aen