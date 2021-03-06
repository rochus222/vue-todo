import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Page404 from "./views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todo/:id",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Todo.vue")
    },
    {
      path: "/*",
      name: "page404",
      component: Page404
    },
  ]
});
