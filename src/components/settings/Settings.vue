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
    <div class="section-main">
      <div class="items-list-holder">
        <nav class="items-list">
          <div class="list-item list-item-setting">
            <span>Уведомления</span>
            <span class="tgl-holder">
              <input class="tgl" id="notifications" type="checkbox" />
              <label class="tgl-btn" for="notifications"></label>
            </span>
          </div>
          <a href="#/SettingsLang" class="list-item list-item-setting">
            <span>Язык</span>
            <span class="list-item-setting-val">Русский</span>
          </a>
          <a href="#/SettingsFont" class="list-item list-item-setting">
            <span>Размер шрифта</span>
            <span class="list-item-setting-val">Средний</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Настройки"
    };
  }
};
</script>


