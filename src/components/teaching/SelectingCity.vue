<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRegistration_1" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
      </div>
    </div>
    <div class="section-main">
      <div class="form-holder">
        <form id="select_city">
          <div class="form-group">
            <span>Введите в поле ниже место где бы вы хотели провести обучение</span>
          </div>
          <div class="form-group">
            <input
              id="city_name"
              name="city_name"
              type="text"
              v-model="cityName"
              @input="$v.cityName.$touch()"
              @blur="$v.cityName.$touch()"
              class="input"
              v-bind:class="{'has-value': $v.cityName.$model}"
            />
            <label for="city_name" class="label">Место проведения</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.cityName.$error"></span>
            <div class="error" v-if="$v.cityName.$error">Укажите город</div>
          </div>
        </form>
      </div>
    </div>
    <div class="section-bottom">
      <button
        type="submit"
        class="btn btn-full-width btn-main"
        form="select_city"
        v-bind:class="{disabled: !$v.cityName.$model }"
        :data="cityName"
      >Добавить</button>
    </div>
  </div>
</template>

<script>
  import { required } from "vuelidate/dist/validators.min";

  export default {
    data() {
      return {
        cityName: null
      }
    },
    validations: {
      cityName: {
        required
      }
    },
    methods: {

    }
  }
</script>