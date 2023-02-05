import { boot } from "quasar/wrappers";
import axios from "axios";
let app_ID = "af439960";
let app_key = "7e84f3e49c59e4130220d54c1662df25";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${app_ID}&app_key=${app_key}`;

const api = axios.create({ baseURL: baseUrl });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$baseUrl = baseUrl;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
