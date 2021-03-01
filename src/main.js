import Vue from "vue";
import App from "./App.vue";
import Trix from "trix";
import "trix/dist/trix.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
