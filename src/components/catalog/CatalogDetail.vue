<template>
  <div class="page-container catalog-detail"
       v-bind:class="{activePointDetail: pointDetail}"
  >
    <div class="section-top">
      <div class="title-holder">
        <a href="#/CatalogSection" class="link-back" v-if="!pointDetail">
          <i class="icon icon-arrow-back"></i>
        </a>
        <span class="link-back"
           v-if="pointDetail"
           @click="pointDetail=false, activeIndex = null"
        >
          <i class="icon icon-arrow-back"></i>
        </span>
      </div>
    </div>
    <div class="section-main">
      <div class="detail-image">
        <div class="detail-image-frame">
          <img src="../../images/img-tractor04.jpg" alt="image">
          <div class="detail-points">
            <span class="detail-point"
                  v-for="(item, itemIndex) in pointCoordinates"
                  v-bind:style="{ top: item.top, left: item.left}"
                  @click="selectedPoint(item, itemIndex)"
                  :class="{'active': activeIndex === itemIndex}"
                  :key="itemIndex"
            ></span>
          </div>
        </div>
      </div>
      <div class="detail-description"
           v-for="(item, itemIndex) in pointCoordinates"
           v-if="itemIndex === activeIndex"
      >
        <div class="detail-description-text">
          <p>{{item.text.description}}</p>
        </div>
      </div>
      <div class="detail-info"
           v-if="!pointDetail"
      >
        <div class="detail-title">Трактор Case IH Farmall JX 110</div>
        <div class="detail-info__container">
          <div class="detail-info__item change-info-box">
            <div class="detail-info__title">Рабочая ширина</div>
            <div class="detail-info__value">
              <div class="detail-info__parameters">
                <div class="detail-info__parameter"
                  v-for="(item, itemIndex) in detailParameters"
                     :class="{'active': activeItemId === itemIndex}"
                     @click="setParameterActive(itemIndex)"
                >
                  {{item.name}}
                </div>
              </div>
            </div>
          </div>
          <template v-for="(item, index) in workingWidth"
                    v-if="activeItemId === index"
          >
            <div class="detail-info__item"
                  v-for="itemInner in item.parameter"
            >
              <div class="detail-info__title">{{itemInner.title}}</div>
              <div class="detail-info__value">{{itemInner.value}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="section-bottom"
         v-if="!pointDetail"
    >
      <a href="#/NewRequestEquipment" class="btn btn-full-width btn-main">Подать заявку</a>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        detailParameters: [
          { name: '22 фт.' },
          { name: '25,5 фт.' },
          { name: '28 фт.' },
          { name: '31 фт.' },
          { name: '34 фт.' },
          { name: '37 фт.' },
          { name: '42 фт.' },
          { name: '47 фт.' },
        ],
        activeItemId: 0,
        workingWidth: [{
          parameter: [
            {
              title: 'Транспортная ширина / высота (без борон и катков)',
              value: '4,5 / 3,1 м'
            },{
              title: 'Вес (ориентировочный)',
              value: '3828 кг'
            },{
              title: 'Минимально необходимая мощность трактора',
              value: '190 л.с. (140 кВт)'
            },{
              title: 'Количество лап',
              value: '41'
            },{
              title: 'Стойка / лапа',
              value: 'Сечение 17,4 х 44,5 мм, расстояние от стойки до стойки 165 мм, пружинная защита срабатывает при 81 кгс, высота хода 356 мм / лапы «с длинным носом» шириной 23,6 см, изготовленные из сплава Earth Metal'
            },{
              title: 'Глубина обработки / Рабочая скорость',
              value: 'Регулировка рабочей глубины обработки от 4 до 15 см выполняется одной рукояткой / от 9 до 16 км/ч в зависимости от условий обработки'
            },{
              title: 'Органы финишной обработки',
              value: '2, 3 или 4 ряда прутковых борон (прутки Ø11 мм, длиной 391 мм, устанавливаются под углом 5°, 20° или 30°) или 3 ряда зубовых борон (передний ряд устанавливается под углом 30° или 46°) и / или трубчатый или планчатый каток Ø356 мм'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 2',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 3',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 4',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 5',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 6',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 7',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        },{
          parameter: [
            {
              title: 'Title Parameter 8',
              value: 'Value'
            },{
              title: 'Title',
              value: 'Value'
            }
          ]
        }],
        pointCoordinates: [
          {
            top: '177px',
            left: '16px',
            text: {
              description: 'Потужний 8,7-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          },{
            top: '92px',
            left: '69px',
            text: {
                description: 'Потужний 9-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          },{
            top: '45px',
            left: '155px',
            text: {
                description: 'Потужний 10-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          },{
            top: '200px',
            left: '177px',
            text: {
                description: 'Потужний 7-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          },{
            top: '79px',
            left: '242px',
            text: {
                description: 'Потужний 8-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          },{
            top: '145px',
            left: '257px',
            text: {
                description: 'Потужний 7,6-літровий 6-циліндровий двигун спеціально розроблений для одночасного забезпечення найвищої потужності та паливної економічності. Спрямлена крива крутного моменту нового Magnum дозволяє досягти максимального крутного моменту на більшому діапазоні швидкостей двигуна.'
            }
          }
        ],
        activeIndex: undefined,
        pointDetail: false
      }
    },
    methods: {
      setParameterActive(itemIndex) {
        this.activeItemId = itemIndex;
      },
      selectedPoint(index, itemIndex) {
        if (this.activeIndex == itemIndex) {
            this.activeIndex = null;
            this.pointDetail = false;
        } else {
            this.activeIndex = itemIndex;
            this.pointDetail = true;
        }
      }
    }
  }
</script>