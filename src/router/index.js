import Vue from "vue";
import VueRouter from "vue-router";
import loadRoutes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: loadRoutes(),
});

export function createLink(name, params = {}, options = {}) {
  return { name, params, ...options };
}
export default router;
