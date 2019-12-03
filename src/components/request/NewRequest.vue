<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/Request" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="form-holder">
        <form @submit.prevent="submitRequestForm()" id="new_request">
          <div class="form-group" v-bind:class="{'form-group-error': $v.brandName.$error}">
            <input
              id="brand_name"
              name="brand_name"
              type="text"
              v-model="brandName"
              @input="$v.brandName.$touch()"
              @blur="$v.brandName.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.brandName.$model}"
            />
            <label for="brand_name" class="label">Бренд</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.brandName.$error"></span>
            <div class="error" v-if="$v.brandName.$error">Укажите бренд</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.techName.$error}">
            <input
              id="tech_name"
              name="tech_name"
              type="text"
              v-model="techName"
              @input="$v.techName.$touch()"
              @blur="$v.techName.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.techName.$model}"
            />
            <label for="tech_name" class="label">Наименование техники</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.techName.$error"></span>
            <div class="error" v-if="$v.techName.$error">Укажите наименование техники</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.modelName.$error}">
            <input
              id="model_name"
              name="model_name"
              type="text"
              v-model="modelName"
              @input="$v.modelName.$touch()"
              @blur="$v.modelName.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.modelName.$model}"
            />
            <label for="model_name" class="label">Модель</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.modelName.$error"></span>
            <div class="error" v-if="$v.modelName.$error">Укажите наименование техники</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.serialNumber.$error}">
            <input
              id="serial_number"
              name="serial_number"
              type="text"
              v-model="serialNumber"
              @input="$v.serialNumber.$touch()"
              @blur="$v.serialNumber.$touch()"
              class="input"
              v-bind:class="{'has-value':  $v.serialNumber.$model}"
            />
            <label for="serial_number" class="label">Серийный номер</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.serialNumber.$error"></span>
            <div class="error" v-if="$v.serialNumber.$error">Укажите наименование техники</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.localityName.$error}">
            <input
              id="locality_name"
              name="locality_name"
              v-model.trim="$v.localityName.$model"
              @input="$v.localityName.$touch()"
              @blur="$v.localityName.$touch()"
              class="input"
              v-bind:class="{'has-value': $v.localityName.$model}"
            />
            <label for="locality_name" class="label">Населенный пункт</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.localityName.$error"></span>
            <div class="error" v-if="$v.localityName.$error">Укажите наименование техники</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.selectCategory.$error}">
            <v-select
              id="select_category"
              name="select_category"
              class="select"
              label="categoryType"
              :options="options"
              :searchable="false"
              :clearable="false"
              :components="{OpenIndicator}"
              @change="$v.select.$touch()"
              @blur="$v.selectCategory.$touch()"
              v-model="selectCategory"
              v-bind:class="{'has-value': $v.selectCategory.$model}"
            ></v-select>
            <label for="select_category" class="label">Категория ремонта</label>
            <div class="error" v-if="$v.selectCategory.$error">Опишите неисправности</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.selectLocation.$error}">
            <v-select
              id="select_location"
              name="select_location"
              class="select"
              label="locationCity"
              :options="locations"
              :searchable="false"
              :clearable="false"
              :components="{OpenIndicator}"
              v-model="selectLocation"
              v-bind:class="{'has-value': $v.selectLocation.$model}"
            ></v-select>
            <label for="select_location" class="label">Местонахождение техники</label>
            <div class="error" v-if="$v.selectLocation.$error">Укажите местонахождение</div>
          </div>

          <div class="form-group" v-bind:class="{'form-group-error': $v.faultDescription.$error}">
            <textarea
              id="fault_description"
              name="text"
              class="textarea textarea-sm"
              v-model="faultDescription"
              @input="$v.faultDescription.$touch()"
              @blur="$v.faultDescription.$touch()"
              v-bind:class="{'has-value': $v.faultDescription.$model}"
            ></textarea>
            <label for="fault_description" class="label">Описание неисправности</label>
            <span class="icon icon-error" aria-label="icon error" v-if="$v.faultDescription.$error"></span>
            <div class="error" v-if="$v.faultDescription.$error">Опишите неисправности</div>
          </div>

          <div class="form-group form-group-last">
            <div class="file-holder">
              <div v-for="(file, key) in files" class="file-listing">
                <img class="preview" v-bind:ref="'image'+parseInt( key )" />
                <span class="file-remove" v-on:click="removeImage( key )"></span>
              </div>
            </div>
            <label class="input-file-label">
              <input
                type="file"
                id="files"
                ref="files"
                accept="image/*"
                name="file"
                multiple
                v-on:change="handleFilesUpload()"
              />
              <i class="icon icon-file"></i>
              <div class="input-file-text">Прикрепить файл</div>
            </label>
          </div>
        </form>
      </div>
      <user-info />
    </div>
    <div class="section-bottom">
      <button type="submit" class="btn btn-full-width btn-main" form="new_request">Отправить запрос</button>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/dist/validators.min";
import "vue-select/dist/vue-select.css";

import UserInfo from "./UserInfo.vue";

export default {
  data() {
    return {
      title: "Создание новой заявки",
      brandName: null,
      modelName: null,
      techName: null,
      serialNumber: null,
      localityName: null,
      faultDescription: null,
      submitStatus: null,
      select: null,
      selectCategory: null,
      selectLocation: null,
      files: [],
      visible: true,
      OpenIndicator: {
        render: createElement => createElement("span")
      },
      locations: [
        {
          locationCity: "Киев"
        },
        {
          locationCity: "Харьков"
        },
        {
          locationCity: "Каменец"
        },
        {
          locationCity: "Киев"
        },
        {
          locationCity: "Харьков"
        },
        {
          locationCity: "Каменец"
        }
      ],
      options: [
        {
          categoryCode: "1",
          categoryType: "Текущий ремонт"
        },
        {
          categoryCode: "2",
          categoryType: "Капитальный ремонт"
        }
      ]
    };
  },
  components: {
    UserInfo
  },

  validations: {
    selectLocation: {
      required
    },
    selectCategory: {
      required
    },
    brandName: {
      required,
      minLength: minLength(4)
    },
    techName: {
      required
    },
    modelName: {
      required
    },
    serialNumber: {
      required
    },
    localityName: {
      required
    },
    faultDescription: {
      required
    }
  },

  methods: {
    addFiles() {
      this.$refs.files.click();
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      this.getImagePreviews();
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();

          reader.addEventListener(
            "load",
            function() {
              this.$refs["image" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );

          reader.readAsDataURL(this.files[i]);
        }
      }
    },
    removeImage(key) {
      this.files.splice(key, 1);
    },
    submitRequestForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$router.push("SuccessSendForm");
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


