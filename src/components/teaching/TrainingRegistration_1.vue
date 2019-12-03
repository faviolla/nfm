<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/Teaching" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="selecting-title">Выберите город</div>
      <div class="items-list-holder">
        <nav class="items-list">
          <template
            v-for="(item, index) in cities"
          >
              <router-link
                class="list-item"
                v-if="item.id === 3"
                :to="item.to"
                :key="index"
                v-bind:class="{active: activeItem === index}"
                @click="onActiveItem(index)"
              >{{item.city}}</router-link>
              <span
                v-else
                class="list-item"
                :key="index"
                v-bind:class="{active: activeItem === index}"
                @click="onActiveItem(index)"
              >{{item.city}}</span>
          </template>
        </nav>
      </div>
    </div>
    <div class="section-bottom">
      <a href="#/TrainingRegistration_2" class="btn btn-full-width btn-main">Продолжить</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Запись на обучение. Шаг 1",
        cities: [
          {city: 'Новые Санжары', id: 0, to: ''},
          {city: 'Львов', id: 1, to: ''},
          {city: 'Хмельницкий', id: 2, to: ''},
          {city: 'Другое', id: 3, to: '/SelectingCity'},
        ],
        activeItem: 0
      }
    },
    methods: {
      onActiveItem: function (index) {
        this.activeItem = index;
      }
    }
  }
</script>