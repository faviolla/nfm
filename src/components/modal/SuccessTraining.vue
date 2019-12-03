<template>
  <div class="page-container page-success">
    <div class="section-main">
      <div class="page-success-holder">
        <div class="icon icon-success"></div>
        <div class="title-success">Спасибо, вы записались на обучение!</div>
        <div>С вами свяжется наш менеджер</div>
      </div>
    </div>
    <div class="section-bottom">
      <a href="#/Teaching " class="btn btn-full-width btn-main">{{btnText}}</a>
    </div>
  </div>
</template>



<script>
module.exports = {
  data: function() {
    return {
      btnText: "Понятно"
    };
  }
};
</script>
