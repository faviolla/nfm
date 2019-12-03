<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
    </div>
    <div class="section-main user-page">
      <div class="user-info-holder">
        <div class="request-row">
          <span class="request-name">ФИО</span>
          <span class="request-val">{{userName}}</span>
        </div>
        <div class="request-row">
          <span class="request-name">E-mail</span>
          <span class="request-val">{{userEmail}}</span>
        </div>
        <div class="request-row">
          <span class="request-name">Телефон</span>
          <span class="request-val">{{userPhone}}</span>
        </div>
        <div class="request-row">
          <span class="request-name">Регион</span>
          <span class="request-val">{{userRegion}}</span>
        </div>
        <div class="request-row">
          <span class="request-name">EГРПОУ</span>
          <span class="request-val">{{userNumber}}</span>
        </div>
        <div class="request-row">
          <span class="request-name">Название предприятия</span>
          <span class="request-val">{{userCompany}}</span>
        </div>
        <div class="user-action-holder">
          <div class="user-action-row">
            <a href="#/PersonalForm" class="link-red">
              <i class="icon icon-edit">icon</i>
              <span>Редактировать данные</span>
            </a>
          </div>
          <div class="user-action-row">
            <a href="#/PersonalPassword" class="link-red">
              <i class="icon icon-change-pass">icon</i>
              <span>Изменить пароль</span>
            </a>
          </div>
          <div class="user-action-row">
            <a href="/" class="link-red">Выйти</a>
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
      title: "Личный кабинет",
      userName: "Валентин Петрович Васильев",
      userPhone: "+38 (064) 643 23 44",
      userEmail: "vasiliev@gmail.com",
      userRegion: "Винницкая область",
      userNumber: "567678045",
      userCompany: "Агротрейд "
    };
  },
  mounted() {
    let profile = window.profile;
    if (profile) {
      this.userName = profile.userName;
      this.userPhone = profile.userPhone;
      this.userEmail = profile.userEmail;
      this.userRegion = profile.userRegion;
      this.userNumber = profile.userNumber;
      this.userCompany = profile.userCompany;
    }
  }
};
</script>


