import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Main from "./views/Main.vue";
import Menu11 from "./views/Menu11.vue";
import Menu21 from "./views/Menu21.vue";
import Menu31 from "./views/Menu31.vue";
import Menu41 from "./views/Menu41.vue";
Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", name: "home", component: Home, children: [
        { path: "/", name: "main", component: Main },
        { path: "/Menu11", name: "menu11", component: Menu11, linkActiveClass: "is-current",},
        { path: "/Menu21", name: "menu21", component: Menu21, linkActiveClass: "is-current",},
        { path: "/Menu31", name: "menu31", component: Menu31, linkActiveClass: "is-current",},
        { path: "/Menu41", name: "menu41", component: Menu41, linkActiveClass: "is-current",}
      ]
    }
  ]
});
