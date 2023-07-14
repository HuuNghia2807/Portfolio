import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/styles/global.scss";
import "@/assets/styles/_variables.scss";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
