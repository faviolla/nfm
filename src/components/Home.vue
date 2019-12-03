<template>
  <div class="main-index-container" v-bind:class="{showedInfo: showInfo, isMap: isMap}">
    <div class="main-container" v-bind:style="{'transform': transform}">
      <div class="top-promo">
        <div class="top-promo-holder">
          <span class="logo">
            <img src="../images/nfmlogo.svg" alt="nfm logo" />
          </span>
          <span class="logo-text">Официальный дистрибьютор техники Case IH</span>
        </div>
        <div class="map-btn-box" @click="tapMap" v-touch:swipe.bottom="tapMap">
          <div class="map-btn" v-if="!isMap">
            <span class="icon"></span>
            <span class="text">Филиалы</span>
          </div>
          <div class="map-icon-arrow">
            <i class="icon-map-arrow"></i>
          </div>
        </div>
      </div>
      <div class="map-section">
        <gmap-map
          ref="mainMap"
          :center="startLocation"
          :zoom="6"
          map-type-id="roadmap"
          style="width: 100%; height: 100%"
          :options="{
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            disableDefaultUi: false
          }"
        >
          <gmap-marker
            v-for="(item, key) in coordinates"
            :key="key"
            :position="getPosition(item)"
            :clickable="true"
            :icon="getMarkers(key)"
            @click="toggleInfo(item, key)"
          ></gmap-marker>
          <!--          <gmap-info-window-->
          <!--                  :options="infoOptions"-->
          <!--                  :position="infoPosition"-->
          <!--                  :opened="infoOpened"-->
          <!--                  @closeclick="closeInfoWindow()"-->
          <!--          >-->
          <!--            <div class="city-info">-->
          <!--              <div class="city-name">{{ selectedCity }}</div>-->
          <!--              <div class="city-phone">{{ selectedPhone }}</div>-->
          <!--              <div class="city-email">{{ selectedEmail }}</div>-->
          <!--              <div class="city-location">{{ selectedLocation }}</div>-->
          <!--              <button class="btn btn-full-width btn-main">Проложить маршрут</button>-->
          <!--              <div class="map-btn-close-holder">-->
          <!--                <button-->
          <!--                        class="map-btn-close"-->
          <!--                        @click="closeInfoWindow()"-->
          <!--                ></button>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </gmap-info-window>-->
        </gmap-map>
        <transition name="map-info-window-slide">
          <div
            class="map-info-window"
            :opened="infoOpened"
            :position="infoPosition"
            v-if="infoOpened"
          >
            <div class="city-info">
              <div class="city-name">{{ selectedCity }}</div>
              <div class="city-phone">{{ selectedPhone }}</div>
              <div class="city-email">{{ selectedEmail }}</div>
              <div class="city-location">{{ selectedLocation }}</div>
              <button class="btn btn-full-width btn-main">Проложить маршрут</button>
              <div class="map-btn-close-holder">
                <button
                  class="map-btn-close"
                  @click="closeInfoWindow()"
                  v-touch:swipe.top="closeInfoWindow"
                ></button>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="main-menu-section">
        <a href="#/Catalog">
          <span class="icon icon-catalog">icon</span>
          <span class="text">
            Каталог
            <br />техники
          </span>
        </a>
        <a href="#/Search">
          <span class="icon icon-spare-part">icon</span>
          <span class="text">
            Запасные
            <br />части
          </span>
        </a>
        <a href="#/ServiceRequests">
          <span class="icon icon-order-services">icon</span>
          <span class="text">
            Заявки на
            <br />сервис
          </span>
        </a>
        <a href="#/Teaching">
          <span class="icon icon-teaching">icon</span>
          <span class="text">
            Обучение
            <br />персонала
          </span>
        </a>
      </nav>
      <div
        class="information-btn-box"
        @click="tapInformation"
        v-touch:swipe.bottom="tapInformation"
        v-touch:swipe.top="tapInformation"
      >
        <div class="information-btn" v-bind:class="{showedInfo: showInfo}">
          <span class="icon"></span>
          <span class="text">Информация</span>
        </div>
      </div>
    </div>
    <div
      class="phone-section"
      v-touch:tap="tapHandler"
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler"
      v-bind:class="{opened: isActive}"
    >
      <span class="phone-btn">tap</span>
      <div class="phone-panel">
        <div class="phone-panel-items">
          <div class="phone-panel-item">
            <div class="phone-panel-title">Техника</div>
            <div class="phone-panel-value">0 (800) 40 7887</div>
          </div>
          <div class="phone-panel-item">
            <div class="phone-panel-title">Запчасти</div>
            <div class="phone-panel-value">0 (800) 40 8754</div>
          </div>
          <div class="phone-panel-item">
            <div class="phone-panel-title">Сервис</div>
            <div class="phone-panel-value">0 (800) 40 0907</div>
          </div>
        </div>
        <div class="phone-panel-socials">
          <a href class="phone-panel-socials-item">
            <i class="icon-telegram"></i>
          </a>
          <a href class="phone-panel-socials-item">
            <i class="icon-viber"></i>
          </a>
          <a href class="phone-panel-socials-item">
            <i class="icon-messenger"></i>
          </a>
          <a href class="phone-panel-socials-item">
            <i class="icon-whatsup"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="information-section" v-bind:style="{'transform': transform}" ref="infoBox">
      <div class="information-list">
        <a href class="information-item">nfm.com.ua</a>
        <a href class="information-item">0 (800) 40 7887</a>
        <a href="#/Settings" class="information-item">Настройки</a>
        <a href="#/Personal" class="information-item">Личный кабинет</a>
      </div>
      <div class="footer-menu">
        <a href>Кодекс корпоративной этики</a>
        <a href>Политика конфиденциальности</a>
        <a href>Условия использования</a>
      </div>
    </div>
  </div>
