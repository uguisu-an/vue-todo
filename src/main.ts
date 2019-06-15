import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VuePostcodeInput from "@/components/VuePostcodeInput.vue";
Vue.component("v-postcode-input", VuePostcodeInput);
import VDateInput from "@/components/VDateInput.vue";
Vue.component("v-date-input", VDateInput);

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
