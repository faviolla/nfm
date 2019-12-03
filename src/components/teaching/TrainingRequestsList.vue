<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/Teaching" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="request-items">
        <template v-for="request in requests">
          <a :href=request.id class="request-item">
            <span class="request-item-top">
              <span class="request-item-num">{{request.num}}  {{request.text}}  {{request.date}}</span>
              <span class="request-status" v-bind:class="request.statusClass">{{request.status}}</span>
            </span>
            <span class="request-item-text tt-n">{{request.title}}</span>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        title: "Мои заявки",
        requests: [
          {
            id:"#/TrainingRequestDetail",
            title: "Тракторы Case IH Magnum",
            num: "№2",
            text: "от",
            date: "01.04.2019",
            status: "Новая",
            statusClass: "status-new"
          },
          {
            id:"#/TrainingRequestDetail",
            title: "Комбайны Case IH",
            num: "№1",
            text: "от",
            date: "06.04.2019",
            status: "Закрыта",
            statusClass: "status-canceled"
          }
        ]
      }
    }
  }
</script>