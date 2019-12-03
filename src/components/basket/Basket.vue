<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/" class="link-back">
          <i class="icon icon-close"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
        <span class="link-red link-clear" @click="$modal.show('modal-basket')">Очистить</span>
      </div>
    </div>
    <div class="section-main">
      <div class="product-items basket-items">
        <form @submit.prevent="submitForm()" id="basket-form">
          <swipe-list ref="list" :disabled="!enabled" :items="itemsSelected" item-key="id">
            <template v-slot="{ item, index, revealRight , closeActions}">
              <div
                class="product-item-holder"
                v-bind:key="item.id"
                v-bind:class="{ 'not-available' : !item.statusAvailable }"
              >
                <div class="product-item">
                  <a :href="item.href" class="product-item-link">
                    <span class="product-item-name">{{item.name}}</span>
                  </a>
                  <span class="product-item-code">{{item.code}}</span>
                  <div class="product-item-price">
                    <div class="product-item-price-num">{{item.price * item.value | format}} грн</div>
                    <div class="product-item-price-text">Цена с НДС</div>
                  </div>
                  <div class="product-item-buy">
                    <div class="product-item-count">
                      <number-input v-model="item.value" :min="1" inline controls></number-input>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-slot:right="{ item }">
              <div class="swipeout-action remove" title="remove" @click="remove(item)">
                <div class="swipeout-action-holder">
                  <i class="icon icon-close-remove"></i>
                  <span class="swipeout-action-text">Удалить товар</span>
                </div>
              </div>
            </template>
          </swipe-list>
        </form>
      </div>
    </div>
    <div class="section-bottom">
      <div class="basket-info">
        <span class="basket-info-text">Окончательная цена будет сформирована менеджером</span>
      </div>
      <button type="submit" class="btn btn-full-width btn-main" form="basket-form">
        Оформить заказ на
        <span v-if="newTotalVal">{{newTotalVal}}</span>
        <span v-else>{{totalVal}}</span>
        грн
      </button>
    </div>
    <modal-basket></modal-basket>
  </div>
</template>

<script>
import { SwipeList, SwipeOut } from "vue-swipe-actions";
import ModalBasketDel from "../modal/ModalBasketDel";
import "vue-swipe-actions/dist/vue-swipe-actions.css";

export default {
  data() {
    return {
      title: "Корзина",
      newTotalVal: null,
      itemsSelected: [
        {
          id: 1,
          name: "Шина (152.26.020), Alliance A-570 AS, MPT",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          statusAvailable: true,
          href: "#/BasketEmpty",
          price: 12500,
          value: 1
        },
        {
          id: 2,
          name: "Шина (125.00.250), Carlisle Multitrac Multitrac",
          code: "Арт. 19.5LR24",
          statusAvailable: true,
          href: "#/SearchItemResult",
          price: 1000,
          value: 1
        },
        {
          id: 3,
          name: "Шина (125.00.250), Carlisle Multitrac",
          code: "Арт. 19.5LR24, 156A8/153B, TL",
          statusAvailable: false,
          href: "#/SearchItemResult",
          price: 1250,
          value: 1
        }
      ],
      enabled: true
    };
  },
  components: {
    "modal-basket": ModalBasketDel,
    SwipeOut,
    SwipeList
  },
  filters: {
    format(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    }
  },
  computed: {
    totalVal: function() {
      let newVal = 0;
      this.itemsSelected.forEach(function(element) {
        newVal += element.price;
      });
      return newVal;
    },
    clonedItems: function() {
      return JSON.parse(JSON.stringify(this.itemsSelected));
    }
  },
  watch: {
    clonedItems: function(newVal, oldVal) {
      let newValue = 0;
      newVal.forEach(function(el, index) {
        newValue += el.price * el.value;
      });

      this.newTotalVal = newValue;
      return this.newTotalVal;
    }
  },
  mounted() {
    this.$refs.list.revealRight(0);
    let that = this;
    setTimeout(function() {
      that.$refs.list.closeActions(0);
    }, 1000);
  },
  methods: {
    remove(item) {
      this.itemsSelected = this.itemsSelected.filter(i => i !== item);
    },
    submitForm() {
      this.$router.push("SuccessSendForm");
    }
  }
};
</script>