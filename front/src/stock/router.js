export const stockRoutes = [
  {
    path: "/stock",
    name: "stockList",
    component: () =>
      import(/* webpackChunkName: "stock_list" */ "./views/ListView.vue"),
  },
  {
    path: "/stock/add",
    name: "stockAdd",
    component: () =>
      import(/* webpackChunkName: "stock_add" */ "./views/AddView.vue"),
  },
];
