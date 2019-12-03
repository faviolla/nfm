<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRegistration_2" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="selecting-title">Желаемые даты</div>
      <div class="calendar-holder">
        <v-date-picker
          mode="range"
          is-inline
          :columns="layout.columns"
          :is-expanded="layout.isExpanded"
          :attributes="attributes"
          :value="new Date()"
          :disabled-dates="disabledDates"
          color="gray"
          :masks="{weekdays: 'WW'}"
          v-model="range"
        />
      </div>
      <p v-if="range">{{periodOfDate.start}} --- {{periodOfDate.end}}</p>
    </div>
    <div class="section-bottom">
      <div class="note-info" v-if="!range">
        <span class="note-info-text">Выберите интервал чтобы продолжить</span>
      </div>
      <a
        class="btn btn-full-width btn-main"
        v-bind:class="{disabled: !range}"
        @click="nextStep4"
        v-model="periodOfDate"
      >Продолжить</a>
    </div>
  </div>
</template>

<script>

  export default {
    props: ["gettingDate"],
    data() {
      return {
        range: null,
        periodOfDate: null,
        // range: {
        //   start: new Date(2019, 8, 17),
        //   end: new Date(2019, 8, 20)
        // },
        title: "Запись на обучение. Шаг 3",
        attributes: [
          {
            key: 'today',
            dates: new Date(),
          }
        ],
        disabledDates: [
          new Date(2019, 8, 24),
          // {
          //   weekdays: [1, 7]
          // },
          {
            start: null,
            end: (new Date()).setDate((new Date()).getDate() - 1)
          }
        ],
      }
    },
    computed: {
      layout() {
        return this.$screens(
          {
            default: {
              columns: 1,
              isExpanded: true
            },
            md: {
              columns: 2,
              isExpanded: true
            }
          }
        )
      }
    },
    watch: {
      range: function () {
        this.periodOfDate = {};
        this.periodOfDate.start = this.range.start.toLocaleDateString();
        this.periodOfDate.end = this.range.end.toLocaleDateString();
        return this.periodOfDate
      }
    },
    methods: {
      nextStep4() {
        console.log(this.periodOfDate);
        this.$router.push("TrainingRegistration_4");
        // this.gettingDate({
        //   periodOfDate: this.periodOfDate
        // });
        // console.log(this.gettingDate());
      }
    }
  }
</script>