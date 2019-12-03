<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/Personal" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="form-holder">
        <form @submit.prevent="submitUserPass()" id="user-password">
          <div class="form-group" v-bind:class="{'form-group-error': $v.userPassword.$error}">
            <input
            id="user_password"
            name="user_password"           
            :type="pass1 ? 'text' : 'password'"
            v-model="userPassword"
            @input="$v.userPassword.$touch()"
            @blur="$v.userPassword.$touch()"
            class="input"
            v-bind:class="{'has-value': $v.userPassword.$model}"
            />
            <label
              for="user_password"
              class="label"
            >Текущий пароль</label>
            <span
              class="icon icon-pass"
              v-bind:class="{'pass-hide':  pass1}"
              @click="showPassFunc1"
            ></span>
            <div class="error" v-if="$v.userPassword.$error">Укажите текущий пароль</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userNewPassword.$error}">
            <input
              id="user_new_password"
              name="user_new_password"
              :type="pass2 ? 'text' : 'password'"
              v-model="userNewPassword"
              @input="$v.userNewPassword.$touch()"
              @blur="$v.userNewPassword.$touch()"
              class="input"
              v-bind:class="{'has-value': $v.userNewPassword.$model}"
            />
            <label for="user_new_password" class="label">Новый пароль</label>
            <span
              class="icon icon-pass"
              v-bind:class="{'pass-hide':  pass2}"
              @click="showPassFunc2"
            ></span>
            <div
              class="error"
              v-if="$v.userNewPassword.$error"
            >Пароль должен содержать буквы и цифры и должен состоять не менее чем из 6 символов</div>
          </div>
        </form>
      </div>
    </div>
    <div class="section-bottom">
      <button type="submit" class="btn btn-full-width btn-main" form="user-password">Изменить пароль</button>
    </div>
  </div>
</template>

<script>
import { required, helpers } from "vuelidate/dist/validators.min";
const password = helpers.regex(
  "password",
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
);

export default {
  data() {
    return {
      title: "Изменение пароля",
      userPassword: null,
      userNewPassword: null,
      pass1: false,
      pass2: false
    };
  },
  validations: {
    userPassword: {
      required,
      password
    },
    userNewPassword: {
      required,
      password
    }
  },

  methods: {
    showPassFunc1() {
      this.pass1 = !this.pass1;
    },
    showPassFunc2() {
      this.pass2 = !this.pass2;
    },
    submitUserPass() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$v.$reset();
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>


