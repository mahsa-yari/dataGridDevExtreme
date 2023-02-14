import "devextreme/dist/css/dx.common.css";
import themes from "devextreme/ui/themes";
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./themes/generated/theme.additional.css";
import "./themes/generated/theme.base.css";
import "./services";

Vue.config.productionTip = false;

themes.initialized(() => {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
