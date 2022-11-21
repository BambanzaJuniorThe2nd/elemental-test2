import { createApp } from "vue";
import { router } from "./router";
import "./styles/index.css";
import { initBackendClient } from "./api";
import App from "./App.vue";

initBackendClient();

const app = createApp(App).use(router);
app.mount("#app");
