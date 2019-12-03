<template>
  <div>
    <modal
      name="success-request-equipment"
      :adaptive="true"
      :resizable="true"
      height="auto"
      id="success-request-equipment"
    >
      <div class="icon icon-success"></div>
      <div class="title-success">Запрос отправлен!</div>
      <div class="modal-text">С вами свяжется наш менеджер</div>
      <div class="modal-buttons">
        <a href="#/CatalogDetail" class="btn link-red">Понятно</a>
      </div>
    </modal>
  </div>
</template>