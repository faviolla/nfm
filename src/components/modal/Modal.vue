<template>
  <div>
    <button @click="$modal.show('hello-world')">Показать модальное окно</button>
    <modal name="hello-world" :adaptive="true">
      <h3>Заявка отправлена!</h3>
      <p>С вами свяжется наш менеджер</p>
      <div>
        <button @click="$modal.hide('hello-world')">Понятно</button>
      </div>
    </modal>
  </div>
</template>
