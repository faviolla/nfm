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
            :input-attrs="{name: 'input-test' , id: 'v-my-autocomplete'}"
            class="input input-search"
            placeholder="Артикул или название"
          ></v-autocomplete>

          <button type="submit" class="btn btn-search btn-active">Найти</button>
        </div>
      </form>
      <div class="product-item-result">
        <div class="product-item-total">
          <span>Найдено {{itemsSelected.length}} деталей</span>
        </div>
        <div class="product-items">
          <template v-for="item in itemsSelected">
            <div class="product-item-holder" v-bind:key="item.id">
              <div class="product-item">
                <div
                  class="product-item-status"
                  v-bind:class="{ available: item.statusAvailable }"
                >{{item.status}}</div>
                <span class="product-item-link">
                  <span class="product-item-name">{{item.name}}</span>
                </span>
                <span class="product-item-code">{{item.code}}</span>
                <template v-if="item.statusAvailable">
                  <div class="product-item-price">
                    <div class="product-item-price-num">{{item.price * item.value | format}} грн</div>
                    <div class="product-item-price-text">Цена с НДС</div>
                  </div>
                  <div class="product-item-buy">
                    <div class="product-item-count">
                      <number-input v-model="item.value" :min="1" inline controls></number-input>
                    </div>
                    <button class="btn btn-buy btn-main">Купить</button>
                  </div>
                </template>
                <template>
                  <a
                    v-if="item.statusAnalog"
                    href
                    class="product-item-more"
                    v-bind:class="{ 'link-red': item.statusAnalog }"
                  >{{item.analog}}</a>
                  <span v-else class="product-item-more">{{item.analog}}</span>
                </template>
              </div>
            </div>
          </template>
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
      basketVal: 0,
      value: 1,
      itemsApi: [],
      item: {
        id: "",
        name: "",
        code: ""
      },
      itemsSelected: [
        {
          id: 1,
          name: "Шина (152.26.020), Alliance A-570 AS, MPT",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          status: "В наличии",
          statusAvailable: true,
          statusAnalog: true,
          analog: "Есть аналоги",
          price: 12500,
          value: 1
        },
        {
          id: 2,
          name: "Шина (152.26.020), Alliance A-57",
          code: "Арт. 19.555",
          status: "Нет в наличии",
          statusAvailable: false,
          statusAnalog: true,
          analog: "Есть аналоги"
        },
        {
          id: 3,
          name: "Шина (125.00.250), Carlisle Multitrac",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          status: "В наличии",
          statusAvailable: true,
          statusAnalog: true,
          analog: "Есть аналоги",
          price: 1250,
          value: 1
        },
        {
          id: 4,
          name: "Шина (152.26.020), Alliance A-570 AS, MPT",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          status: "В наличии",
          statusAvailable: true,
          statusAnalog: true,
          analog: "Есть аналоги",
          price: 125000,
          value: 1
        },
        {
          id: 5,
          name: "Шина (152.26.020), Alliance A-57",
          code: "Арт. 19.5LR24",
          status: "Нет в наличии",
          statusAvailable: false,
          statusAnalog: false,
          analog: "Нет аналогов"
        },
        {
          id: 6,
          name: "Шина (125.00.250), Carlisle Multitrac",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          status: "Нет в наличии",
          statusAvailable: false,
          statusAnalog: false,
          analog: "Нет аналогов"
        },
        {
          id: 7,
          name: "Шина (125.00.250), Carlisle Multitrac 1",
          code: "Арт. 19.5LR24, 156A8/153B, TL 1",
          status: "Нет в наличии",
          statusAvailable: false,
          statusAnalog: false,
          analog: "Нет аналогов"
        }
      ],
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