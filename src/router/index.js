import Vue from "vue";
import VueRouter from "vue-router";
import Home from "views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: () => import("views/category/Category.vue"),
  },
  {
    path: "/explore",
    component: () => import("views/explore/Explore.vue"),
  },
  {
    path: "/profile",
    component: () => import("views/profile/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
