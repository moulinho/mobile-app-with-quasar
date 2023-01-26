const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/home",
        name: "Acceuil",
        component: () => import("pages/home.vue"),
      },
      {
        path: "/CategoriesRecette",
        name: "Catégories Recettes",
        component: () => import("pages/recettes/CategoriesRecette.vue"),
      },
      {
        path: "/CategoriesCocktail",
        name: "Catégories Cocktail",
        component: () => import("pages/coktails/CategoriesCoktail.vue"),
      },
      {
        path: "/DetailCategories",
        name: "Détails categories",
        component: () => import("pages/recettes/detailCategories.vue"),
      },
      {
        path: "/DetailCategories",
        name: "Détails categories",
        component: () => import("pages/recettes/detailCategories.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
