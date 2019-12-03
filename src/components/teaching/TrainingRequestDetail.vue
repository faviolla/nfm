<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="#/TrainingRequestsList" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main">
      <div class="request-holder">
        <div class="request-info">
          <div class="request-row">
            <span class="request-name request-name-status">
              <span class="request-name">Город</span>
              <span class="request-status status-canceled">Закрыта</span>
            </span>
            <span class="request-val">
              <span>Новые Санжары</span>
            </span>
          </div>
          <div class="request-row">
            <span class="request-name">Тема</span>
            <span class="request-val">Тракторы Case IH MAgnum</span>
          </div>
          <div class="request-row">
            <span class="request-name">Желаемая дата и время</span>
            <span class="request-val">13.06.2019 с 10:00 до 12:00</span>
          </div>
          <div class="request-row">
            <span class="request-name">Количество человек</span>
            <span class="request-val">7</span>
          </div>
          <div class="request-row">
            <span class="request-name">Комментарий</span>
            <span class="request-val">Возможно будет участвовать еще 2-3 чаловека</span>
          </div>
          <div class="request-row">
            <span class="request-name">Лектор</span>
            <span class="request-val item-flex-holder">
              <span class="item-img">
                <img src="../../images/img-teacher04.jpg" alt="teacher">
              </span>
              <span>Куринный Александр Давыдович</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Заявка № 1",
      }
    }
  }
</script>