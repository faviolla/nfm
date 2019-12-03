<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/" class="link-back">
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
            :input-attrs="{name: 'input-test' , id: 'v-my-autocomplete'}"
            class="input input-search"
            placeholder="Артикул или название"
          ></v-autocomplete>

          <button type="submit" class="btn btn-search btn-active">Найти</button>
        </div>
      </form>
      <div class="product-item-result">
        <div class="product-item-holder">
          <div class="product-item">
            <div class="product-item-status available">В наличии</div>
            <span href class="product-item-link">
              <span class="product-item-name">Шина (152.26.020), Alliance A-570 AS, MPT</span>
            </span>
            <span class="product-item-code">Арт. 19.5LR24, 156A8/153B, TL</span>
            <div class="product-item-price">
              <div class="product-item-price-num">{{this.price * this.value | format}} грн</div>
              <div class="product-item-price-text">Цена с НДС</div>
            </div>
            <div class="product-item-buy">
              <div class="product-item-count">
                <number-input v-model="value" :min="1" inline controls></number-input>
              </div>
              <button class="btn btn-buy btn-main" @click="addToBasket(item.value)">Купить</button>
            </div>
            <a href class="product-item-more link-red">Есть аналоги</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section-bottom">
      <div class="basket-icon" v-if="basketVal==0">
        <span href class="link-basket">
          <span class="basket-icon-num">{{basketVal}}</span>
          <i class="icon icon-basket"></i>
        </span>
      </div>
      <div class="basket-icon basket-full" v-if="basketVal>0">
        <a href="#/Basket" class="link-basket">
          <span class="basket-icon-num">{{basketVal}}</span>
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
      value: 1,
      itemsApi: [],
      price: 12500,
      basketVal: 0,
      item: {
        id: "",
        name: "",
        code: ""
      },
      items: [],
      tpl: tpl
    };
  },
  methods: {
    addToBasket() {
      this.basketVal = this.value;
    },
    itemSelected(item) {
      console.log("Selected item!", item);
    },
    itemClicked(item) {
      console.log("You clicked an item!", item);
    },
    getLabel(item) {
      if (item) {
        return item.name;
      }
      return "";
    },
    update(text) {
      this.items = Parts.filter(item => {
        return new RegExp(text.toLowerCase()).test(item.name.toLowerCase());
      });
    }
  },
  filters: {
    format(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    }
  }
};
</script>