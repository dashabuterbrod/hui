<script setup>
</script>
<template>
  <div class="info-container">
    <section class="settings-section">
      <h3>Контактные данные</h3>
      <div class="form-grid">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Отчество" />
        <input type="text" placeholder="Фамилия" />
        <input type="text" placeholder="Номер телефона" />
        <input type="text" placeholder="Ваш e-mail" />
        <input type="text" placeholder="ДД.ММ.ГГГГ" />
      </div>
    </section>

    <section class="settings-section">
      <h3>Сохранить адрес доставки</h3>
      <div class="address-box">
        <div class="address-item active">
          <span>ул. Пимена-панчанки, д. 12, под. 4, кв. 312</span>
        </div>
        <button class="add-address-btn">+ Добавить адрес</button>
      </div>
      <div class="form-grid mt-20">
        <input type="text" placeholder="Начните вводить новый адрес" />
        <input type="text" placeholder="Подъезд" />
        <input type="text" placeholder="12" />
        <input type="text" placeholder="Квартира" />
      </div>
    </section>

    <section class="settings-section">
      <h3>Карта лояльности</h3>
      <div class="loyalty-cards">
        <div class="add-card"><span>+</span><p>Добавить карту лояльности</p></div>
        <div class="loyalty-card">
          <div class="card-logo">ЛАЙМ</div>
          <p>2200 8756 8777 3245</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.settings-section { background: white; padding: 25px; border: 1px solid #eee; border-radius: 12px; margin-bottom: 20px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; }
.address-item { border: 1px solid #8BC34A; padding: 15px; border-radius: 8px; margin-bottom: 10px; }
.add-address-btn { background: #f9f9f9; border: 1px dashed #ccc; padding: 15px; width: 100%; border-radius: 8px; cursor: pointer; }
.loyalty-cards { display: flex; gap: 20px; }
.loyalty-card { background: #8BC34A; color: white; padding: 20px; border-radius: 10px; width: 250px; }
.add-card { border: 1px dashed #ccc; padding: 20px; border-radius: 10px; text-align: center; width: 250px; cursor: pointer; }
.mt-20 { margin-top: 20px; }
input { padding: 12px; border: 1px solid #ddd; border-radius: 8px; width: 100%; }
</style>