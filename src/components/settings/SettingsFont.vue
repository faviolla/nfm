<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/Settings" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="items-list-holder">
        <nav class="items-list items-list-font">
          <span
            class="list-item"
            v-for="(item , index) in fonts"
            :key="index"
            v-bind:style="{ fontSize: item.size + 'px' }"
            :class="{ 'active': activeItem === index }"
            v-on:click="onActiveItem( index) "
          >{{item.font}}</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Размер шрифта",
      activeItem: 1,
      fonts: [
        { font: "Маленький", size: 14 },
        { font: "Средний", size: 16 },
        { font: "Большой", size: 18 }
      ]
    };
  },
  methods: {
    onActiveItem: function(index) {
      this.activeItem = index;
    }
  }
};
</script>


