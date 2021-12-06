import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

function test(a){
  console.log(`123`,a);
  
}
test(2)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
