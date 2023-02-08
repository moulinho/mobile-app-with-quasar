import { boot } from "quasar/wrappers";
import axios from "axios";
let app_ID = "af439960";
let app_key = "7e84f3e49c59e4130220d54c1662df25";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${app_ID}&app_key=${app_key}`;

// const baseUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";
const baseUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b";

// const baseUrl2 = "https://the-cocktail-db.p.rapidapi.com/random.php";
// let app_key_cocktail = "712e51c057mshf59734dcb3e879bp197e85jsn52216c195f2c";
// let API_host = "the-cocktail-db.p.rapidapi.com";

const api = axios.create({ baseURL: baseUrl });
// const api2 = axios.create({
//   baseURL: baseUrl2,
//   headers: {
//     "X-RapidAPI-Key": app_key_cocktail,
//     "X-RapidAPI-Host": API_host,
//   },
// });
const api2 = axios.create({ baseURL: baseUrl2 });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$api = api2;
  app.config.globalProperties.$baseUrl = baseUrl;
  app.config.globalProperties.$baseUrl = baseUrl2;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, api2 };
