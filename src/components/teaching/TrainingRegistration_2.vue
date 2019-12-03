<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRegistration_1" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="selecting-title">Выберите тему обучения</div>
      <div class="items-list-holder">
        <nav class="items-list">
          <span
            class="list-item"
            v-for="(item, index) in themes"
            :key="index"
            v-bind:class="{active: activeItem === index}"
            @click="onActiveItem(index)"
          >{{item.name}}</span>
        </nav>
      </div>
    </div>
    <div class="section-bottom">
      <a href="#/TrainingRegistration_3" class="btn btn-full-width btn-main">Продолжить</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Запись на обучение. Шаг 2",
        themes: [
          {name: 'Тракторы Case IH Magnum'},
          {name: 'Комбайны Case IH'},
          {name: 'Тракторы Case IH Magnum'},
          {name: 'Тракторы Case IH Magnum'},
        ],
        activeItem: 1
      }
    },
    methods: {
      onActiveItem: function (index) {
        this.activeItem = index;
      }
    }
  }
</script>