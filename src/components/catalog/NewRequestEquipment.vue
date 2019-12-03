<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/CatalogDetail" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="form-holder">
        <!--        <form @submit.prevent="$modal.show('send-request-equipment')" id="order-form">-->
        <form @submit.prevent="submitRequestEquipment()" id="order-form">
          <div class="form-group" v-bind:class="{'form-group-error': $v.userName.$error}">
            <input
              id="user_name"
              name="user_name"
              type="text"
              v-model="userName"
              @input="$v.userName.$touch()"
              @blur="$v.userName.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userName.$model}"
            />
            <label for="user_name" class="label">Контактное лицо</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userName.$error"></span>
            <div class="error" v-if="$v.userName.$error">Укажите контактоне лицо</div>
          </div>
          <div class="form-group" v-bind:class="{'form-group-error': $v.userEmail.$error}">
            <input
              id="user_email"
              name="user_email"
              type="email"
              v-model="userEmail"
              @input="$v.userEmail.$touch()"
              @blur="$v.userEmail.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userEmail.$model}"
            />
            <label for="user_email" class="label">E-mail</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userEmail.$error"></span>
            <div class="error" v-if="$v.userEmail.$error">Укажите E-mail</div>
          </div>
          <div class="form-group" v-bind:class="{'form-group-error': $v.userPhone.$error}">
            <the-mask
              mask="+38 (0##) ###-##-##"
              id="user_phone"
              name="user_phone"
              type="tel"
              v-model="userPhone"
              @input="$v.userPhone.$touch()"
              @blur.native="$v.userPhone.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userPhone.$model}"
            />
            <label for="user_phone" class="label">Телефон</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userPhone.$error"></span>
            <div class="error" v-if="$v.userPhone.$error">Укажите телефон</div>
          </div>
        </form>
      </div>
    </div>
    <Modal />
    <ModalSuccess />
    <div class="section-bottom">
      <button type="submit" form="order-form" class="btn btn-full-width btn-main">Отправить</button>
    </div>

    <!--    <modal name="send-request-equipment" adaptive="true" resizable="true" height="auto">-->
    <!--      <h3>Отправить заявку на покупку трактора?</h3>-->
    <!--      <div class="modal-buttons">-->
    <!--        <button @click="$modal.hide('send-request-equipment')" class="btn btn-main">Отправить</button>-->
    <!--        <button @click="$modal.hide('send-request-equipment')" class="btn btn-link">Отменить</button>-->
    <!--      </div>-->
    <!--    </modal>-->
  </div>
</template>

<script>
import { required, email, helpers } from "vuelidate/dist/validators.min";
import ModalSendRequestEquipment from "../modal/ModalSendRequestEquipment";
import ModalSuccess from "../modal/ModalSuccessForm";
import { TheMask } from "vue-the-mask";
const phone = helpers.regex("phone", /^[0-9]{9}$/);

export default {
  components: {
    TheMask,
    Modal: ModalSendRequestEquipment,
    ModalSuccess: ModalSuccess
  },
  data() {
    return {
      title: "Заявка на технику",
      userName: null,
      userEmail: null,
      userPhone: null,
      submitStatus: null
    };
  },
  validations: {
    userName: {
      required
    },
    userEmail: {
      required,
      email
    },
    userPhone: {
      required,
      phone
    }
  },
  methods: {
    submitRequestEquipment() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$modal.show("send-request-equipment");
        this.$v.$reset();
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    someAction() {
      alert("Форма отправлена");
    }
  }
};
</script>