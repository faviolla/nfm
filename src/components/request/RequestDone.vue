<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/ServiceRequests" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="request-holder">
        <div class="request-info">
          <div class="request-row">
            <span class="request-name request-name-status">
              <span class="request-name">Дата</span>
              <span class="request-status status-done">Выполнена</span>
            </span>
            <span class="request-val">
              <span>20.04.2019</span>
              <span class="rating-holder">
                <span
                  v-for="(item , i) in arr"
                  :key="i"
                  class="icon ic-star"
                  :class="{'ic-star-active': i  < ratingVal}"
                ></span>
              </span>
            </span>
          </div>
          <div class="request-row">
            <span class="request-name">Наименование техники</span>
            <span class="request-val">ТРАКТОР CASE IH AXIAL-FLOW 5140</span>
          </div>
          <div class="request-row">
            <span class="request-name">Серийный номер</span>
            <span class="request-val">АХ5533ВН</span>
          </div>
          <div class="request-row">
            <span class="request-name">Серийный номер</span>
            <span class="request-val">АХ5533ВН</span>
          </div>
          <div class="request-row">
            <span class="request-name">Контактное лицо</span>
            <span class="request-val">Петр Крижовников</span>
          </div>
          <div class="request-row">
            <span class="request-name">Краткое описание</span>
            <span class="request-val">Поламался карбюратор, и задняя поверхность лопасти</span>
          </div>
        </div>
        <div class="request-file-holder">
          <div class="request-file-title">
            <span>Прикрепленные файлы</span>
          </div>
          <ul class="request-file-list">
            <li class="request-file">
              <img src="../../images/img_01.jpg" alt="Img" />
            </li>
            <li class="request-file">
              <img src="../../images/img_02.jpg" alt="Img" />
            </li>
            <li class="request-file">
              <img src="../../images/img_03.jpg" alt="Img" />
            </li>
          </ul>
        </div>
      </div>
      <div class="discuss-holder">
        <div class="discuss-title">Обсуждение заявки</div>
        <div class="discuss-item">
          <div class="discuss-row">
            <span class="discuss-name">Валенинтин Петрович</span>
          </div>
          <div class="discuss-row">
            <span class="discuss-date">20.04.2019</span>
          </div>
          <div class="discuss-row">
            <span class="discuss-text">С какой стороны поля к тебе лучше подъехать</span>
          </div>
          <div class="discuss-row">
            <ul class="request-file-list">
              <li class="request-file">
                <img src="../../images/img_01.jpg" alt="Img" />
              </li>
            </ul>
          </div>
        </div>
        <div class="discuss-item">
          <div class="discuss-row">
            <span class="discuss-name">Петр Крижовников</span>
          </div>
          <div class="discuss-row">
            <span class="discuss-date">20.04.2019</span>
          </div>
          <div class="discuss-row">
            <span class="discuss-text">Привет, Валентин с южной</span>
          </div>
        </div>
      </div>
    </div>
    <modal-rating :onLogin="onLogin"></modal-rating>
    <div class="section-bottom">
      <button
        class="btn btn-full-width btn-main"
        @click="$modal.show('modal-rating')"
      >Оценить сервис</button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/dist/validators.min";
import ModalRating from "../modal/ModalRating";

export default {
  data() {
    return {
      title: "Заявка № 3",
      files: [],
      textComment: null,
      ratingComment: null,
      ratingVal: 0,
      requestForm: null,
      arr: [1, 2, 3, 4, 5]
    };
  },
  components: {
    "modal-rating": ModalRating
  },
  validations: {
    textComment: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    formSend() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$v.$reset();
        this.files = [];
        this.textComment = "";
        console.log("Form submitted");
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
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
    onLogin(data) {
      this.ratingVal = data.ratingVal;
    }
  }
};
</script>
