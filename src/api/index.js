import { ProductsModule } from "./modules";
import $axios from "axios";

$axios.defaults.baseURL = "https://dummyjson.com/";
$axios.defaults.headers.common.Accept = "application/json";
$axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.status);
    return Promise.reject(error);
  }
);
export default (ctx) => ({
  products: ProductsModule({ ...ctx, $axios }),
});
