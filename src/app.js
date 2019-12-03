import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vue2TouchEvents from "vue2-touch-events";
import VModal from "vue-js-modal";
import Vuelidate from "vuelidate";
import vSelect from "vue-select";
import Autocomplete from "v-autocomplete";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import * as VueGoogleMaps from "vue2-google-maps";
import VCalendar from "v-calendar";
import "v-autocomplete/dist/v-autocomplete.css";
import "./styles/main.scss";

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents);
Vue.use(Vuelidate);
Vue.use(Autocomplete);
Vue.use(VueNumberInput);
Vue.component("v-select", vSelect);
Vue.use(VModal);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB5zdJrg17CL2W9wxiXsLvAdoztzhxMdPo",
    libraries: "places,drawing,visualization"
  }
});
Vue.use(VCalendar, {
  formats: {
    title: "M YY",
    weekdays: "WW"
  }
  // componentPrefix: 'vc'
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker-cache.js").then(() => {
    console.log("Service Worker Registered");
  });
}

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
});
