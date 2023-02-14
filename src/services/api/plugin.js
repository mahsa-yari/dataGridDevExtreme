import apiFactory from "@/api";
import store from "@/store";

export const $api = apiFactory({
  store,
});

export default ({ inject }) => {
  inject("api", $api);
};
