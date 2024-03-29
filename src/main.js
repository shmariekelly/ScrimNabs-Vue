// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "../router";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(VeeValidate, { inject: false });

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
