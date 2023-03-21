import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Category from "../views/Category.vue";
import Post from "../views/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;