import defaultLayout from "@/layouts/DefaultLayout";
import productsPage from "./pages/index";

export default [
  {
    path: "/products",
    name: "products",
    components: {
      layout: defaultLayout,
      content: productsPage,
    },
    meta: {
      section: "products",
    },
  },
];
