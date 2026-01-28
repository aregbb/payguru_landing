import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/pages/Home.vue"),
        meta: { layout: "default" },
    },
    {
        path: "/privacy",
        name: "privacy",
        component: () => import("@/pages/Privacy.vue"),
        meta: { layout: "empty" },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) return savedPosition;
        // если на лендинге якоря — оставим поведение браузера
        if (to.hash) return { el: to.hash, top: 80, behavior: "smooth" };
        return { top: 0 };
    },
});
