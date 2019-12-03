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
        <nav class="items-list">
          <span
            class="list-item"
            v-for="(item , index) in langs"
            :key="index"
            :class="{ 'active': activeItem === index }"
            v-on:click="onActiveItem( index) "
          >{{item.lang}}</span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Язык",
      activeItem: 0,
      langs: [{ lang: "Русский" }, { lang: "Украинский" }]
    };
  },
  methods: {
    onActiveItem: function(index) {
      this.activeItem = index;
    }
  }
};
</script>


