<template>
  <div class="page-container">
    <div class="section-top">
      <div class="title-holder">
        <a href="/" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">
            <i class="icon icon-tractor"></i>
            {{title}}
          </span>
        </h1>
      </div>
    </div>
    <div class="section-main catalog-main-section">
      <nav class="catalog-list">
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-tractors.svg" alt="Тракторы"/>
          </span>
          <span class="catalog-item-name">Тракторы</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-harvesters.svg" alt="Комбайны"/>
          </span>
          <span class="catalog-item-name">Комбайны</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-reapers.svg" alt="Жатки"/>
          </span>
          <span class="catalog-item-name">Жатки</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-sprayers.svg" alt="Опрыскиватели"/>
          </span>
          <span class="catalog-item-name">Опрыскиватели</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-seeders.svg" alt="Сеялки"/>
          </span>
          <span class="catalog-item-name">Сеялки</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-tillage.svg" alt="Почвообработка"/>
          </span>
          <span class="catalog-item-name">Почвообработка</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-others.svg" alt="Другая техника"/>
          </span>
          <span class="catalog-item-name">Другая <br>техника</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-press-pickers.svg" alt="Пресс-подборщики"/>
          </span>
          <span class="catalog-item-name">Пресс- <br>подборщики</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-exact-agriculture.svg" alt="Точное земледелие"/>
          </span>
          <span class="catalog-item-name">Точное <br>земледелие</span>
        </a>
        <a href="#/CatalogSection">
          <span class="catalog-image">
            <img src="../../images/section-used-machinery.svg" alt="Техника б/у"/>
          </span>
          <span class="catalog-item-name">Техника б/у</span>
        </a>
      </nav>
    </div>
  </div>
</template>


<script>
  module.exports = {
    data: function() {
      return {
        title: "Каталог техники"
      };
    }
  };
</script>