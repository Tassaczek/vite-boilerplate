import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n, I18nOptions } from 'vue-i18n';
import router from './router/index';
import App from './App.vue';
import enUS from './translations/en-US.json';

// store
const pinia = createPinia();

// locales
type MessageSchema = typeof enUS;

const i18n = createI18n<I18nOptions, [MessageSchema], 'en-US'>({
	locale: 'en-US',
	fallbackLocale: 'en-US',
	messages: {
		'en-US': enUS,
	},
});

// app
const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
