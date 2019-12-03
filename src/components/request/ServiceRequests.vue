<template>
  <div class="page-container">
    <div class="section-top section-top-lg">
      <div class="title-holder">
        <a href="/" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">
            <i class="icon icon-key"></i>
            {{title}}
          </span>
        </h1>
      </div>
      <div class="sort-holder">
        <div class="sort-title">Сортировать по:</div>
        <ul class="sort-list">
          <li
            class="sort-list-item"
            v-bind:class="{ active: isActive }"
            @click="sortParam='date' ; changeByStatus();"
          >
            <span class="sort-list-item-link">Дате</span>
          </li>
          <li
            class="sort-list-item"
            v-bind:class="{ active: !isActive }"
            @click="sortParam='status'
            ;
            changeByDate();"
          >
            <span class="sort-list-item-link">Статусу</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-main">
      <div class="request-items">
        <template v-for="request in sortedList">
          <a :href="`${request.id}`" class="request-item">
            <span class="request-item-top">
              <span class="request-item-num">{{request.num}} {{request.text}} {{request.date}}</span>
              <span class="request-status" v-bind:class="request.statusClass">{{request.status}}</span>
            </span>
            <span class="request-item-text">{{request.title}}</span>
            <span class="request-item-text">{{request.value}}</span>
          </a>
        </template>
      </div>
    </div>
    <div class="section-bottom">
      <a href="#/NewRequest" class="btn btn-full-width btn-main">Создать новую заявку</a>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: "Заявки на сервис",
      sortParam: "",
      isActive: true,
      requests: [
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOw 5140",
          value: "АХ5533ВН",
          num: "№1",
          date: "01.04.2019",
          text: " от ",
          status: "В работе",
          statusId: "1",
          statusClass: "status-inwork"
        },
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№2",
          date: "02.04.2019",
          text: " от ",
          status: "Новая",
          statusId: "0",
          statusClass: "status-new"
        },
        {
          id: "#/RequestDone",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№3",
          date: "03.04.2018",
          text: " от ",
          status: "Выполнена",
          statusId: "2",
          statusClass: "status-done"
        },
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№4",
          date: "04.06.2019",
          text: " от ",
          status: "В работе",
          statusId: "1",
          statusClass: "status-inwork"
        },
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№5",
          date: "02.06.2019",
          text: " от ",
          status: "В работе",
          statusId: "1",
          statusClass: "status-inwork"
        },
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№6",
          date: "30.07.2018",
          text: " от ",
          status: "В работе",
          statusId: "1",
          statusClass: "status-inwork"
        },
        {
          id: "#/Request",
          title: "ТРАКТОР CASE IH AXIAL-FLOW 5140",
          value: "АХ5533ВН",
          num: "№6",
          date: "30.07.2019",
          text: " от ",
          status: "В работе",
          statusId: "1",
          statusClass: "status-inwork"
        },
        {
          id: "#/Request",
          title: "КОМБАЙН CASE IH AXIAL-FLOW 7250",
          value: "АХ5533ВН",
          num: "№7",
          date: "30.07.2019",
          text: " от ",
          status: "Отменена",
          statusId: "3",
          statusClass: "status-canceled"
        }
      ]
    };
  },
  methods: {
    changeByDate: function() {
      this.isActive = false;
    },
    changeByStatus: function() {
      this.isActive = true;
    }
  },
  computed: {
    sortedList() {
      switch (this.sortParam) {
        case "date":
          return this.requests.sort(sortByDate);
        case "status":
          return this.requests.sort(sortByStatus);
        default:
          return this.requests;
      }
    }
  }
};

var sortByStatus = function(a, b) {
  return a.statusId > b.statusId ? 1 : -1;
};
var sortByDate = function(a, b) {
  a = a.date.split(".");
  b = b.date.split(".");
  a = a[2] + a[0] + a[1];
  b = b[2] + b[0] + b[1];
  return a > b ? -1 : 1;
};
</script>
