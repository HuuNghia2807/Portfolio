import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ScrollReveal from "scrollreveal";

import "@/assets/styles/global.scss";
import "@/assets/styles/_variables.scss";
import "primeicons/primeicons.css";

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
