import defaultLayout from "@/layouts/DefaultLayout";
import homePage from "./pages/index";

export default [
  {
    path: "/home",
    name: "home",
    components: {
      layout: defaultLayout,
      content: homePage,
    },
  },
];
