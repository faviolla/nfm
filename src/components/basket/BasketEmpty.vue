<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/index.html" class="link-back">
          <i class="icon icon-close"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="noresult">
        <div class="basket-icon-grey">
          <i class="icon icon-basket-grey"></i>
        </div>
        <div class="noresult-title">Ваша корзина пуста</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Корзина"
    };
  }
};
</script>