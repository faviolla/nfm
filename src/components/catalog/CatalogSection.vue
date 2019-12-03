<template>
  <div class="page-container">
    <div class="section-top section-top-lg">
      <div class="title-holder">
        <a href="#/Catalog" class="link-back">
          <i class="icon icon-arrow-back"></i>
        </a>
        <h1 class="title">
          <span class="title-item">{{title}}</span>
        </h1>
      </div>
      <div class="sort-holder title-filter-list">
        <ul class="sort-list">
          <li class="sort-list-item active">
            <span class="sort-list-item-link">Все</span>
          </li>
          <li class="sort-list-item">
            <span class="sort-list-item-link">110-140 л.с.</span>
          </li>
          <li class="sort-list-item">
            <span class="sort-list-item-link">140-170 л.с.</span>
          </li>
          <li class="sort-list-item">
            <span class="sort-list-item-link">170-200 л.с.</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-main catalog-main-section">
      <div class="sub-catalog-list">
        <div class="sub-catalog-item">
          <div class="sub-catalog-item__img">
            <a href="#/CatalogDetail">
              <img src="../../images/img-tractor01.jpg" alt="Image">
            </a>
          </div>
          <div class="sub-catalog-item__info">
            <div class="sub-catalog-item__name">
              <a href="#/CatalogDetail">Трактор Case IH Farmall JX 110</a>
            </div>
            <div class="info-list">
              <div class="info-list__row">
                <div class="info-list__title">Мощность ном.:</div>
                <div class="info-list__value">110 л.с. (80 кВт)</div>
              </div>
              <div class="info-list__row">
                <div class="info-list__title">Объём двигателя:</div>
                <div class="info-list__value">3,9 л</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-catalog-item">
          <div class="sub-catalog-item__img">
            <a href="#/CatalogDetail">
              <img src="../../images/img-tractor02.jpg" alt="Image">
            </a>
          </div>
          <div class="sub-catalog-item__info">
            <div class="sub-catalog-item__name">
              <a href="#/CatalogDetail">Трактор Case IH Maxxum 110</a>
            </div>
            <div class="info-list">
              <div class="info-list__row">
                <div class="info-list__title">Мощность ном.:</div>
                <div class="info-list__value">110 л.с. (80 кВт)</div>
              </div>
              <div class="info-list__row">
                <div class="info-list__title">Объём двигателя:</div>
                <div class="info-list__value">3,9 л</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-catalog-item">
          <div class="sub-catalog-item__img">
            <a href="#/CatalogDetail">
              <img src="../../images/img-tractor03.jpg" alt="Image">
            </a>
          </div>
          <div class="sub-catalog-item__info">
            <div class="sub-catalog-item__name">
              <a href="#/CatalogDetail">Трактор Case IH Puma 155</a>
            </div>
            <div class="info-list">
              <div class="info-list__row">
                <div class="info-list__title">Мощность ном.:</div>
                <div class="info-list__value">110 л.с. (80 кВт)</div>
              </div>
              <div class="info-list__row">
                <div class="info-list__title">Объём двигателя:</div>
                <div class="info-list__value">3,9 л</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                title: "Тракторы"
            }
        }
    }
</script>