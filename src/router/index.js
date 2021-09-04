import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue';
import Features from "../views/Features.vue";

const routes = [
     {
          path: "/",
          name: "Home",
          component: Home,
     },
     {
          path: "/products",
          name: "Products",
          component: Products,
     },
     {
          path: "/xyz",
          name: "Xyz",          
          component: () =>
               import(/* webpackChunkName: "about" */ "../views/Xyz.vue"),
     },
     {
          path: "/features",
          name: "Features",
          component: Features,
     },
   
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
