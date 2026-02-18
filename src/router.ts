import { createRouter, createWebHistory } from "vue-router";
import { ref, nextTick } from "vue";

export const isRouteLoading = ref(true);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/pages/Home.vue"),
        meta: { layout: "default", title: "pages.main" },
    },
    {
        path: "/docs",
        name: "docs",
        component: () => import("@/pages/Privacy.vue"),
        meta: { layout: "empty", title: "pages.main" },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) return savedPosition;

        if (to.hash) return { el: to.hash };

        return { top: 0 };
    },
});

router.beforeResolve(() => {
    isRouteLoading.value = true;
});

router.afterEach(async () => {
    await nextTick();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            isRouteLoading.value = false;
        });
    });
});
