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
        <form @submit.prevent="submitUserForm()" id="user-info" ref="form" method="post">
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
            <label for="user_name" class="label">ФИО</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userName.$error"></span>
            <div class="error" v-if="$v.userName.$error">Укажите ФИО</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userEmail.$error}">
            <input
              id="user_email"
              name="user_email"
              type="text"
              v-model="userEmail"
              @input="$v.userEmail.$touch()"
              @blur="$v.userEmail.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userEmail.$model}"
            />
            <label for="user_email" class="label">E-mail</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userEmail.$error"></span>
            <div class="error" v-if="$v.userEmail.$error">Укажите e-mail</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userPhone.$error}">
            <the-mask
              mask="+38 (0##) ###-##-##"
              id="user_phone"
              name="user_phone"
              type="tel"
              v-model="userPhone"
              class="input"
              @input="$v.userPhone.$touch()"
              @blur.native="$v.userPhone.$touch()"
              v-bind:class="{'has-value':  $v.userPhone.$model}"
            />
            <label for="user_phone" class="label">Телефон</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userPhone.$error"></span>

            <div class="error" v-if="$v.userPhone.$error">Укажите номер телефона</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userRegion.$error}">
            <v-select
              id="user_region"
              name="user_region"
              class="select"
              label="regionName"
              :options="region"
              :searchable="false"
              :clearable="false"
              :components="{OpenIndicator}"
              @change="$v.select.$touch()"
              @blur="$v.userRegion.$touch()"
              v-model="userRegion"
              v-bind:class="{'has-value': $v.userRegion.$model}"
            ></v-select>
            <label for="user_region" class="label">Область</label>
            <div class="error" v-if="$v.userRegion.$error">Укажите ваш Область</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userNumber.$error}">
            <input
              id="user_number"
              name="user_number"
              type="text"
              v-model="userNumber"
              @input="$v.userNumber.$touch()"
              @blur="$v.userNumber.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userNumber.$model}"
            />
            <label for="user_number" class="label">ЕГРПОУ</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userNumber.$error"></span>
            <div class="error" v-if="$v.userNumber.$error">Укажите ЕГРПОУ. Только цифры</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.userCompany.$error}">
            <input
              id="user_company"
              name="user_company"
              type="text"
              v-model="userCompany"
              @input="$v.userCompany.$touch()"
              @blur="$v.userCompany.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.userCompany.$model}"
            />
            <label for="user_company" class="label">Название предприятия</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.userCompany.$error"></span>
            <div class="error" v-if="$v.userCompany.$error">Укажите название предприятия</div>
          </div>
        </form>
      </div>
    </div>

    <div class="section-bottom">
      <button type="submit" class="btn btn-full-width btn-main" form="user-info">Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  required,
  maxLength,
  minLength,
  email,
  helpers
} from "vuelidate/dist/validators.min";
import { TheMask } from "vue-the-mask";
const phone = helpers.regex("phone", /^[0-9]{9}$/);
const num = helpers.regex("num", /^[0-9]{4,}$/);

export default {
  components: {
    TheMask
  },
  data() {
    return {
      info: null,
      title: "Редактирование",
      userName: null,
      userPhone: null,
      userEmail: null,
      userRegion: null,
      userNumber: null,
      userCompany: null,
      OpenIndicator: {
        render: createElement => createElement("span")
      },
      region: [
        {
          regionName: "Киевская"
        },
        {
          regionName: "Харьковская"
        },
        {
          regionName: "Краматорская"
        },
        {
          regionName: "Днепровская"
        },
        {
          regionName: "Одесская"
        },
        {
          regionName: "Сумская"
        }
      ]
    };
  },
  validations: {
    userName: {
      required
    },
    userPhone: {
      required,
      phone
    },
    userEmail: {
      required,
      email
    },
    userRegion: {
      required
    },
    userNumber: {
      required,
      num
    },
    userCompany: {
      required
    }
  },
  methods: {
    submitUserForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$v.$reset();
        this.submitStatus = "PENDING";
        //this.$refs.form.submit();
        setTimeout(() => {
          window.profile = {
            userName: this.userName,
            userPhone: this.userPhone,
            userEmail: this.userEmail,
            userRegion: this.userRegion.regionName,
            userNumber: this.userNumber,
            userCompany: this.userCompany
          };
          this.$router.push("/Personal");
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>


