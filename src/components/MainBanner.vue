<template>
  <section class="main-banner">
    <div class="container-inner">
      <div class="banner-slider">
        <img src="/roast.jpg" alt="Главная акция" />
      </div>

      <div class="sidebar-products">
        <div class="mini-card">...</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-banner { padding: 30px 0; }
.container-inner { display: grid; grid-template-columns: 3fr 1fr; gap: 20px; }
.banner-slider { border-radius: 16px; overflow: hidden; }
</style>