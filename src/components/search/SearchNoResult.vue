<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/index.html" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">
            <i class="icon icon-repair-part"></i>
            {{title}}
          </span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <form id="search" class="form-search">
        <div class="form-group-search">
          <v-autocomplete
            :items="items"
            v-model="item"
            :get-label="getLabel"
            :min-len="0"
            @update-items="update"
            :component-item="tpl"
            @item-selected="itemSelected"
            @item-clicked="itemClicked"
            :input-attrs="{name: 'search' , id: 'v-my-autocomplete'}"
            class="input input-search"
            placeholder="Артикул или название"
          ></v-autocomplete>

          <button type="submit" class="btn btn-search btn-active">Найти</button>
        </div>
      </form>
      <div>
        <div class="noresult">
          <div class="search-icon">
            <i class="icon icon-search"></i>
          </div>
          <div class="noresult-title">По вашему запросу ничего не найдено</div>
          <div class="noresult-text">Скорректируйте или введите другой поисковой запрос</div>
        </div>
      </div>
    </div>
    <div class="section-bottom">
      <div class="basket-icon">
        <a href class="link-basket">
          <span class="basket-icon-num">0</span>
          <i class="icon icon-basket"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import tpl from "./ItemTemplate.vue";
import Parts from "./repair.js";
export default {
  data() {
    return {
      title: "Запасные части",
      itemsApi: [],
      item: {
        id: "",
        name: "Шина34erg",
        code: ""
      },
      items: [],
      tpl: tpl
    };
  },
  methods: {
    itemSelected(item) {
      console.log("Selected item!", item);
    },
    itemClicked(item) {
      console.log("You clicked an item!", item);
    },
    getLabel(item) {
      if (item) {
        return item.name || item.code;
      }
      return "";
    },
    update(text) {
      this.items = Parts.filter(item => {
        return (
          new RegExp(text.toLowerCase()).test(item.name.toLowerCase()) ||
          new RegExp(text.toLowerCase()).test(item.code.toLowerCase())
        );
      });
    }
  }
};
</script>