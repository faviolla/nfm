<template>
  <div>
    <template v-if="visible">
      <div class="user-info-holder">
        <div class="user-info">
          <div class="row">
            <span class="sub-title">Контактное лицо</span>
          </div>
          <div class="row">
            <span class="text">{{defaultUserName}}</span>
          </div>
          <div class="row">
            <span class="text">{{defaultUserEmail}}</span>
          </div>
          <div class="row">
            <span class="text">{{defaultUserPhone}}</span>
          </div>
          <span class="link-red" @click="visible=!visible">Изменить контактное лицо</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="user-info-holder">
        <div class="user-info">
          <div class="row">
            <span class="sub-title">Контактное лицо</span>
          </div>
          <form @submit.prevent="submitUserForm()" class="form-grey-bg">
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
              <label for="user_name" class="label">Имя Фамилия</label>
              <span class="icon icon-error" aria-label="icon error" v-if="$v.userName.$error"></span>
              <template v-if="$v.userName.$error">
                <div class="error" v-if="!$v.userName.required">Укажите имя и фамилию</div>
                <div
                  class="error"
                  v-if="!$v.userName.alpha"
                >Поле Имя и Фамилия не должно содержать цифр</div>
              </template>
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
                @blur.native="$v.userPhone.$touch()"
                @input="$v.userPhone.$touch()"
                class="input"
                v-bind:class="{'has-value':  $v.userPhone.$model}"
              />
              <label for="user_phone" class="label">Телефон</label>
              <span class="icon icon-error" aria-label="icon error" v-if="$v.userPhone.$error"></span>

              <div class="error" v-if="$v.userPhone.$error">Укажите номер телефона</div>
            </div>

            <div class="btn-holder">
              <button type="submit" class="btn btn-link-red">Сохранить</button>
              <span class="link-grey" @click="visible=!visible">Отменить</span>
            </div>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>
</div>
</template>
<script>
import { required, email, helpers } from "vuelidate/dist/validators.min";
import { TheMask } from "vue-the-mask";
const phone = helpers.regex("phone", /^[0-9]{9}$/);
const alpha = helpers.regex("alpha", /^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ' ]+$/);

export default {
  name: "FormComponent",
  components: {
    TheMask
  },
  data() {
    return {
      defaultUserPhone: "+38 (050) 000-00-00",
      defaultUserEmail: "vasiliev@gmail.com",
      defaultUserName: "Валентин Васильев",
      userPhone: "+38 (050) 000-00-00",
      userEmail: "vasiliev@gmail.com",
      userName: "Валентин Васильев",
      visible: true
    };
  },

  validations: {
    userName: {
      required,
      alpha
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
    submitUserForm() {
      console.log("submit btn user-form");
      console.log(this.$v.userPhone);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        console.log("submit success!");
        (this.defaultUserPhone = this.userPhone),
          (this.defaultUserEmail = this.userEmail),
          (this.defaultUserName = this.userName),
          (this.visible = !this.visible),
          // do your submit logic here
          (this.submitStatus = "PENDING");
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>
