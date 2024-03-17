// vue3-carousel
import 'vue3-carousel/dist/carousel.css';

// main css
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
