<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRegistration_4" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="selecting-title">Проверьте введенную вами информацию</div>
      <div class="completed-info-holder">
        <div class="completed-info">
          <div class="request-row">
            <span class="request-name">Город</span>
            <span class="request-val">Новые Санжары</span>
          </div>
          <div class="request-row">
            <span class="request-name">Тема</span>
            <span class="request-val">Тракторы Case IH MAgnum</span>
          </div>
          <div class="request-row">
            <span class="request-name">Желаемые даты</span>
            <span class="request-val" v-model="gettingDate">с {{periodOfDate}} 12.06.2019 по 18.06.2019 </span>
          </div>
          <div class="request-row">
            <span class="request-name">Количество человек</span>
            <span class="request-val">7</span>
          </div>
          <div class="request-row">
            <span class="request-name">Комментарий</span>
            <span class="request-val">Возможно будет участвовать еще 2-3 чаловека</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-bottom">
      <a href="#"
         class="btn btn-full-width btn-main"
         @click="successTeaching"
      >Записаться</a>
    </div>
  </div>
</template>

<script>

  import Step3 from "./TrainingRegistration_3";

  export default {
    data() {
      return {
        title: "Запись на обучение. Шаг 5",
        periodOfDate: null
      }
    },
    components: {
      "step3": Step3
    },
    computed: {

    },
    methods: {
      gettingDate(data) {
        this.periodOfDate = data.periodOfDate;
        console.log(this.periodOfDate);
      },
      successTeaching() {
        this.$router.push("SuccessTraining");
      }
    }
  }
</script>