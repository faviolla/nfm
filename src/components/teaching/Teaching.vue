<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">
            <i class="icon icon-teaching"></i>
            {{title}}
          </span>
        </h1>
        <a href="#/qrCode" class="link-qr">
          <i class="icon icon-qr"></i>
        </a>
      </div>
    </div>
    <div class="section-main">
      <nav class="teaching-list items-list">
        <a href="#/TrainingRegistration_1" class="list-item">
          <span class="item-icon">
            <i class="icon icon-writing"></i>
          </span>
          <span>Запись на обучение</span>
        </a>
        <a href="#/Teachers" class="list-item">
          <span class="item-icon">
            <i class="icon icon-teachers"></i>
          </span>
          <span>Лекторы</span>
        </a>
        <a href="#/TrainingRequestsList" class="list-item">
          <span class="item-icon">
            <i class="icon icon-course-orders"></i>
          </span>
          <span>Мои заявки</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        title: "Обучение"
      };
    }
  };
</script>