</template>


<script>
module.exports = {
  data: function() {
    let mapMarker = require("../images/ic-map-marker.svg"),
      mapMarkerActive = require("../images/ic-map-marker-active.svg");
    return {
      mapMarker,
      mapMarkerActive,
      isActive: false,
      showInfo: false,
      transform: "translateY(0)",
      heightString: 0,
      isMap: false,
      isMarkerClick: false,
      startLocation: {
        lat: 49.0384,
        lng: 33.4513
      },
      coordinates: {
        0: {
          city: "Киев (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "Киев",
          lat: "50.4021702",
          lng: "30.3926088"
        },
        1: {
          city: "Харьков (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name:
            "Харьковская обл., Харьковский р-н, пгт. Песочин, ул. Надежды, 15",
          lat: "49.9543502",
          lng: "36.1241697"
        },
        2: {
          city: "Николаев",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "ул. Надежды, 15",
          lat: "46.9332135",
          lng: "31.8679149"
        },
        3: {
          city: "Дніпро́ (сервисный центр)",
          phone: "0 (800) 40 7887",
          email: "superservice@nfm.com.ua",
          full_name: "вулиця 20-річчя Перемоги, 12",
          lat: "48.4164999",
          lng: "35.1338916"
        }
      },
      selectedCity: null,
      selectedPhone: null,
      selectedEmail: null,
      selectedLocation: null,
      infoPosition: null,
      infoOpened: false,
      infoCurrentKey: null,
      markerOptions: {
        url: mapMarker
      },
      selectedKey: null,
      selectedMarker: null
    };
  },
  methods: {
    tapHandler() {
      this.isActive ? (this.isActive = false) : (this.isActive = true);
      // console.log("touchHandler");
    },
    swipeLeftHandler() {
      this.isActive = true;
      // console.log("swipeLeftHandler");
    },
    swipeRightHandler() {
      this.isActive = false;
      // console.log("swipeRightHandler");
    },
    gettingHeight() {
      this.heightString = this.$refs.infoBox.clientHeight;
    },
    tapInformation() {
      this.gettingHeight();
      this.showInfo
        ? ((this.showInfo = false), (this.transform = "translateY(0)"))
        : ((this.showInfo = true),
          (this.transform = "translateY(-" + this.heightString + "px)"));
    },
    tapMap() {
      this.isMap = !this.isMap;
    },
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    },
    getMarkers(key) {
      if (this.selectedKey === key) return this.mapMarkerActive;
      return this.mapMarker;
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      // this.startLocation.lat = parseFloat(marker.lat)+1;
      // this.startLocation.lng = parseFloat(marker.lng);
      this.selectedCity = marker.city;
      this.selectedPhone = marker.phone;
      this.selectedEmail = marker.email;
      this.selectedLocation = marker.full_name;
      if (this.infoCurrentKey === key) {
        this.infoOpened
          ? ((this.infoOpened = false), (this.selectedKey = null))
          : ((this.infoOpened = true), (this.selectedKey = key));
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
        this.selectedKey = key;
      }
    },
    closeInfoWindow: function() {
      this.infoOpened = false;
      this.selectedKey = null;
    }
  }
};
</script>
