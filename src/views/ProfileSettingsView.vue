<template>
  <div class="settings-container">
    <section class="settings-section">
      <h3>Смена пароля</h3>
      <div class="password-form">
        <input type="password" placeholder="Старый пароль" />
        <input type="password" placeholder="Новый пароль" />
        <input type="password" placeholder="Повторите новый пароль" />
        <button class="btn-save">Сменить пароль</button>
      </div>
    </section>

    <section class="settings-section">
      <h3>Уведомления</h3>
      <div class="notifications-form">
        <label class="checkbox-label">
          <input type="checkbox" />
          <span>Я даю своё согласие получать новости об акциях, скидках и лучших предложениях ООО «ФРЕШМАРКЕТ ЛАЙМ» и привлеченных им партнеров по SMS, Viber и иными доступными способами.</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" checked />
          <span>Я даю своё согласие получать новости об акциях, скидках и лучших предложениях ООО «ФРЕШМАРКЕТ ЛАЙМ» и привлеченных им партнеров по SMS, Viber и иными доступными способами.</span>
        </label>
      </div>
    </section>
  </div>
</template>

<style scoped>
.settings-section {
  background: white;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 20px;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
}

.btn-save {
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.btn-save:hover {
  background: #d0d0d0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
}
</style>