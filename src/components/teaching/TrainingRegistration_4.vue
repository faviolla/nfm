<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRegistration_3" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="form-holder">
        <form @submit.prevent="submitRequestForm()" id="people_num">
          <div class="form-group" v-bind:class="{'form-group-error': $v.selectNumPeople.$error}">
            <v-select
              id="select_people"
              name="select_people"
              class="select"
              label="peopleNumber"
              :options="options"
              :searchable="false"
              :clearable="false"
              :components="{OpenIndicator}"
              @change="$v.select.$touch()"
              @blur="$v.selectNumPeople.$touch()"
              v-model="selectNumPeople"
              v-bind:class="{'has-value': $v.selectNumPeople.$model}"
            ></v-select>
            <label for="select_people" class="label">Количество человек</label>
            <div class="error" v-if="$v.selectNumPeople.$error">Выберите количество человек</div>
          </div>

          <div class="form-group">
            <textarea
              id="fault_description"
              name="text"
              class="textarea textarea-lg"
              v-model="faultDescription"
              @input="$v.faultDescription.$touch()"
              @blur="$v.faultDescription.$touch()"
              v-bind:class="{'has-value': $v.faultDescription.$model}"
            ></textarea>
            <label for="fault_description" class="label">Комментарий (необязательно)</label>
          </div>

        </form>
      </div>
    </div>
    <div class="section-bottom">
      <button type="submit" href="#/TrainingRegistration_5" class="btn btn-full-width btn-main" form="people_num">Продолжить</button>
    </div>
  </div>
</template>

<script>
  import {required} from "vuelidate/dist/validators.min";
  import "vue-select/dist/vue-select.css";

  export default {
    data() {
      return {
        title: "Запись на обучение. Шаг 4",
        selectNumPeople: null,
        faultDescription: null,
        OpenIndicator: {
          render: createElement => createElement("span")
        },
        options: [
          {
            peopleNumber: "2"
          },
          {
            peopleNumber: "5"
          },
          {
            peopleNumber: "8"
          },
          {
            peopleNumber: "12"
          },
          {
            peopleNumber: "16"
          }
        ]
      }
    },
    validations: {
      selectNumPeople: {
        required
      },
      faultDescription: {
        // required
      }
    },
    methods: {
      submitRequestForm() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = "ERROR";
        } else {
          this.$router.push("TrainingRegistration_5");
          this.$v.$reset();
          this.submitStatus = "PENDING";
          setTimeout(() => {
            this.submitStatus = "OK";
          }, 500);
        }
      }
    }
  }
</script>