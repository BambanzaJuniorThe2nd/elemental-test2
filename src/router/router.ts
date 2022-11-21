import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/home/home-page.vue";
import ContactPage from "../pages/contact/contact-page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
