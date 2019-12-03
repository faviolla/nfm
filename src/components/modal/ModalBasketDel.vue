<template>
  <div>
    <modal name="modal-basket" :adaptive="true" height="auto">
      <h3 class="modal-title">Вы точно хотите удалить все товары с корзины?</h3>
      <div class="btn-holder">
        <a href="#/BasketEmpty" class="btn btn-main">Удалить</a>
      </div>
      <div class="btn-holder">
        <button @click="$modal.hide('modal-basket')" class="btn btn-link">Отменить</button>
      </div>
    </modal>
  </div>
</template>
