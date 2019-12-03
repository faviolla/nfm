<template>
  <div>
    <template v-if="ratingVal<4 || ratingVal ==null">
      <modal name="modal-rating" :adaptive="true" :resizable="true" height="auto" id="modal-rating">
        <h3>Оценить сервис</h3>
        <div class="modal-body">
          <p>Нам очень важна ваша оценка чтобы становиться лучше</p>

          <form class="form-rating" @submit.prevent="formSend()" method="post">
            <div class="rating-row">
              <div class="rating-stars">
                <input
                  id="input5"
                  name="rating"
                  type="radio"
                  value="5"
                  class="rating-check"
                  v-model="ratingVal"
                  v-on:change="ratingSend"
                />
                <label for="input5" class="rating-star">
                  <i class="ic-star"></i>
                </label>
                <input
                  id="input4"
                  name="rating"
                  type="radio"
                  value="4"
                  class="rating-check"
                  v-model="ratingVal"
                  v-on:change="ratingSend()"
                />
                <label for="input4" class="rating-star">
                  <i class="ic-star"></i>
                </label>
                <input
                  id="input3"
                  name="rating"
                  type="radio"
                  value="3"
                  class="rating-check"
                  v-model="ratingVal"
                  v-on:change="ratingSend()"
                />
                <label for="input3" class="rating-star">
                  <i class="ic-star"></i>
                </label>
                <input
                  id="input2"
                  name="rating"
                  type="radio"
                  value="2"
                  class="rating-check"
                  v-model="ratingVal"
                  v-on:change="ratingSend()"
                />
                <label for="input2" class="rating-star">
                  <i class="ic-star"></i>
                </label>
                <input
                  id="input1"
                  name="rating"
                  type="radio"
                  value="1"
                  class="rating-check"
                  v-model="ratingVal"
                  v-on:change="ratingSend()"
                />
                <label for="input1" class="rating-star">
                  <i class="ic-star"></i>
                </label>
              </div>
            </div>
            <transition name="fade">
              <template v-if="ratingVal<4 && ratingVal !=null">
                <div class="rating-comment">
                  <p>Напишите пожалуйста что можно улучшить</p>
                  <div
                    class="form-group"
                    v-bind:class="{'form-group-error': $v.ratingComment.$error}"
                  >
                    <textarea
                      name="text"
                      class="textarea textarea-sm"
                      v-model="ratingComment"
                      @input="$v.ratingComment.$touch()"
                      @blur="$v.ratingComment.$touch()"
                    ></textarea>
                    <span
                      class="icon icon-error"
                      aria-label="icon error"
                      v-if="$v.ratingComment.$error"
                    ></span>
                    <div class="error" v-if="$v.ratingComment.$error">Опишите неисправности</div>
                  </div>
                  <button type="submit" class="btn btn-main btn-modal-fixed">Отправить</button>
                </div>
              </template>
            </transition>
          </form>
        </div>
      </modal>
    </template>

    <modal
      name="modal-rating-thx"
      class="modal-rating-thx"
      :adaptive="true"
      :resizable="true"
      height="auto"
      @opened="openModal"
    >
      <div class="modal-title">Спасибо за вашу оценку!</div>
    </modal>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
import { required } from "vuelidate/dist/validators.min";

export default {
  props: ["onLogin"],
  data() {
    return {
      ratingComment: null,
      ratingVal: null,
      requestForm: null
    };
  },
  validations: {
    ratingComment: {
      required
    }
  },
  methods: {
    openModal(event) {
      var self = this;
      setTimeout(function() {
        self.$modal.hide("modal-rating-thx");
      }, 2500);
    },
    formSend() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$v.$reset();
        //this.ratingVal = null;
        this.ratingComment = "";
        this.$modal.hide("modal-rating");
        console.log("Form submitted");
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    ratingSend() {
      if (this.ratingVal > 3 && this.ratingVal != null) {
        this.$modal.show("modal-rating-thx");
      }
      this.onLogin({
        ratingVal: this.ratingVal
      });
    }
  }
};
</script>
