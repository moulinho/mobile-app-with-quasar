import { defineStore } from "pinia";
import axios, { api } from "src/boot/axios";

export const useCounterStore = defineStore("recipies", {
  app_ID: "af439960",
  app_key: "7e84f3e49c59e4130220d54c1662df25",
  state: () => ({
    recipies: [],
    recipie: [],
    // baseUrl: `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${this.app_ID}&app_key=${this.app_key}`,
    baseUrl: "http://127.0.0.1:5500/src/stores/daba.json",
  }),

  getters: {
    getRecipies: (state) => state.recipies,
    getRecipie: (state) => {
      state.recipie;
    },
  },

  actions: {
    //     fetch(api)
    //         .then((response) => response.json())
    //         .then(({ data }) => (this.adps = data))
    //         .catch((error) => console.log(error));
    //         const store = useCatDogStore();

    // const dogs = ref(store.catsAsDogs.map(c => ({...c})));
    async fetchAllRecipies() {
      this.recipie = [];
      let res = await api({
        url: this.baseUrl,
        method: "GET",
      });
      const recipies = res.data.posts;
      console.log("res", recipies);
      return (this.recipies = recipies);

      // fetch(this.baseUrl)
      //   .then((data) => data.json())
      //   .then((result) => (this.recipies = result));
      // console.log("recipies", this.recipies);
    },
  },
});
