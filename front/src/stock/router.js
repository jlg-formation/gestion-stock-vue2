import StockView from "./views/StockView";

export const stockRoute = {
  path: "/stock",
  component: StockView,
  children: [
    {
      path: "",
      name: "stockList",
      component: () =>
        import(/* webpackChunkName: "stock_list" */ "./views/ListView.vue"),
    },
    {
      path: "add",
      name: "stockAdd",
      component: () =>
        import(/* webpackChunkName: "stock_add" */ "./views/AddView.vue"),
    },
  ],
};
