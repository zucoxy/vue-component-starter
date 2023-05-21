import { createApp } from 'vue';
import MyComponent from 'my-component';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(MyComponent);
app.mount('#app');
