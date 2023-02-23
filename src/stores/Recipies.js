import { defineStore } from "pinia";

export const useCounterStore = defineStore("recipies", {
  app_ID: "af439960",
  app_key: "7e84f3e49c59e4130220d54c1662df25",
  state: () => ({
    recipies: [],
    recipie: [],
    // baseUrl: `https://api.edamam.com/api/recipes/v2?type=public&q=salad&app_id=${this.app_ID}&app_key=${this.app_key}`,
  }),

  getters: {
    getRecipies: (state) => state.recipies,
    getRecipie: (state) => {
      gsate.recipie;
    },
  },

  actions: {
    async fetchAllRecipies() {
      this.Recipies = [];
      const { data: recipies } = useFetch(this.baseUrl, {
        key: `recipies`,
      });
      this.recipies = recipies;
    },
  },
});
