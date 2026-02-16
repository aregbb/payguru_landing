import {createApp, nextTick, watch} from 'vue'
import './style.scss'
import "@/assets/css/tailwind.css"
import "@/assets/fonts/fonts.css"
import App from './App.vue'

import {isRouteLoading, router} from "@/router";
import { i18n } from "@/i18n";

const setTitle = () => {
    const { t } = i18n.global;
    const route = router.currentRoute.value;

    const appName = " Pay Guru "
    const titleKey = route.meta?.title as string | 'Pay Guru система оркестрации платежей';
    console.log(route, titleKey, t('nav.about'))
    document.title = titleKey ? `${appName} ${t(titleKey)}` : appName;
}


router.afterEach(() => setTitle());

watch(
    () => i18n.global.locale.value,
    () => setTitle()
);

createApp(App).use(router).use(i18n).mount('#app')

router.isReady().then(async () => {
    await nextTick();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            isRouteLoading.value = false
        })
    })
})
